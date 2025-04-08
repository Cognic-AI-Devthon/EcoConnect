import { db } from "../firebase"
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
import type { RecycleLocation } from "@/types/recycleLocation"

// Collection reference
const locationsCollection = collection(db, "recycleLocations")

// Create a new recycle location
export const createRecycleLocation = async (locationData: Omit<RecycleLocation, "id">): Promise<string> => {
  const locationId = uuidv4()
  const locationRef = doc(db, "recycleLocations", locationId)

  const newLocation: RecycleLocation = {
    id: locationId,
    ...locationData,
  }

  await setDoc(locationRef, newLocation)
  return locationId
}

// Get a location by ID
export const getRecycleLocationById = async (locationId: string): Promise<RecycleLocation | null> => {
  const locationRef = doc(db, "recycleLocations", locationId)
  const locationSnap = await getDoc(locationRef)

  if (locationSnap.exists()) {
    return locationSnap.data() as RecycleLocation
  } else {
    return null
  }
}

// Get all recycle locations
export const getAllRecycleLocations = async (): Promise<RecycleLocation[]> => {
  const querySnapshot = await getDocs(locationsCollection)
  return querySnapshot.docs.map((doc) => {
    const temp = doc.data() as RecycleLocation
    temp.id = doc.id
    return temp
  })
}

// Get locations by material type
export const getLocationsByMaterial = async (material: string): Promise<RecycleLocation[]> => {
  const q = query(locationsCollection, where("acceptedMaterials", "array-contains", material))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as RecycleLocation)
}

// Update a location
export const updateRecycleLocation = async (
  locationId: string,
  locationData: Partial<RecycleLocation>,
): Promise<void> => {
  const locationRef = doc(db, "recycleLocations", locationId)
  await updateDoc(locationRef, locationData)
}

// Delete a location
export const deleteRecycleLocation = async (locationId: string): Promise<void> => {
  const locationRef = doc(db, "recycleLocations", locationId)
  await deleteDoc(locationRef)
}

// Add a rating to a location
// export const addRatingToLocation = async (locationId: string, userId: string, rating: number): Promise<void> => {
//   const locationRef = doc(db, "recycleLocations", locationId)
//   const locationSnap = await getDoc(locationRef)

//   if (locationSnap.exists()) {
//     const location = locationSnap.data() as RecycleLocation
//     const ratings = location.ratings || {}

//     // Add or update the user's rating
//     ratings[userId] = rating

//     // Calculate the average rating
//     const ratingValues = Object.values(ratings)
//     const averageRating = ratingValues.reduce((sum, val) => sum + val, 0) / ratingValues.length

//     await updateDoc(locationRef, {
//       ratings,
//       averageRating,
//     })
//   }
// }

