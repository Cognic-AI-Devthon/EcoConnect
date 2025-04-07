import { type NextRequest, NextResponse } from "next/server"
import { getAllChallenges, getDailyChallenges } from "@/lib/db/challenges"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const type = searchParams.get("type")

    let challenges
    if (type === "daily") {
      challenges = await getDailyChallenges()
    } else {
      challenges = await getAllChallenges()
    }

    return NextResponse.json(challenges)
  } catch (error) {
    console.error("Error fetching challenges:", error)
    return NextResponse.json({ error: "Failed to fetch challenges" }, { status: 500 })
  }
}

