"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/sidebar"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle forgot password logic here
    console.log("Send password reset code to:", email)
  }

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      {/* <Sidebar /> */}

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Forget Password</h1>

            <p className="text-gray-600 text-center mb-6">
              Enter the email address or mobile phone number associated with your EcoConnect account.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
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

              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
              >
                SEND CODE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6 text-sm">
              <div className="mb-2">
                Already have account?{" "}
                <Link href="/auth/login" className="text-blue-500 hover:underline">
                  Sign In
                </Link>
              </div>
              <div>
                Don't have account?{" "}
                <Link href="/auth/signup" className="text-blue-500 hover:underline">
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              You may contact{" "}
              <Link href="/customer-service" className="text-blue-500 hover:underline">
                Customer Service
              </Link>{" "}
              for help restoring access to your account.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

