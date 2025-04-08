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
        <img
          src="/ecoconnetwhale.png"
          alt="Icon"
          className="mx-auto text-blue-500"
          width="150"
          height="150"
        />
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

