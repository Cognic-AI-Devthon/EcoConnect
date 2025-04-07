import type { Timestamp } from "firebase/firestore"

export interface Donation {
  id: string
  userId: string
  amount: number
  organization: string
  timestamp: Timestamp
  message?: string
  anonymous?: boolean
}

