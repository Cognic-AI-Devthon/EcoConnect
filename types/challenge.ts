import type { Timestamp } from "firebase/firestore"

export interface Challenge {
  id: string
  title: string
  description: string
  points: number
  type: "daily" | "weekly" | "monthly" | "one-time"
  icon: string
  category?: string
}

export interface UserChallenge {
  id: string
  userId: string
  challengeId: string
  completedAt: Timestamp
}

