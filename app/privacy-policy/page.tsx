"use client"

import { useRouter } from "next/navigation"
import Sidebar from "@/components/sidebar"

export default function PrivacyPolicyPage() {
  const router = useRouter()

  // Redirect to under construction page
  router.push("/under-construction")

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1>Privacy Policy</h1>
        <p>Loading...</p>
      </div>
    </div>
  )
}

