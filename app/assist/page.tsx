"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Send, Paperclip, Mic, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LanguageSelector from "@/components/eco-assist/language-selector"
import { useRouter } from "next/navigation"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function EcoAssistPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm Eco Assist, your sustainability guide. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const router = useRouter()

  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user", 
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Show typing indicator
    setIsTyping(true)

    try {
      // Call chat endpoint
      const response = await fetch("http://localhost:8001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])

    } catch (error) {
      console.error("Error getting chat response:", error)
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I encountered an error. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])

    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const suggestedQuestions = [
    "How can I reduce my plastic usage?",
    "What is a carbon footprint?", 
    "Tell me about sustainable living",
    "How do I start composting?",
    "What are eco-friendly alternatives to plastic?",
  ]

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      router.push("/auth/login")
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-green-500 py-3 px-6 flex items-center justify-between">
        <div className="flex items-center text-white font-bold text-xl">Eco Assist</div>
        <LanguageSelector />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[70%] rounded-lg p-4 ${message.sender === "user"
                    ? "bg-green-500 text-white rounded-tr-none"
                    : "bg-white shadow-sm text-gray-800 rounded-tl-none"
                    }`}
                >
                  <p>{message.content}</p>
                  <div className="mt-2 text-xs opacity-70 flex justify-between items-center">
                    <span>
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    {message.sender === "bot" && (
                      <div className="flex space-x-2">
                        <button className="hover:text-green-600">
                          <ThumbsUp className="h-4 w-4" />
                        </button>
                        <button className="hover:text-red-600">
                          <ThumbsDown className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm text-gray-800 rounded-lg rounded-tl-none max-w-[70%] p-4">
                  <div className="flex space-x-2">
                    <div
                      className="h-3 w-3 rounded-full bg-gray-300 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="h-3 w-3 rounded-full bg-gray-300 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="h-3 w-3 rounded-full bg-gray-300 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Suggested questions */}
          {messages.length < 2 && (
            <div className="px-6 mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Suggested questions:</h3>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="bg-white shadow-sm text-gray-800 rounded-full px-3 py-1 text-sm hover:bg-gray-100"
                    onClick={() => {
                      setInputValue(question)
                    }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input area - moved to bottom */}
          <div className="p-4 border-t border-gray-200 bg-white mt-auto">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-gray-500 hover:bg-gray-100">
                <Paperclip className="h-5 w-5" />
              </Button>

              <div className="flex-1 relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="pr-10 py-6 focus-visible:ring-green-500"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full text-gray-500 hover:bg-gray-100"
                >
                  <Mic className="h-5 w-5" />
                </Button>
              </div>

              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="h-10 w-10 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="hidden lg:block w-80 bg-white border-l border-gray-200 p-6">
          <h2 className="font-bold text-lg mb-4">About Eco Assist</h2>
          <p className="text-gray-600 mb-6">
            Eco Assist is your AI-powered sustainability companion. Ask questions about:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-green-600 text-xs">1</span>
              </div>
              <span className="text-gray-700">Reducing plastic waste</span>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-green-600 text-xs">2</span>
              </div>
              <span className="text-gray-700">Carbon footprint reduction</span>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-green-600 text-xs">3</span>
              </div>
              <span className="text-gray-700">Sustainable living tips</span>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-green-600 text-xs">4</span>
              </div>
              <span className="text-gray-700">Eco-friendly product recommendations</span>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-green-600 text-xs">5</span>
              </div>
              <span className="text-gray-700">Local recycling information</span>
            </li>
          </ul>

          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-medium text-green-800 mb-2">Did you know?</h3>
            <p className="text-green-700 text-sm">
              The average person generates about 4.5 pounds of trash every day, and about 1.5 tons of solid waste per
              year.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
