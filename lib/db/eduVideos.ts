import { db } from "../firebase"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
  limit,
} from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
import type { EduVideo } from "@/types/eduVideo"

// Collection reference
const videosCollection = collection(db, "eduVideos")

// Create a new educational video
export const createEduVideo = async (videoData: Omit<EduVideo, "id" | "publishedDate">): Promise<string> => {
  const videoId = uuidv4()
  const videoRef = doc(db, "eduVideos", videoId)

  const newVideo: EduVideo = {
    id: videoId,
    publishedDate: Timestamp.now(),
    ...videoData,
  }

  await setDoc(videoRef, newVideo)
  return videoId
}

// Get a video by ID
export const getEduVideoById = async (videoId: string): Promise<EduVideo | null> => {
  const videoRef = doc(db, "eduVideos", videoId)
  const videoSnap = await getDoc(videoRef)

  if (videoSnap.exists()) {
    return videoSnap.data() as EduVideo
  } else {
    return null
  }
}

// Get all educational videos
export const getAllEduVideos = async (): Promise<EduVideo[]> => {
  const q = query(videosCollection, orderBy("publishDate", "desc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => {
    const temp = doc.data() as EduVideo
    temp.id = doc.id
    return temp
  })
}

// Get videos by category
export const getEduVideosByCategory = async (category: string): Promise<EduVideo[]> => {
  const q = query(videosCollection, where("category", "==", category), orderBy("publishedDate", "desc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as EduVideo)
}

// Get recent videos
export const getRecentEduVideos = async (limitCount = 5): Promise<EduVideo[]> => {
  const q = query(videosCollection, orderBy("publishedDate", "desc"), limit(limitCount))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as EduVideo)
}

// Update a video
export const updateEduVideo = async (videoId: string, videoData: Partial<EduVideo>): Promise<void> => {
  const videoRef = doc(db, "eduVideos", videoId)
  await updateDoc(videoRef, videoData)
}

// Delete a video
export const deleteEduVideo = async (videoId: string): Promise<void> => {
  const videoRef = doc(db, "eduVideos", videoId)
  await deleteDoc(videoRef)
}

