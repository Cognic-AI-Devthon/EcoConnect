import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import EcoAssistButton from "@/components/eco-assist/chat-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EcoConnect - Sustainability Platform",
  description: "Join thousands making a difference for our planet",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen bg-[#f5f5f5]">
            <Sidebar />
            <main className="flex-1 pl-[var(--sidebar-width,64px)] transition-all duration-300">{children}</main>
            <EcoAssistButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'