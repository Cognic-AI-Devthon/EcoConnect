import { db } from "../firebase"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore"
import type { Reward, UserReward } from "@/types/reward"

// Collection references
const rewardsCollection = collection(db, "rewards")
const userRewardsCollection = collection(db, "userRewards")

// Create a new reward
export const createReward = async (rewardData: Reward): Promise<void> => {
  const rewardRef = doc(db, "rewards", rewardData.id)
  await setDoc(rewardRef, rewardData)
}

// Get a reward by ID
export const getRewardById = async (rewardId: string): Promise<Reward | null> => {
  const rewardRef = doc(db, "rewards", rewardId)
  const rewardSnap = await getDoc(rewardRef)

  if (rewardSnap.exists()) {
    return rewardSnap.data() as Reward
  } else {
    return null
  }
}

// Get all rewards
export const getAllRewards = async (): Promise<Reward[]> => {
  const querySnapshot = await getDocs(rewardsCollection)
  return querySnapshot.docs.map((doc) => doc.data() as Reward)
}

// Get rewards by category
export const getRewardsByCategory = async (category: string): Promise<Reward[]> => {
  const q = query(rewardsCollection, where("category", "==", category))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as Reward)
}

// Redeem a reward for a user
export const redeemReward = async (userId: string, rewardId: string): Promise<void> => {
  // Get the reward to check points
  const rewardRef = doc(db, "rewards", rewardId)
  const rewardSnap = await getDoc(rewardRef)

  if (!rewardSnap.exists()) {
    throw new Error("Reward not found")
  }

  const reward = rewardSnap.data() as Reward

  // Get the user to check if they have enough points
  const userRef = doc(db, "users", userId)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    throw new Error("User not found")
  }

  const user = userSnap.data()

  if (user.ecoPoints < reward.points) {
    throw new Error("Not enough points")
  }

  // Create the user reward record
  const userRewardId = `${userId}_${rewardId}_${Date.now()}`
  const userRewardRef = doc(db, "userRewards", userRewardId)

  const userRewardData: UserReward = {
    id: userRewardId,
    userId,
    rewardId,
    redeemedAt: Timestamp.now(),
    points: reward.points,
    status: "pending", // pending, processing, completed, cancelled
  }

  // Deduct points from user
  await updateDoc(userRef, {
    ecoPoints: user.ecoPoints - reward.points,
  })

  // Save the redemption
  await setDoc(userRewardRef, userRewardData)
}

// Get redeemed rewards for a user
export const getUserRedeemedRewards = async (userId: string): Promise<UserReward[]> => {
  const q = query(userRewardsCollection, where("userId", "==", userId), orderBy("redeemedAt", "desc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as UserReward)
}

// Update reward redemption status
export const updateRewardStatus = async (userRewardId: string, status: string): Promise<void> => {
  const userRewardRef = doc(db, "userRewards", userRewardId)
  await updateDoc(userRewardRef, { status })
}

