import type { Timestamp } from "firebase/firestore"

export interface EduVideo {
  id: string
  title: string
  description: string
  videoUrl: string
  thumbnailUrl: string
  duration: number // in seconds
  category: string
  tags: string[]
  publishedDate: Timestamp
}

