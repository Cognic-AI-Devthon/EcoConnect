import { db, storage } from "../firebase"
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
  arrayUnion,
  arrayRemove,
  limit,
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 as uuidv4 } from "uuid"
import type { CommunityPost, Comment } from "@/types/community"

// Collection reference
const postsCollection = collection(db, "communityPosts")

// Create a new post
export const createPost = async (
  postData: Omit<CommunityPost, "id" | "timestamp" | "likes" | "comments" | "shares">,
  imageFile?: File,
): Promise<string> => {
  const postId = uuidv4()
  const postRef = doc(db, "communityPosts", postId)

  let imageUrl = ""

  // Upload image if provided
  if (imageFile) {
    const storageRef = ref(storage, `community-posts/${postId}/${imageFile.name}`)
    await uploadBytes(storageRef, imageFile)
    imageUrl = await getDownloadURL(storageRef)
  }

  const newPost: CommunityPost = {
    id: postId,
    timestamp: Timestamp.now(),
    likes: [],
    comments: [],
    shares: 0,
    images: imageUrl ? [imageUrl] : [],
    ...postData,
  }

  await setDoc(postRef, newPost)
  return postId
}

// Get a post by ID
export const getPostById = async (postId: string): Promise<CommunityPost | null> => {
  const postRef = doc(db, "communityPosts", postId)
  const postSnap = await getDoc(postRef)

  if (postSnap.exists()) {
    return postSnap.data() as CommunityPost
  } else {
    return null
  }
}

// Get all posts
export const getAllPosts = async (limitCount = 20): Promise<CommunityPost[]> => {
  const q = query(postsCollection, orderBy("timestamp", "desc"), limit(limitCount))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as CommunityPost)
}

// Get posts by user
export const getUserPosts = async (userId: string): Promise<CommunityPost[]> => {
  const q = query(postsCollection, where("userId", "==", userId), orderBy("timestamp", "desc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as CommunityPost)
}

// Like a post
export const likePost = async (postId: string, userId: string): Promise<void> => {
  const postRef = doc(db, "communityPosts", postId)
  await updateDoc(postRef, {
    likes: arrayUnion(userId),
  })
}

// Unlike a post
export const unlikePost = async (postId: string, userId: string): Promise<void> => {
  const postRef = doc(db, "communityPosts", postId)
  await updateDoc(postRef, {
    likes: arrayRemove(userId),
  })
}

// Add a comment to a post
export const addComment = async (postId: string, comment: Omit<Comment, "id" | "timestamp">): Promise<void> => {
  const postRef = doc(db, "communityPosts", postId)

  const newComment: Comment = {
    id: uuidv4(),
    timestamp: Timestamp.now(),
    ...comment,
  }

  await updateDoc(postRef, {
    comments: arrayUnion(newComment),
  })
}

// Delete a post
export const deletePost = async (postId: string): Promise<void> => {
  const postRef = doc(db, "communityPosts", postId)
  await deleteDoc(postRef)
}

// Increment share count
export const incrementShareCount = async (postId: string): Promise<void> => {
  const postRef = doc(db, "communityPosts", postId)
  const postSnap = await getDoc(postRef)

  if (postSnap.exists()) {
    const post = postSnap.data() as CommunityPost
    await updateDoc(postRef, {
      shares: post.shares + 1,
    })
  }
}

