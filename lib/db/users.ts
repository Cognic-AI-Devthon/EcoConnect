import { db } from "../firebase"
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, query, where } from "firebase/firestore"
import type { User } from "@/types/user"

// Collection reference
const usersCollection = collection(db, "users")

// Create a new user
export const createUser = async (userId: string, userData: Partial<User>): Promise<void> => {
  const userRef = doc(db, "users", userId)

  // Default user data
  const defaultUserData: User = {
    id: userId,
    name: "",
    email: "",
    profilePicture: "",
    joinDate: new Date().toISOString(),
    role: "regular",
    subscriptionPlan: "Free",
    ecoPoints: 0,
    todaysPoints: 0,
    streakCount: 0,
    badges: [],
    ...userData,
  }

  await setDoc(userRef, defaultUserData)
}

// Get a user by ID
export const getUserById = async (userId: string): Promise<User | null> => {
  const userRef = doc(db, "users", userId)
  const userSnap = await getDoc(userRef)

  if (userSnap.exists()) {
    return userSnap.data() as User
  } else {
    return null
  }
}

// Update a user
export const updateUser = async (userId: string, userData: Partial<User>): Promise<void> => {
  const userRef = doc(db, "users", userId)
  await updateDoc(userRef, userData)
}

// Get all users
export const getAllUsers = async (): Promise<User[]> => {
  const querySnapshot = await getDocs(usersCollection)
  return querySnapshot.docs.map((doc) => doc.data() as User)
}

// Get users by role
export const getUsersByRole = async (role: string): Promise<User[]> => {
  const q = query(usersCollection, where("role", "==", role))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as User)
}

// Get top users by eco points
export const getTopUsersByEcoPoints = async (limit = 10): Promise<User[]> => {
  const q = query(usersCollection, where("ecoPoints", ">", 0), limit)
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as User)
}

// Add eco points to a user
export const addEcoPoints = async (userId: string, points: number): Promise<void> => {
  const userRef = doc(db, "users", userId)
  const userSnap = await getDoc(userRef)

  if (userSnap.exists()) {
    const userData = userSnap.data() as User
    await updateDoc(userRef, {
      ecoPoints: userData.ecoPoints + points,
      todaysPoints: userData.todaysPoints + points,
    })
  }
}

// Increment streak count
export const incrementStreakCount = async (userId: string): Promise<void> => {
  const userRef = doc(db, "users", userId)
  const userSnap = await getDoc(userRef)

  if (userSnap.exists()) {
    const userData = userSnap.data() as User
    await updateDoc(userRef, {
      streakCount: userData.streakCount + 1,
    })
  }
}

// Reset today's points (to be called at the end of the day)
export const resetTodaysPoints = async (userId: string): Promise<void> => {
  const userRef = doc(db, "users", userId)
  await updateDoc(userRef, { todaysPoints: 0 })
}

