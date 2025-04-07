"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../lib/firebase"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/sidebar"
import Toast2 from "@/components/ui/custom_toast"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [toastMesaage, setToastMessage] = useState("")
  const [toastOpen, setToastOpen] = useState(false)
  const [toastType, setToastType] = useState<"success" | "error" | "info">("info");
  const [showPassword, setShowPassword] = useState(false)

  const showToast = (message: string, type: "success" | "error" | "info") => {
    setToastMessage(message);
    setToastType(type);
    setToastOpen(true);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setToastOpen(false);
    }, 2000);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    const resut = await signInWithEmailAndPassword(auth, email, password)
    console.log(resut)
    if (resut.user) {
      // console.log("Login successful")
      // console.log(resut.user)
      showToast("Login successful", "success")
      setEmail("")
      setPassword("")
      setShowPassword(false)
      router.push("/")
    } else {
      // console.log("error")
      showToast("Something went wrong", "error")
    }

    console.log("Login attempt with:", { email, password })
  }

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      {/* <Sidebar /> */}
      {/* <button
        onClick={() => showToast("Test toast!", "success")}
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Test Toast
      </button> */}
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
              <button className="flex-1 py-4 text-center font-medium border-b-2 border-blue-500 text-gray-800">
                Sign In
              </button>
              <Link href="/auth/signup" className="flex-1 py-4 text-center font-medium bg-gray-100 text-gray-500">
                Sign Up
              </Link>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit}>
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
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Link href="/auth/forgot-password" className="text-sm text-blue-500 hover:underline">
                      Forgot Password
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pr-10"
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

                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
                  onClick={handleSubmit}
                >
                  SIGN IN <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">or</div>

              <div className="mt-6 space-y-3">
                <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <img src="/placeholder.svg?height=20&width=20" alt="Google" className="h-5 w-5 mr-2" />
                  Login with Google
                </button>

                <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <img src="/placeholder.svg?height=20&width=20" alt="Apple" className="h-5 w-5 mr-2" />
                  Login with Apple
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

