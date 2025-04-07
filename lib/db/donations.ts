import { db } from "../firebase"
import { collection, doc, getDoc, getDocs, setDoc, query, where, orderBy, Timestamp } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
import type { Donation } from "@/types/donation"

// Collection reference
const donationsCollection = collection(db, "donations")

// Create a new donation
export const createDonation = async (donationData: Omit<Donation, "id" | "timestamp">): Promise<string> => {
  const donationId = uuidv4()
  const donationRef = doc(db, "donations", donationId)

  const newDonation: Donation = {
    id: donationId,
    timestamp: Timestamp.now(),
    ...donationData,
  }

  await setDoc(donationRef, newDonation)
  return donationId
}

// Get a donation by ID
export const getDonationById = async (donationId: string): Promise<Donation | null> => {
  const donationRef = doc(db, "donations", donationId)
  const donationSnap = await getDoc(donationRef)

  if (donationSnap.exists()) {
    return donationSnap.data() as Donation
  } else {
    return null
  }
}

// Get all donations
export const getAllDonations = async (): Promise<Donation[]> => {
  const querySnapshot = await getDocs(donationsCollection)
  return querySnapshot.docs.map((doc) => doc.data() as Donation)
}

// Get donations by user
export const getUserDonations = async (userId: string): Promise<Donation[]> => {
  const q = query(donationsCollection, where("userId", "==", userId), orderBy("timestamp", "desc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as Donation)
}

// Get total donation amount
export const getTotalDonationAmount = async (): Promise<number> => {
  const querySnapshot = await getDocs(donationsCollection)
  return querySnapshot.docs.reduce((total, doc) => {
    const donation = doc.data() as Donation
    return total + donation.amount
  }, 0)
}

