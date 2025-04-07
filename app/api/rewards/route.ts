import { type NextRequest, NextResponse } from "next/server"
import { getAllRewards, getRewardsByCategory } from "@/lib/db/rewards"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get("category")

    let rewards
    if (category) {
      rewards = await getRewardsByCategory(category)
    } else {
      rewards = await getAllRewards()
    }

    return NextResponse.json(rewards)
  } catch (error) {
    console.error("Error fetching rewards:", error)
    return NextResponse.json({ error: "Failed to fetch rewards" }, { status: 500 })
  }
}

