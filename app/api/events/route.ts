import { type NextRequest, NextResponse } from "next/server"
import { getAllCleanupEvents, getUpcomingCleanupEvents, getSchoolFriendlyEvents } from "@/lib/db/cleanupEvents"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const filter = searchParams.get("filter")

    let events
    if (filter === "upcoming") {
      events = await getUpcomingCleanupEvents()
    } else if (filter === "school-friendly") {
      events = await getSchoolFriendlyEvents()
    } else {
      events = await getAllCleanupEvents()
    }

    return NextResponse.json(events)
  } catch (error) {
    console.error("Error fetching cleanup events:", error)
    return NextResponse.json({ error: "Failed to fetch cleanup events" }, { status: 500 })
  }
}

