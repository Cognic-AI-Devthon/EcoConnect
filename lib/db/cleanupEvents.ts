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
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 as uuidv4 } from "uuid"
import type { CleanupEvent, EventRegistration } from "@/types/cleanupEvent"

// Collection references
const eventsCollection = collection(db, "beachCleanupEvents")
const registrationsCollection = collection(db, "eventRegistrations")

// Create a new cleanup event
export const createCleanupEvent = async (
  eventData: Omit<CleanupEvent, "id" | "uploadDate">,
  imageFile?: File,
): Promise<string> => {
  const eventId = uuidv4()
  const eventRef = doc(db, "beachCleanupEvents", eventId)

  let imageUrl = ""

  // Upload image if provided
  if (imageFile) {
    const storageRef = ref(storage, `cleanup-events/${eventId}/${imageFile.name}`)
    await uploadBytes(storageRef, imageFile)
    imageUrl = await getDownloadURL(storageRef)
  }

  const newEvent: CleanupEvent = {
    id: eventId,
    image: imageUrl,
    ...eventData,
  }

  await setDoc(eventRef, newEvent)
  return eventId
}

// Get an event by ID
export const getCleanupEventById = async (eventId: string): Promise<CleanupEvent | null> => {
  const eventRef = doc(db, "beachCleanupEvents", eventId)
  const eventSnap = await getDoc(eventRef)

  if (eventSnap.exists()) {
    return eventSnap.data() as CleanupEvent
  } else {
    return null
  }
}

// Get all cleanup events
export const getAllCleanupEvents = async (): Promise<CleanupEvent[]> => {
  const q = query(eventsCollection, orderBy("date", "asc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => {
    const event = doc.data() as CleanupEvent
    event.id = doc.id
    return event
  })
}

// Get upcoming cleanup events
export const getUpcomingCleanupEvents = async (): Promise<CleanupEvent[]> => {
  const now = Timestamp.now()

  const q = query(eventsCollection, where("date", ">=", now), orderBy("date", "asc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as CleanupEvent)
}

// Get school-friendly cleanup events
export const getSchoolFriendlyEvents = async (): Promise<CleanupEvent[]> => {
  const q = query(eventsCollection, where("schoolFriendly", "==", true), orderBy("date", "asc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as CleanupEvent)
}

// Update an event
export const updateCleanupEvent = async (eventId: string, eventData: Partial<CleanupEvent>): Promise<void> => {
  const eventRef = doc(db, "beachCleanupEvents", eventId)
  await updateDoc(eventRef, eventData)
}

// Delete an event
export const deleteCleanupEvent = async (eventId: string): Promise<void> => {
  const eventRef = doc(db, "beachCleanupEvents", eventId)
  await deleteDoc(eventRef)
}

// Register for an event
export const registerForEvent = async (
  eventId: string,
  userId: string,
  registrationData: Omit<EventRegistration, "id" | "eventId" | "userId" | "registrationDate">,
): Promise<string> => {
  const registrationId = `${eventId}_${userId}`
  const registrationRef = doc(db, "eventRegistrations", registrationId)

  const newRegistration: EventRegistration = {
    id: registrationId,
    eventId,
    userId,
    registrationDate: Timestamp.now(),
    ...registrationData,
  }

  await setDoc(registrationRef, newRegistration)
  return registrationId
}

// Check if user is registered for an event
export const isUserRegisteredForEvent = async (eventId: string, userId: string): Promise<boolean> => {
  const registrationId = `${eventId}_${userId}`
  const registrationRef = doc(db, "eventRegistrations", registrationId)
  const registrationSnap = await getDoc(registrationRef)

  return registrationSnap.exists()
}

// Get registrations for an event
export const getEventRegistrations = async (eventId: string): Promise<EventRegistration[]> => {
  const q = query(registrationsCollection, where("eventId", "==", eventId))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as EventRegistration)
}

// Get events a user is registered for
export const getUserRegisteredEvents = async (userId: string): Promise<string[]> => {
  const q = query(registrationsCollection, where("userId", "==", userId))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => {
    const registration = doc.data() as EventRegistration
    return registration.eventId
  })
}

// Cancel registration
export const cancelEventRegistration = async (eventId: string, userId: string): Promise<void> => {
  const registrationId = `${eventId}_${userId}`
  const registrationRef = doc(db, "eventRegistrations", registrationId)
  await deleteDoc(registrationRef)
}

