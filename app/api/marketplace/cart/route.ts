import { type NextRequest, NextResponse } from "next/server"
import { getUserCart, addToCart, removeFromCart, updateCartItemQuantity, clearCart } from "@/lib/db/marketplace"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const cart = await getUserCart(userId)
    return NextResponse.json(cart)
  } catch (error) {
    console.error("Error fetching cart:", error)
    return NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId, itemId, quantity } = await req.json()

    if (!userId || !itemId) {
      return NextResponse.json({ error: "User ID and item ID are required" }, { status: 400 })
    }

    await addToCart(userId, itemId, quantity || 1)
    return NextResponse.json({ message: "Item added to cart successfully" })
  } catch (error) {
    console.error("Error adding item to cart:", error)
    return NextResponse.json({ error: "Failed to add item to cart" }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { userId, itemId, quantity } = await req.json()

    if (!userId || !itemId || quantity === undefined) {
      return NextResponse.json({ error: "User ID, item ID, and quantity are required" }, { status: 400 })
    }

    await updateCartItemQuantity(userId, itemId, quantity)
    return NextResponse.json({ message: "Cart updated successfully" })
  } catch (error) {
    console.error("Error updating cart:", error)
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get("userId")
    const itemId = searchParams.get("itemId")
    const clearAll = searchParams.get("clearAll")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    if (clearAll === "true") {
      await clearCart(userId)
      return NextResponse.json({ message: "Cart cleared successfully" })
    } else if (itemId) {
      await removeFromCart(userId, itemId)
      return NextResponse.json({ message: "Item removed from cart successfully" })
    } else {
      return NextResponse.json({ error: "Item ID or clearAll parameter is required" }, { status: 400 })
    }
  } catch (error) {
    console.error("Error removing item from cart:", error)
    return NextResponse.json({ error: "Failed to remove item from cart" }, { status: 500 })
  }
}

