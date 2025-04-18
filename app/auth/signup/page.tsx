"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Eye, EyeOff, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Sidebar from "@/components/sidebar"
import { auth } from "../../../lib/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import Toast2 from "@/components/ui/custom_toast"
import { createUser } from "../../../lib/db/users"
import { User } from "../../../types/user"
import { useSearchParams } from "next/navigation"

export default function SignupPage() {

  const params = useSearchParams()

  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [toastMesaage, setToastMessage] = useState("")
  const [toastOpen, setToastOpen] = useState(false)
  const [toastType, setToastType] = useState<"success" | "error" | "info">("info");
  const [plan, setPlan] = useState("Free")

  useEffect(() => {
    const planParam = params.get("plan")
    // console.log("plan", params.get("plan"))
    if (planParam) {
      setPlan(planParam)
    }
  }, [params])

  const showToast = (message: string, type: "success" | "error" | "info") => {
    setToastMessage(message);
    setToastType(type);
    setToastOpen(true);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setToastOpen(false);
      if (type === "success") {
        router.push("/auth/login")
      }
    }, 2000);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
    if (password !== confirmPassword) {
      // alert("Passwords do not match")
      showToast("Passwords do not match", "error")
      return
    }
    if (!agreeToTerms) {
      // alert("You must agree to the terms and conditions")
      showToast("You must agree to the terms and conditions", "error")
      return
    }
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res)
      if (res.user) {
        const user: User = {
          id: res.user.uid,
          name: name || '', // Fallback to empty string if displayName is null
          email: res.user.email || '',     // Fallback to empty string if email is null
          profilePicture: res.user.photoURL || '', // Fallback to empty string if photoURL is null
          joinDate: new Date().toISOString(), // Or use metadata.creationTime if available
          role: "regular", // Default to regular, adjust as needed
          subscriptionPlan: plan, // Default to Free
          ecoPoints: 0, // Initialize to 0
          todaysPoints: 0, // Initialize to 0
          streakCount: 0, // Initialize to 0
          badges: [] // Initialize empty array
        } as User;
        await createUser(res.user.uid, user)
        // alert("Signup successful")
        showToast("Signup successful", "success")
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setAgreeToTerms(false)
        setShowPassword(false)
        setShowConfirmPassword(false)
        await auth.signOut()
        localStorage.removeItem("user")
        router.push("/auth/login")
      } else {
        // alert("Something went wrong")
        showToast("Something went wrong", "error")
      }
    } catch (err) {
      // alert(err.message)
      showToast("Signup Error", "error")
    }
    console.log("Signup attempt with:", { name, email, password, confirmPassword, agreeToTerms })
  }

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      {/* <Sidebar /> */}
      {toastOpen && (
        <Toast2
          message={toastMesaage}
          type={toastType}
          onClose={() => setToastOpen(false)}
        />
      )}

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="flex">
              <Link href="/auth/login" className="flex-1 py-4 text-center font-medium bg-gray-100 text-gray-500">
                Sign In
              </Link>
              <button className="flex-1 py-4 text-center font-medium border-b-2 border-blue-500 text-gray-800">
                Sign Up
              </button>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pr-10"
                      placeholder="8+ characters"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <Checkbox
                      id="terms"
                      checked={agreeToTerms}
                      onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                      className="border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-700">
                      Are you agree to EcoConnect{" "}
                      <Link href="/terms" className="text-blue-500 hover:underline">
                        Terms of Condition
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-blue-500 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
                  disabled={!agreeToTerms}
                  onClick={handleSubmit}
                >
                  SIGN UP <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">or</div>

              <div className="mt-6 space-y-3">
                <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <img src="/placeholder.svg?height=20&width=20" alt="Google" className="h-5 w-5 mr-2" />
                  Sign up with Google
                </button>

                <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <img src="/placeholder.svg?height=20&width=20" alt="Apple" className="h-5 w-5 mr-2" />
                  Sign up with Apple
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

