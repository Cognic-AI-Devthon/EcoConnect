import type { Timestamp } from "firebase/firestore"

export interface CleanupEvent {
  id: string
  title: string
  description: string
  image: string
  date: string
  time: string
  location: string
  schoolFriendly: boolean
  // uploadDate: Timestamp
  organizedBy: string
  capacity?: number
  meetingPoint?: string
}

export interface EventRegistration {
  id: string
  eventId: string
  userId: string
  registrationDate: Timestamp
  name: string
  email: string
  phone?: string
  numberOfPeople: number
  notes?: string
}

