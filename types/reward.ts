import type { Timestamp } from "firebase/firestore"

export interface Reward {
  id: string
  title: string
  description: string
  points: number
  image: string
  category: "gift-cards" | "donations" | "eco-products" | "experiences"
  featured?: boolean
  new?: boolean
  hot?: boolean
}

export interface UserReward {
  id: string
  userId: string
  rewardId: string
  redeemedAt: Timestamp
  points: number
  status: "pending" | "processing" | "completed" | "cancelled"
}

