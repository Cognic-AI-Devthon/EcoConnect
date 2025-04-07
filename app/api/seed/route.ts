import { type NextRequest, NextResponse } from "next/server"
import { seedDatabase } from "@/lib/db/seed"

export async function GET(req: NextRequest) {
  // Only allow seeding in development environment
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Seeding is only allowed in development environment" }, { status: 403 })
  }

  try {
    await seedDatabase()
    return NextResponse.json({ message: "Database seeded successfully" })
  } catch (error) {
    console.error("Error seeding database:", error)
    return NextResponse.json({ error: "Failed to seed database" }, { status: 500 })
  }
}

