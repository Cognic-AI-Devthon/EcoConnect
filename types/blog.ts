import type { Timestamp } from "firebase/firestore"

export interface BlogPost {
  id: string
  title: string
  content: string
  author: {
    id: string
    name: string
    role: string
    avatar: string
  }
  publishDate: Timestamp
  tags: string[]
  imageUrl: string
}

