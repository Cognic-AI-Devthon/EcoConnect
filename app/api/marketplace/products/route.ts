import { type NextRequest, NextResponse } from "next/server"
import { getAllMarketItems, getMarketItemsByCategory } from "@/lib/db/marketplace"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get("category")

    let products
    if (category) {
      products = await getMarketItemsByCategory(category)
    } else {
      products = await getAllMarketItems()
    }

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching market products:", error)
    return NextResponse.json({ error: "Failed to fetch market products" }, { status: 500 })
  }
}

