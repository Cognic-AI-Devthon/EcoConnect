"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CallToAction() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/calculator")
  }

  const handleContactUs = () => {
    router.push("/contactUs")
  }

  return (
    <section className="py-16 text-center">
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto text-blue-500"
        >
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10z"></path>
          <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"></path>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="M6.34 6.34l1.42 1.42"></path>
          <path d="M16.24 16.24l1.42 1.42"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="M6.34 17.66l1.42-1.42"></path>
          <path d="M16.24 7.76l1.42-1.42"></path>
        </svg>
      </div>

      <h2 className="text-2xl font-bold mb-4">Start Your Sustainability Journey Today.</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-6">Take your first step towards a future with EcoConnect!</p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-full"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>

        <Button
          variant="outline"
          className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-2 rounded-full"
          onClick={handleContactUs}
        >
          Contact Us
        </Button>
      </div>
    </section>
  )
}

