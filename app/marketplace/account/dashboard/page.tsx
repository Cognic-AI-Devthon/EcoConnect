"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Heart } from "lucide-react"
import Sidebar from "@/components/sidebar"

export default function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState("order-history")
  
  // Mock order data
  const orders = [
    {
      id: "96459761",
      date: "Dec 30, 2019 07:52",
      status: "IN PROGRESS",
      total: "$80.75 (Products)",
    },
    {
      id: "47987567",
      date: "Dec 7, 2019 23:26",
      status: "COMPLETED",
      total: "$71.14 (Products)",
    },
    {
      id: "95341245",
      date: "Dec 7, 2019 22:05",
      status: "CANCELED",
      total: "$2,360.2 (Products)",
    },
    {
      id: "47987567",
      date: "Feb 2, 2019 19:28",
      status: "COMPLETED",
      total: "$250.11 (Products)",
    },
    {
      id: "45174365",
      date: "Dec 30, 2019 07:52",
      status: "COMPLETED",
      total: "$360.12 (Products)",
    },
    {
      id: "45174365",
      date: "Dec 4, 2019 11:42",
      status: "CANCELED",
      total: "$220.17 (Products)",
    },
    {
      id: "46739774",
      date: "Feb 2, 2019 19:28",
      status: "COMPLETED",
      total: "$80.11 (Products)",
    },
    {
      id: "46739774",
      date: "Mar 20, 2019 23:14",
      status: "COMPLETED",
      total: "$140.11 (Products)",
    },
    {
      id: "46739774",
      date: "Dec 4, 2019 21:42",
      status: "COMPLETED",
      total: "$1,350.13 (Products)",
    },
    {
      id: "46739774",
      date: "Dec 30, 2019 07:52",
      status: "COMPLETED",
      total: "$1,350.13 (Products)",
    },
    {
      id: "46739774",
      date: "Dec 30, 2019 05:16",
      status: "CANCELED",
      total: "$1,350.13 (Products)",
    },
    {
      id: "46739774",
      date: "Dec 30, 2019 07:52",
      status: "COMPLETED",
      total: "$80.11 (Products)",
    },
  ]

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
            <Link href="/marketplace" className="hover:text-green-600">Home</Link>
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
            <Link href="/marketplace/account" className="hover:text-green-600">User Account</Link>
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
            <span className="text-gray-700 font-medium">Dashboard</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
\

