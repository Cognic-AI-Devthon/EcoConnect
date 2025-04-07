import { type NextRequest, NextResponse } from "next/server"
import { createOrder, getUserOrders } from "@/lib/db/marketplace"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const orders = await getUserOrders(userId)
    return NextResponse.json(orders)
  } catch (error) {
    console.error("Error fetching orders:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const orderData = await req.json()

    if (
      !orderData.userId ||
      !orderData.items ||
      !orderData.totalAmount ||
      !orderData.shippingAddress ||
      !orderData.paymentMethod
    ) {
      return NextResponse.json(
        {
          error: "User ID, items, total amount, shipping address, and payment method are required",
        },
        { status: 400 },
      )
    }

    const orderId = await createOrder(orderData)
    return NextResponse.json({
      message: "Order created successfully",
      orderId,
    })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

