"use client"

import Link from "next/link"

type EcoHubTabsProps = {
  activeTab: "earn" | "redeem" | "status"
}

export default function EcoHubTabs({ activeTab }: EcoHubTabsProps) {
  return (
    <div className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <nav className="flex">
          <Link
            href="/ecohub/earn"
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === "earn"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"
            }`}
          >
            Earn
          </Link>
          <Link
            href="/ecohub/redeem"
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === "redeem"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"
            }`}
          >
            Redeem
          </Link>
          <Link
            href="/ecohub/status"
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === "status"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"
            }`}
          >
            Status
          </Link>
        </nav>
      </div>
    </div>
  )
}

