import type { Timestamp } from "firebase/firestore"

export interface MarketItem {
  id: string
  title: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  sellerId: string
  images: string[]
  category: string
  condition: "new" | "like-new" | "good" | "fair" | "poor"
  postDate: Timestamp
  inStock: boolean
  quantity?: number
  rating?: number
  reviews?: number
  isHot?: boolean
  isFeatured?: boolean
}

export interface CartItem {
  itemId: string
  quantity: number
}

export interface Order {
  id: string
  userId: string
  items: {
    itemId: string
    title: string
    price: number
    quantity: number
  }[]
  totalAmount: number
  shippingAddress: {
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
    phone: string
  }
  paymentMethod: string
  orderDate: Timestamp
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  trackingNumber?: string
}

