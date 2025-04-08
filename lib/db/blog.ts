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
  limit,
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 as uuidv4 } from "uuid"
import type { BlogPost } from "@/types/blog"

// Collection reference
const blogCollection = collection(db, "blogPosts")

// Create a new blog post
export const createBlogPost = async (
  postData: Omit<BlogPost, "id" | "imageUrl" | "publishDate">,
  imageFile?: File,
): Promise<string> => {
  const postId = uuidv4()
  const postRef = doc(db, "blogPosts", postId)

  let imageUrl = ""

  // Upload image if provided
  if (imageFile) {
    const storageRef = ref(storage, `blog-posts/${postId}/${imageFile.name}`)
    await uploadBytes(storageRef, imageFile)
    imageUrl = await getDownloadURL(storageRef)
  }

  const newPost: BlogPost = {
    id: postId,
    publishDate: Timestamp.now(),
    imageUrl: imageUrl || "",
    ...postData,
  }

  await setDoc(postRef, newPost)
  return postId
}

// Get a blog post by ID
export const getBlogPostById = async (postId: string): Promise<BlogPost | null> => {
  const postRef = doc(db, "blogPosts", postId)
  const postSnap = await getDoc(postRef)

  if (postSnap.exists()) {
    return postSnap.data() as BlogPost
  } else {
    return null
  }
}

// Get all blog posts
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  const q = query(blogCollection, orderBy("publishDate", "desc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => {
    const temp = doc.data() as BlogPost
    temp.id = doc.id
    return temp
  })
}

// Get blog posts by tag
export const getBlogPostsByTag = async (tag: string): Promise<BlogPost[]> => {
  const q = query(blogCollection, where("tags", "array-contains", tag), orderBy("publishDate", "desc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as BlogPost)
}

// Get recent blog posts
export const getRecentBlogPosts = async (limitCount = 5): Promise<BlogPost[]> => {
  const q = query(blogCollection, orderBy("publishDate", "desc"), limit(limitCount))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as BlogPost)
}

// Update a blog post
export const updateBlogPost = async (postId: string, postData: Partial<BlogPost>): Promise<void> => {
  const postRef = doc(db, "blogPosts", postId)
  await updateDoc(postRef, postData)
}

// Delete a blog post
export const deleteBlogPost = async (postId: string): Promise<void> => {
  const postRef = doc(db, "blogPosts", postId)
  await deleteDoc(postRef)
}

