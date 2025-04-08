import type { GeoPoint } from "firebase/firestore"

export interface RecycleLocation {
  id: string
  name: string
  address: string
  lan: number
  lat: number
  // location: GeoPoint
  acceptedMaterials: string[]
  operatingHours: string
  contactInfo: string
  website: string
  rating: number
}