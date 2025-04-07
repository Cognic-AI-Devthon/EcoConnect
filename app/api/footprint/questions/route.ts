import { type NextRequest, NextResponse } from "next/server"
import { getAllFootprintQuestions } from "@/lib/db/footprint"

export async function GET(req: NextRequest) {
  try {
    const questions = await getAllFootprintQuestions()
    return NextResponse.json(questions)
  } catch (error) {
    console.error("Error fetching footprint questions:", error)
    return NextResponse.json({ error: "Failed to fetch footprint questions" }, { status: 500 })
  }
}

