import { type NextRequest, NextResponse } from "next/server"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { createUser } from "@/lib/db/users"

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 })
    }

    // Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Update user profile
    await updateProfile(user, { displayName: name })

    // Create user in Firestore
    await createUser(user.uid, {
      name,
      email,
      profilePicture: "",
      joinDate: new Date().toISOString(),
      role: "regular",
      subscriptionPlan: "Free",
      ecoPoints: 0,
      todaysPoints: 0,
      streakCount: 0,
      badges: ["badge1"], // Give the newcomer badge
    })

    return NextResponse.json({
      message: "User registered successfully",
      userId: user.uid,
    })
  } catch (error) {
    console.error("Error registering user:", error)

    // Handle specific Firebase errors
    if (error instanceof Error) {
      const errorCode = (error as any).code

      if (errorCode === "auth/email-already-in-use") {
        return NextResponse.json({ error: "Email already in use" }, { status: 400 })
      } else if (errorCode === "auth/weak-password") {
        return NextResponse.json({ error: "Password is too weak" }, { status: 400 })
      } else if (errorCode === "auth/invalid-email") {
        return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
      }
    }

    return NextResponse.json({ error: "Failed to register user" }, { status: 500 })
  }
}

