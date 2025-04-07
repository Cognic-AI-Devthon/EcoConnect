"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, User, Users, ShoppingBag, BookOpen, MessageCircle, Map, Trash2, Leaf, Calculator } from "lucide-react"
import { cn } from "@/lib/utils"

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
  const [expanded, setExpanded] = useState(true)

  // Update document with current sidebar state for responsive layout
  useEffect(() => {
    document.documentElement.style.setProperty("--sidebar-width", expanded ? "256px" : "64px")
  }, [expanded])

  return (
    <div
      className={cn(
        "fixed h-screen bg-white border-r border-gray-200 transition-all duration-300 flex flex-col z-30",
        expanded ? "w-64" : "w-16",
      )}
    >
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
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center p-2 text-gray-500 hover:text-green-600 transition-colors"
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {expanded ? "<<" : ">>"}
        </button>
      </div>
    </div>
  )
}

