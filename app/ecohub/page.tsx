"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EcoHubPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the earn page by default
    if (localStorage.getItem("user") === null) {
      router.push("/auth/login")
    }
    router.push("/ecohub/earn")
  }, [router])

  return null
}

