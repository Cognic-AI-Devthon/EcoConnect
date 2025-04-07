import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Authentication - EcoConnect",
  description: "Sign in or sign up to EcoConnect",
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}

