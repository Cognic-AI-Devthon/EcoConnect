import { db } from "../firebase"
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, arrayUnion } from "firebase/firestore"
import type { Badge } from "@/types/badge"

// Collection reference
const badgesCollection = collection(db, "badges")

// Create a new badge
export const createBadge = async (badgeData: Badge): Promise<void> => {
  const badgeRef = doc(db, "badges", badgeData.id)
  await setDoc(badgeRef, badgeData)
}

// Get a badge by ID
export const getBadgeById = async (badgeId: string): Promise<Badge | null> => {
  const badgeRef = doc(db, "badges", badgeId)
  const badgeSnap = await getDoc(badgeRef)

  if (badgeSnap.exists()) {
    return badgeSnap.data() as Badge
  } else {
    return null
  }
}

// Get all badges
export const getAllBadges = async (): Promise<Badge[]> => {
  const querySnapshot = await getDocs(badgesCollection)
  return querySnapshot.docs.map((doc) => doc.data() as Badge)
}

// Award a badge to a user
export const awardBadgeToUser = async (userId: string, badgeId: string): Promise<void> => {
  const userRef = doc(db, "users", userId)
  await updateDoc(userRef, {
    badges: arrayUnion(badgeId),
  })
}

// Get badges for a user
export const getUserBadges = async (userId: string): Promise<Badge[]> => {
  const userRef = doc(db, "users", userId)
  const userSnap = await getDoc(userRef)

  if (userSnap.exists()) {
    const userData = userSnap.data()
    const badgeIds = userData.badges || []

    const badges: Badge[] = []
    for (const badgeId of badgeIds) {
      const badge = await getBadgeById(badgeId)
      if (badge) {
        badges.push(badge)
      }
    }

    return badges
  } else {
    return []
  }
}

