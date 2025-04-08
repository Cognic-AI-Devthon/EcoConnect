import type { Timestamp } from "firebase/firestore"

export interface EduVideo {
  id: string
  title: string
  description: string
  url: string
  thumbnailUrl?: string
  duration?: number // in seconds
  category?: string
  tags?: string[]
  publishedDate: Timestamp
}

