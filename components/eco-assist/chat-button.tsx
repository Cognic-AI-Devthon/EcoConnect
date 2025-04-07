"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import EcoAssistChat from "./chat"

export default function EcoAssistButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen ? (
        <EcoAssistChat onClose={() => setIsOpen(false)} />
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg z-50 flex items-center justify-center"
          aria-label="Open Eco Assist"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}

