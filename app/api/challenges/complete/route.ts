import { type NextRequest, NextResponse } from "next/server"
import { completeChallenge } from "@/lib/db/challenges"
import { addEcoPoints } from "@/lib/db/users"
import { getChallengeById } from "@/lib/db/challenges"

export async function POST(req: NextRequest) {
  try {
    const { userId, challengeId } = await req.json()

    if (!userId || !challengeId) {
      return NextResponse.json({ error: "User ID and challenge ID are required" }, { status: 400 })
    }

    // Get challenge to determine points
    const challenge = await getChallengeById(challengeId)
    if (!challenge) {
      return NextResponse.json({ error: "Challenge not found" }, { status: 404 })
    }

    // Complete the challenge
    await completeChallenge(userId, challengeId)

    // Add points to user
    await addEcoPoints(userId, challenge.points)

    return NextResponse.json({
      message: "Challenge completed successfully",
      pointsEarned: challenge.points,
    })
  } catch (error) {
    console.error("Error completing challenge:", error)
    return NextResponse.json({ error: "Failed to complete challenge" }, { status: 500 })
  }
}

