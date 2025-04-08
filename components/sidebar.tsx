"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, User, Users, ShoppingBag, BookOpen, MessageCircle, Map, Trash2, Leaf, Calculator, LogOut, LogIn, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { auth } from "../lib/firebase"
import { Toast } from "@radix-ui/react-toast"
import Toast2 from "./ui/custom_toast"

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Calculator, label: "Eco Calculator", href: "/calculator" },
  { icon: User, label: "My EcoHub", href: "/ecohub" },
  { icon: MessageCircle, label: "Eco Assist", href: "/assist" },
  { icon: Users, label: "Eco Community", href: "/community" },
  { icon: Map, label: "Recycle Map", href: "/map" },
  { icon: Trash2, label: "Clean Up Events", href: "/events" },
  { icon: BookOpen, label: "Edu Hub", href: "/edu" },
  { icon: ShoppingBag, label: "Eco Marketplace", href: "/marketplace" },
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState(() => {
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sidebarExpanded') !== 'false'
    }
    return true
  })
  const [user, setUser] = useState<string | null>(null)
  const [toastMesaage, setToastMessage] = useState("")
  const [toastOpen, setToastOpen] = useState(false)
  const [toastType, setToastType] = useState<"success" | "error" | "info">("info");

  const showToast = (message: string, type: "success" | "error" | "info") => {
    setToastMessage(message);
    setToastType(type);
    setToastOpen(true);

    // Auto-hide after 2 seconds
    setTimeout(() => {
      setToastOpen(false);
    }, 2000);
  };

  // Handle auth state and localStorage changes
  useEffect(() => {
    // Set initial auth state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.uid)
        localStorage.setItem('user', user.uid)
      } else {
        setUser(null)
        localStorage.removeItem('user')
      }
    })

    // Listen for localStorage changes from other tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'user') {
        setUser(e.newValue)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    // Save sidebar state to localStorage
    localStorage.setItem('sidebarExpanded', String(expanded))

    return () => {
      unsubscribe()
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [expanded])

  const handleSignOut = async () => {
    try {
      await auth.signOut()
      localStorage.removeItem('user')
      setUser(null)
      showToast("Sign out successful", "success")
      // No need to reload - auth state change will trigger update
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <div
      className={cn(
        "fixed h-screen bg-white border-r border-gray-200 transition-all duration-300 flex flex-col z-30",
        expanded ? "w-64" : "w-16",
      )}
    >
      {toastOpen && (
        <Toast2
          message={toastMesaage}
          type={toastType}
          onClose={() => setToastOpen(false)}
        />
      )}
      <div className="p-4 flex items-center justify-center">
        <Link href="/">
          <div className="flex items-center">
            <Leaf className={cn("text-green-600", expanded ? "h-8 w-8" : "h-10 w-10")} />
            {expanded && <span className="ml-2 text-xl font-bold text-green-600">EcoConnect</span>}
          </div>
        </Link>
      </div>

      <nav className="flex-1 mt-6 overflow-y-auto">
        <ul className="space-y-2 px-2">
          {!user && (
            <li>
              <Link
                href="/auth/login"
                className={cn(
                  "flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors",
                  !expanded && "justify-center"
                )}
              >
                <LogIn className={cn("flex-shrink-0", expanded ? "h-5 w-5" : "h-7 w-7")} />
                {expanded && <span className="ml-3">Sign In</span>}
              </Link>
            </li>
          )}
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center p-3 text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors",
                  !expanded && "justify-center",
                )}
              >
                <item.icon className={cn("flex-shrink-0", expanded ? "h-5 w-5" : "h-7 w-7")} />
                {expanded && <span className="ml-3">{item.label}</span>}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/contactUs"
              className={cn(
                "flex items-center p-3 text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors",
                !expanded && "justify-center",
              )}
            >
              <MessageCircle className={cn("flex-shrink-0", expanded ? "h-5 w-5" : "h-7 w-7")} />
              {expanded && <span className="ml-3">Contact Us</span>}
            </Link>
          </li>

          {user && (
            <li>
              <button
                onClick={handleSignOut}
                className={cn(
                  "flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors",
                  !expanded && "justify-center"
                )}
              >
                <LogOut className={cn("flex-shrink-0", expanded ? "h-5 w-5" : "h-7 w-7")} />
                {expanded && <span className="ml-3">Sign Out</span>}
              </button>
            </li>
          )}
        </ul>
      </nav>


    </div>
  )
}