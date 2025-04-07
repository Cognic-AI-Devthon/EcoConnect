import { db } from "../firebase"
import { collection, doc, getDoc, getDocs, setDoc, query, where, Timestamp } from "firebase/firestore"
import type { Challenge, UserChallenge } from "@/types/challenge"

// Collection references
const challengesCollection = collection(db, "challenges")
const userChallengesCollection = collection(db, "userChallenges")

// Create a new challenge
export const createChallenge = async (challengeData: Challenge): Promise<void> => {
  const challengeRef = doc(db, "challenges", challengeData.id)
  await setDoc(challengeRef, challengeData)
}

// Get a challenge by ID
export const getChallengeById = async (challengeId: string): Promise<Challenge | null> => {
  const challengeRef = doc(db, "challenges", challengeId)
  const challengeSnap = await getDoc(challengeRef)

  if (challengeSnap.exists()) {
    return challengeSnap.data() as Challenge
  } else {
    return null
  }
}

// Get all challenges
export const getAllChallenges = async (): Promise<Challenge[]> => {
  const querySnapshot = await getDocs(challengesCollection)
  return querySnapshot.docs.map((doc) => doc.data() as Challenge)
}

// Get daily challenges
export const getDailyChallenges = async (): Promise<Challenge[]> => {
  const q = query(challengesCollection, where("type", "==", "daily"))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as Challenge)
}

// Complete a challenge for a user
export const completeChallenge = async (userId: string, challengeId: string): Promise<void> => {
  const userChallengeId = `${userId}_${challengeId}`
  const userChallengeRef = doc(db, "userChallenges", userChallengeId)

  const userChallengeData: UserChallenge = {
    id: userChallengeId,
    userId,
    challengeId,
    completedAt: Timestamp.now(),
  }

  await setDoc(userChallengeRef, userChallengeData)
}

// Check if a user has completed a challenge
export const hasCompletedChallenge = async (userId: string, challengeId: string): Promise<boolean> => {
  const userChallengeId = `${userId}_${challengeId}`
  const userChallengeRef = doc(db, "userChallenges", userChallengeId)
  const userChallengeSnap = await getDoc(userChallengeRef)

  return userChallengeSnap.exists()
}

// Get completed challenges for a user
export const getUserCompletedChallenges = async (userId: string): Promise<UserChallenge[]> => {
  const q = query(userChallengesCollection, where("userId", "==", userId))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as UserChallenge)
}

// Get today's completed challenges for a user
export const getTodaysCompletedChallenges = async (userId: string): Promise<UserChallenge[]> => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const q = query(
    userChallengesCollection,
    where("userId", "==", userId),
    where("completedAt", ">=", Timestamp.fromDate(today)),
  )

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as UserChallenge)
}

