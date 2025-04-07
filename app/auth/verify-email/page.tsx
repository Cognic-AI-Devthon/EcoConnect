"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/sidebar"

export default function VerifyEmailPage() {
  const [verificationCode, setVerificationCode] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle verification logic here
    console.log("Verification attempt with code:", verificationCode)
  }

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <Sidebar />

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Verify Your Email Address</h1>

            <p className="text-gray-600 text-center mb-6">
              Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu, tristique a eu in diam.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">
                    Verification Code
                  </label>
                  <button
                    type="button"
                    className="text-sm text-blue-500 hover:underline"
                    onClick={() => console.log("Resend code")}
                  >
                    Resend Code
                  </button>
                </div>
                <Input
                  id="verificationCode"
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
              >
                VERIFY ME <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

