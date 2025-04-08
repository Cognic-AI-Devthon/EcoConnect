import type { Timestamp } from "firebase/firestore"

export interface BlogPost {
  id: string
  title: string
  content: string
  author: string
  publishDate: Timestamp
  tags: string[]
  imageUrl: string
}

