"use client"

import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"

export default function CheckoutSuccessPage() {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      

      <div className="flex-1">
        {/* Header */}
        <div className="bg-green-500 py-3 px-6 flex items-center justify-between">
          <Link href="/marketplace" className="flex items-center text-white font-bold text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 mr-2"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            Eco Market
          </Link>
        </div>

        <div className="flex items-center justify-center p-6 h-[calc(100vh-64px)]">
          <div className="max-w-md w-full text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-10 w-10 text-green-600" />
              </div>
            </div>

            <h1 className="text-2xl font-bold mb-4">Your order is successfully place</h1>
            <p className="text-gray-600 mb-8">
              Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non
              facilisis.
            </p>

            <div className="flex space-x-4 justify-center">
              <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50" asChild>
                <Link href="/marketplace/account/dashboard">GO TO DASHBOARD</Link>
              </Button>

              <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                <Link href="/marketplace/order/track">
                  VIEW ORDER <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

