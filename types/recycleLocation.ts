import type { GeoPoint } from "firebase/firestore"

export interface RecycleLocation {
  id: string
  name: string
  address: string
  location: GeoPoint
  acceptedMaterials: string[]
  operatingHours: {
    monday?: string
    tuesday?: string
    wednesday?: string
    thursday?: string
    friday?: string
    saturday?: string
    sunday?: string
  }
  contactInfo: string
  website?: string
  ratings?: {
    [userId: string]: number
  }
  averageRating?: number
}

