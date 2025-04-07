export interface User {
  id: string
  name: string
  email: string
  profilePicture: string
  joinDate: string
  role: "admin" | "regular"
  subscriptionPlan: "Free" | "Supporter" | "Advocate" | "Protector"
  ecoPoints: number
  todaysPoints: number
  streakCount: number
  badges: string[]
}

