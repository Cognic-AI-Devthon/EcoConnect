"use client"

import Link from "next/link"
import { Search, ShoppingCart, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/sidebar"

export default function TrackOrderPage() {
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

          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full py-2 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/marketplace/cart" className="relative text-white">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-white text-green-500 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                2
              </span>
            </Link>
            <Link href="/marketplace/wishlist" className="text-white">
              <Heart className="h-6 w-6" />
            </Link>
            <Link href="/marketplace/account" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
          </div>
        </div>

        <div className="p-6">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link href="/marketplace" className="hover:text-green-600">
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mx-2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <Link href="/marketplace/account" className="hover:text-green-600">
              Pages
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mx-2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <span className="text-gray-700 font-medium">Track Order</span>
          </div>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Track Order</h1>

            <p className="text-gray-600 mb-6">
              To track your order please enter your order ID in the input field below and press the "Track Order"
              button. This was given to you on your receipt and in the confirmation email you should have received.
            </p>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-1">
                    Order ID
                  </label>
                  <Input id="orderId" placeholder="ID..." />
                </div>
                <div>
                  <label htmlFor="billingEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Billing Email
                  </label>
                  <Input id="billingEmail" placeholder="Email address" />
                </div>
              </div>

              <div className="text-xs text-gray-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 inline-block mr-1"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Order ID that we sended to your in your email address.
              </div>

              <Button className="bg-green-500 hover:bg-green-600 text-white">
                TRACK ORDER <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

