"use client"

import { useRouter } from "next/navigation"
import Sidebar from "@/components/sidebar"

export default function CookiePolicyPage() {
  const router = useRouter()

  // Redirect to under construction page
  router.push("/under-construction")

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1>Cookie Policy</h1>
        <p>Loading...</p>
      </div>
    </div>
  )
}

