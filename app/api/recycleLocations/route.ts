import { type NextRequest, NextResponse } from "next/server"
import { getAllRecycleLocations, getLocationsByMaterial } from "@/lib/db/recycleLocations"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const material = searchParams.get("material")

    let locations
    if (material) {
      locations = await getLocationsByMaterial(material)
    } else {
      locations = await getAllRecycleLocations()
    }

    return NextResponse.json(locations)
  } catch (error) {
    console.error("Error fetching recycle locations:", error)
    return NextResponse.json({ error: "Failed to fetch recycle locations" }, { status: 500 })
  }
}

