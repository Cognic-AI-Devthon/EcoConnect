import { type NextRequest, NextResponse } from "next/server"
import { registerForEvent, isUserRegisteredForEvent } from "@/lib/db/cleanupEvents"

export async function POST(req: NextRequest) {
  try {
    const { userId, eventId, name, email, phone, numberOfPeople, notes } = await req.json()

    if (!userId || !eventId || !name || !email || !numberOfPeople) {
      return NextResponse.json(
        {
          error: "User ID, event ID, name, email, and number of people are required",
        },
        { status: 400 },
      )
    }

    // Check if user is already registered
    const alreadyRegistered = await isUserRegisteredForEvent(eventId, userId)
    if (alreadyRegistered) {
      return NextResponse.json(
        {
          error: "You are already registered for this event",
        },
        { status: 400 },
      )
    }

    // Register for the event
    const registrationId = await registerForEvent(eventId, userId, {
      name,
      email,
      phone,
      numberOfPeople,
      notes,
    })

    return NextResponse.json({
      message: "Successfully registered for the event",
      registrationId,
    })
  } catch (error) {
    console.error("Error registering for event:", error)
    return NextResponse.json({ error: "Failed to register for event" }, { status: 500 })
  }
}

