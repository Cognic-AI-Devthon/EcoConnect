import type { Timestamp } from "firebase/firestore"

export interface FootprintQuestion {
  id: string
  question: string
  options: string[]
  weights: number[]
  category: string
  allowCustomAnswer?: boolean
}

export interface FootprintReport {
  id: string
  userId: string
  footprint: number
  timestamp: Timestamp
  answers: {
    questionId: string
    answer: string
    weight: number
  }[]
  recommendations?: string[]
}

