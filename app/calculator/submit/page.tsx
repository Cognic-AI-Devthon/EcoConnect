"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SubmitAnswersPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
    // Simulate submission process
    setTimeout(() => {
      router.push("/calculator/results")
    }, 1500)
  }

  return (
    <div className="flex-1 p-6 md:p-10">
      <Link href="/calculator" className="inline-flex items-center text-sm text-gray-600 hover:text-green-600 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to calculator
      </Link>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-green-500 font-medium">Quiz complete!</span>
          <h1 className="text-3xl font-bold mt-2 mb-4">Ready to submit your answers?</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Explore interactive charts on your plastic footprint and receive a detailed report to reduce plastic usage!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Saves your calculator entries</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Includes interactive charts about your plastic footprint</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Includes personalized recommendations for minimizing plastic waste</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>One-click unsubscribe, and no spam</span>
              </li>
            </ul>

            <div className="mt-8 text-center">
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-full text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Check className="mr-2 h-5 w-5" /> Submit answer
                  </span>
                )}
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/finish.png"
              alt="Ocean plastic illustration"
              className="w-full h-auto rounded-lg"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-600">
              <p>
                Over <span className="font-bold">1,000,000</span> people have learned about their footprint on
                EcoConnect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

