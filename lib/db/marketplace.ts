import { db, storage } from "../firebase"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 as uuidv4 } from "uuid"
import type { MarketItem, Order, CartItem } from "@/types/marketplace"

// Collection references
const itemsCollection = collection(db, "marketItems")
const ordersCollection = collection(db, "marketOrders")
const cartsCollection = collection(db, "marketCarts")

// Create a new market item
export const createMarketItem = async (
  itemData: Omit<MarketItem, "id" | "postDate">,
  imageFiles?: File[],
): Promise<string> => {
  const itemId = uuidv4()
  const itemRef = doc(db, "marketItems", itemId)

  const imageUrls: string[] = []

  // Upload images if provided
  if (imageFiles && imageFiles.length > 0) {
    for (const file of imageFiles) {
      const storageRef = ref(storage, `market-items/${itemId}/${file.name}`)
      await uploadBytes(storageRef, file)
      const imageUrl = await getDownloadURL(storageRef)
      imageUrls.push(imageUrl)
    }
  }

  const newItem: MarketItem = {
    id: itemId,
    postDate: Timestamp.now(),
    images: imageUrls,
    ...itemData,
  }

  await setDoc(itemRef, newItem)
  return itemId
}

// Get a market item by ID
export const getMarketItemById = async (itemId: string): Promise<MarketItem | null> => {
  const itemRef = doc(db, "marketItems", itemId)
  const itemSnap = await getDoc(itemRef)

  if (itemSnap.exists()) {
    return itemSnap.data() as MarketItem
  } else {
    return null
  }
}

// Get all market items
export const getAllMarketItems = async (): Promise<MarketItem[]> => {
  const q = query(itemsCollection, orderBy("postDate", "desc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as MarketItem)
}

// Get market items by category
export const getMarketItemsByCategory = async (category: string): Promise<MarketItem[]> => {
  const q = query(itemsCollection, where("category", "==", category), orderBy("postDate", "desc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as MarketItem)
}

// Get market items by seller
export const getMarketItemsBySeller = async (sellerId: string): Promise<MarketItem[]> => {
  const q = query(itemsCollection, where("sellerId", "==", sellerId), orderBy("postDate", "desc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as MarketItem)
}

// Update a market item
export const updateMarketItem = async (itemId: string, itemData: Partial<MarketItem>): Promise<void> => {
  const itemRef = doc(db, "marketItems", itemId)
  await updateDoc(itemRef, itemData)
}

// Delete a market item
export const deleteMarketItem = async (itemId: string): Promise<void> => {
  const itemRef = doc(db, "marketItems", itemId)
  await deleteDoc(itemRef)
}

// Add item to cart
export const addToCart = async (userId: string, itemId: string, quantity = 1): Promise<void> => {
  const cartRef = doc(db, "marketCarts", userId)
  const cartSnap = await getDoc(cartRef)

  if (cartSnap.exists()) {
    const cart = cartSnap.data()
    const items = cart.items || []

    // Check if item already exists in cart
    const existingItemIndex = items.findIndex((item: CartItem) => item.itemId === itemId)

    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      items[existingItemIndex].quantity += quantity
    } else {
      // Add new item to cart
      items.push({ itemId, quantity })
    }

    await updateDoc(cartRef, { items })
  } else {
    // Create new cart if it doesn't exist
    await setDoc(cartRef, {
      userId,
      items: [{ itemId, quantity }],
    })
  }
}

// Remove item from cart
export const removeFromCart = async (userId: string, itemId: string): Promise<void> => {
  const cartRef = doc(db, "marketCarts", userId)
  const cartSnap = await getDoc(cartRef)

  if (cartSnap.exists()) {
    const cart = cartSnap.data()
    const items = cart.items || []

    // Filter out the item to remove
    const updatedItems = items.filter((item: CartItem) => item.itemId !== itemId)

    await updateDoc(cartRef, { items: updatedItems })
  }
}

// Update cart item quantity
export const updateCartItemQuantity = async (userId: string, itemId: string, quantity: number): Promise<void> => {
  const cartRef = doc(db, "marketCarts", userId)
  const cartSnap = await getDoc(cartRef)

  if (cartSnap.exists()) {
    const cart = cartSnap.data()
    const items = cart.items || []

    // Find the item to update
    const existingItemIndex = items.findIndex((item: CartItem) => item.itemId === itemId)

    if (existingItemIndex >= 0) {
      // Update quantity
      items[existingItemIndex].quantity = quantity

      // Remove item if quantity is 0
      if (quantity <= 0) {
        items.splice(existingItemIndex, 1)
      }

      await updateDoc(cartRef, { items })
    }
  }
}

// Get user's cart
export const getUserCart = async (userId: string): Promise<CartItem[]> => {
  const cartRef = doc(db, "marketCarts", userId)
  const cartSnap = await getDoc(cartRef)

  if (cartSnap.exists()) {
    const cart = cartSnap.data()
    return cart.items || []
  } else {
    return []
  }
}

// Clear cart
export const clearCart = async (userId: string): Promise<void> => {
  const cartRef = doc(db, "marketCarts", userId)
  await setDoc(cartRef, { userId, items: [] })
}

// Create an order
export const createOrder = async (orderData: Omit<Order, "id" | "orderDate" | "status">): Promise<string> => {
  const orderId = uuidv4()
  const orderRef = doc(db, "marketOrders", orderId)

  const newOrder: Order = {
    id: orderId,
    orderDate: Timestamp.now(),
    status: "pending",
    ...orderData,
  }

  await setDoc(orderRef, newOrder)

  // Clear the cart after creating the order
  await clearCart(orderData.userId)

  return orderId
}

// Get an order by ID
export const getOrderById = async (orderId: string): Promise<Order | null> => {
  const orderRef = doc(db, "marketOrders", orderId)
  const orderSnap = await getDoc(orderRef)

  if (orderSnap.exists()) {
    return orderSnap.data() as Order
  } else {
    return null
  }
}

// Get orders by user
export const getUserOrders = async (userId: string): Promise<Order[]> => {
  const q = query(ordersCollection, where("userId", "==", userId), orderBy("orderDate", "desc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as Order)
}

// Update order status
export const updateOrderStatus = async (orderId: string, status: string): Promise<void> => {
  const orderRef = doc(db, "marketOrders", orderId)
  await updateDoc(orderRef, { status })
}

