import type { Timestamp } from "firebase/firestore"

export interface Comment {
  id: string
  userId: string
  userName: string
  userImage?: string
  content: string
  timestamp: Timestamp
}

export interface CommunityPost {
  id: string
  userId: string
  userName: string
  userImage?: string
  title: string
  content: string
  images: string[]
  timestamp: Timestamp
  likes: string[] // Array of user IDs
  comments: Comment[]
  shares: number
}

