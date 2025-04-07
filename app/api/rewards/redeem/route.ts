import { type NextRequest, NextResponse } from "next/server"
import { redeemReward } from "@/lib/db/rewards"

export async function POST(req: NextRequest) {
  try {
    const { userId, rewardId } = await req.json()

    if (!userId || !rewardId) {
      return NextResponse.json({ error: "User ID and reward ID are required" }, { status: 400 })
    }

    // Redeem the reward
    await redeemReward(userId, rewardId)

    return NextResponse.json({ message: "Reward redeemed successfully" })
  } catch (error) {
    console.error("Error redeeming reward:", error)

    // Handle specific errors
    if (error instanceof Error) {
      if (error.message === "Not enough points") {
        return NextResponse.json({ error: "Not enough points to redeem this reward" }, { status: 400 })
      } else if (error.message === "Reward not found" || error.message === "User not found") {
        return NextResponse.json({ error: error.message }, { status: 404 })
      }
    }

    return NextResponse.json({ error: "Failed to redeem reward" }, { status: 500 })
  }
}

