"use client"

import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"

export default function UnderConstructionPage() {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <Sidebar />

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-md text-center">
          <div className="mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EcoConnect%20-%20Cognic.AI-07-QrTXogqmrnZg7iHx0be28EO3CTTwnB.png"
              alt="Whale with flowers"
              className="w-64 h-64 mx-auto"
            />
          </div>

          <h1 className="text-3xl font-bold mb-4">Page Under Construction</h1>

          <p className="text-gray-600 mb-8">
            Oops! It looks like the page you're looking for isn't ready yet. We're hammering away behind the scenes to
            bring it to life.
          </p>

          <p className="text-gray-600 mb-8">
            Please check back soon or explore other parts of the site in the meantime. We appreciate your patience!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="default"
              className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> GO BACK
            </Button>

            <Button
              variant="outline"
              className="border-green-500 text-green-600 hover:bg-green-50 flex items-center justify-center"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" /> GO TO HOME
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

