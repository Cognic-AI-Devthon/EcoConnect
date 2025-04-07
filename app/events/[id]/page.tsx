"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"

type EventDetails = {
  id: string
  title: string
  description: string
  image: string
  organizer: {
    name: string
    avatar: string
  }
  details: {
    beachStretch: string
    dateTime: string
    meetingPoint: string
    capacity: string
    schoolFriendly: boolean
  }
  instructions: string[]
  requirements: {
    toBring: string
    toWear: string
    underAge: string
  }
  spacesRemaining: number
}

export default function EventDetailsPage() {
  const params = useParams()
  const { id } = params

  const [event, setEvent] = useState<EventDetails | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    // For demo purposes, we'll create a mock event
    const mockEvent: EventDetails = {
      id: id as string,
      title: "TACT Team Spring Clean at Escart Bay - part 1",
      description:
        "Join this beach clean to help us stop harmful litter from reaching the ocean and collect vital data that we can use to bring about positive change for our seas.",
      image: "/placeholder.svg?height=400&width=800",
      organizer: {
        name: "Kirsti Polsley",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      details: {
        beachStretch: "Escart Bay",
        dateTime: "23 Mar 2025, 1:30 p.m. to 4:30 p.m.",
        meetingPoint: "Meet at the signposted car park 500m south of Carrick Cemetery on the A83.",
        capacity: "30 volunteers - 29 spaces left",
        schoolFriendly: false,
      },
      instructions: [
        "Please wear sturdy waterproof footwear and clothing, and bring some gardening gloves if you have them.",
        "If you are under 16 you need to bring a parent/guardian with you.",
        "Sorry no dogs.",
      ],
      requirements: {
        toBring:
          "We'd recommend you pack a rucksack with a few essentials like sunscreen, waterproofs, hand sanitiser, and perhaps some snacks and a drink (in a reusable bottle, of course).",
        toWear:
          "If you're picking up litter with your hands it's worth wearing a strong pair of gloves - like gardening gloves - just to make sure you're protected. Sturdy shoes are a must for protection too.",
        underAge:
          "To comply with our insurance, volunteers under 16 will need to be accompanied by an adult who will be asked to sign a parental / guardian consent form on the day by the beach clean organiser.",
      },
      spacesRemaining: 29,
    }

    setEvent(mockEvent)
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="flex min-h-screen bg-[#f5f5f5]">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-64 bg-gray-200 rounded mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="flex min-h-screen bg-[#f5f5f5]">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
            <p className="mb-6">The event you're looking for doesn't exist or has been moved.</p>
            <Link href="/events" className="text-green-600 hover:underline">
              Return to Events
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <Sidebar />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-gradient-to-b from-teal-500 to-teal-600">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-600/90"></div>

          <div className="relative h-full flex flex-col items-center justify-end text-white p-6">
            <div className="max-w-3xl w-full">
              <Link href="/events" className="inline-flex items-center text-white mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>

              <div className="flex items-center mb-6">
                <img
                  src={event.organizer.avatar || "/placeholder.svg"}
                  alt={event.organizer.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span>{event.organizer.name}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto py-8 px-6">
          <div className="flex justify-end mb-6">
            <div className="flex space-x-2">
              <span className="text-gray-600 mr-2">Share</span>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Twitter className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Linkedin className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          <p className="text-lg mb-8">{event.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="font-bold mb-4">Beach stretch:</h2>
              <p className="mb-4">{event.details.beachStretch}</p>

              <h2 className="font-bold mb-4">Date and time:</h2>
              <p className="mb-4">{event.details.dateTime}</p>

              <h2 className="font-bold mb-4">Meeting point:</h2>
              <p className="mb-4">{event.details.meetingPoint}</p>

              <h2 className="font-bold mb-4">Capacity:</h2>
              <p className="mb-4">{event.details.capacity}</p>

              <h2 className="font-bold mb-4">School friendly?</h2>
              <p className="mb-4">{event.details.schoolFriendly ? "Yes" : "No"}</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="h-48 bg-gray-300 rounded-lg mb-4">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Map"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            {event.instructions.map((instruction, index) => (
              <p key={index} className="mb-2">
                {instruction}
              </p>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Also worth knowing...</h2>

            <h3 className="font-bold mb-2">What to bring:</h3>
            <p className="mb-4">{event.requirements.toBring}</p>

            <h3 className="font-bold mb-2">What to wear:</h3>
            <p className="mb-4">{event.requirements.toWear}</p>

            <h3 className="font-bold mb-2">Under 16s:</h3>
            <p className="mb-4">{event.requirements.underAge}</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">
              {event.spacesRemaining} spaces remaining - join us on the beach whilst there's still spaces!
            </h2>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
              Sign up
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 ml-2"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Share</span>
            <div className="flex space-x-2">
              <a href="#" className="text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

