import { db } from "../firebase"
import { collection, doc, getDoc, getDocs, setDoc, query, where, orderBy, Timestamp, limit } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
import type { FootprintQuestion, FootprintReport } from "@/types/footprint"

// Collection references
const questionsCollection = collection(db, "footprintQuestions")
const reportsCollection = collection(db, "footprintReports")

// Create a new footprint question
export const createFootprintQuestion = async (questionData: Omit<FootprintQuestion, "id">): Promise<string> => {
  const questionId = uuidv4()
  const questionRef = doc(db, "footprintQuestions", questionId)

  const newQuestion: FootprintQuestion = {
    id: questionId,
    ...questionData,
  }

  await setDoc(questionRef, newQuestion)
  return questionId
}

// Get all footprint questions
export const getAllFootprintQuestions = async (): Promise<FootprintQuestion[]> => {
  const querySnapshot = await getDocs(questionsCollection)
  return querySnapshot.docs.map((doc) => doc.data() as FootprintQuestion)
}

// Create a new footprint report
export const createFootprintReport = async (reportData: Omit<FootprintReport, "id" | "timestamp">): Promise<string> => {
  const reportId = uuidv4()
  const reportRef = doc(db, "footprintReports", reportId)

  const newReport: FootprintReport = {
    id: reportId,
    timestamp: Timestamp.now(),
    ...reportData,
  }

  await setDoc(reportRef, newReport)
  return reportId
}

// Get a footprint report by ID
export const getFootprintReportById = async (reportId: string): Promise<FootprintReport | null> => {
  const reportRef = doc(db, "footprintReports", reportId)
  const reportSnap = await getDoc(reportRef)

  if (reportSnap.exists()) {
    return reportSnap.data() as FootprintReport
  } else {
    return null
  }
}

// Get footprint reports for a user
export const getUserFootprintReports = async (userId: string): Promise<FootprintReport[]> => {
  const q = query(reportsCollection, where("userId", "==", userId), orderBy("timestamp", "desc"))

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as FootprintReport)
}

// Get latest footprint report for a user
export const getLatestUserFootprintReport = async (userId: string): Promise<FootprintReport | null> => {
  const q = query(reportsCollection, where("userId", "==", userId), orderBy("timestamp", "desc"), limit(1))

  const querySnapshot = await getDocs(q)
  if (querySnapshot.docs.length > 0) {
    return querySnapshot.docs[0].data() as FootprintReport
  } else {
    return null
  }
}

