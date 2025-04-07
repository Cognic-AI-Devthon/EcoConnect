"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import Sidebar from "@/components/sidebar"

type CleanupEvent = {
  id: number
  title: string
  date: string
  time: string
  location: string
  image: string
  schoolFriendly: boolean
  organizer: string
}

export default function CleanupEventsPage() {
  const [location, setLocation] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [isSchoolFriendly, setIsSchoolFriendly] = useState(false)
  const [distance, setDistance] = useState("Within 2 miles")

  const cleanupEvents: CleanupEvent[] = [
    {
      id: 1,
      title: "Galkissa Beach Clean up",
      date: "22 MAR 2025",
      time: "11 A.M. - 12:30 P.M.",
      location: "NEW BRIGHTON, MERSEYSIDE",
      image: "/placeholder.svg?height=200&width=300",
      schoolFriendly: true,
      organizer: "ROTARAC SOCIETY, UNIVERSITY OF MORATUWA",
    },
    {
      id: 2,
      title: "Aberdeen City Beach - North End",
      date: "23 MAR 2025",
      time: "2:00 P.M. - 4:30 P.M.",
      location: "ABERDEEN NORTH NI, ABERDEEN CITY",
      image: "/placeholder.svg?height=200&width=300",
      schoolFriendly: false,
      organizer: "ZERO PLASTIC MOVEMENT",
    },
    {
      id: 3,
      title: "Community Clean Up, West Links Park & Beach.",
      date: "28 MAR 2025",
      time: "7 A.M. - 1 P.M.",
      location: "ARBROATH WEST LINKS, ANGUS",
      image: "/placeholder.svg?height=200&width=300",
      schoolFriendly: true,
      organizer: "ARBROATH COMMUNITY",
    },
    {
      id: 4,
      title: "Slapton Sands Great British Spring Clean",
      date: "22 MAR 2025",
      time: "11 A.M. - 12:30 P.M.",
      location: "NEW BRIGHTON, MERSEYSIDE",
      image: "/placeholder.svg?height=200&width=300",
      schoolFriendly: true,
      organizer: "ROTARAC SOCIETY, UNIVERSITY OF MORATUWA",
    },
    {
      id: 5,
      title: "Great British Spring Clean beach clean and litter survey - New Brighton!",
      date: "22 MAR 2025",
      time: "11 A.M. - 12:30 P.M.",
      location: "NEW BRIGHTON, MERSEYSIDE",
      image: "/placeholder.svg?height=200&width=300",
      schoolFriendly: true,
      organizer: "ROTARAC SOCIETY, UNIVERSITY OF MORATUWA",
    },
  ]

  const handleSearch = () => {
    // In a real app, this would filter the events based on the search criteria
    console.log("Searching for events with:", { location, startDate, endDate, isSchoolFriendly, distance })
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-gradient-to-b from-green-900 to-green-700 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}
          ></div>

          <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Join hands to keep the ocean blue and
              <br />
              the turtles happy!
            </h1>

            <div className="w-full max-w-3xl bg-green-800 bg-opacity-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="col-span-1 md:col-span-1">
                  <Input
                    type="text"
                    placeholder="Town name or postcode"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white text-black"
                  />
                </div>
                <div className="relative">
                  <select
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option>Within 2 miles</option>
                    <option>Within 5 miles</option>
                    <option>Within 10 miles</option>
                    <option>Within 20 miles</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-gray-500"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-white text-black"
                />
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-white text-black"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isSchoolFriendly}
                    onChange={(e) => setIsSchoolFriendly(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 mr-2 border rounded flex items-center justify-center ${isSchoolFriendly ? "bg-green-500 border-green-500" : "border-white"}`}
                  >
                    {isSchoolFriendly && <Check className="h-3 w-3 text-white" />}
                  </div>
                  School friendly?
                </label>

                <Button onClick={handleSearch} className="bg-green-500 hover:bg-green-600 text-white px-8">
                  Search
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
            </div>
          </div>

          <div className="absolute left-10 bottom-10">
            <img src="/placeholder.svg?height=100&width=100" alt="Starfish" className="h-20 w-auto" />
          </div>
          <div className="absolute left-32 bottom-16">
            <img src="/placeholder.svg?height=80&width=80" alt="Shell" className="h-16 w-auto" />
          </div>
        </div>

        {/* Events List */}
        <div className="container mx-auto py-12 px-6">
          {cleanupEvents.map((event) => (
            <div key={event.id} className="mb-12 border-b border-gray-200 pb-12 last:border-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-auto rounded-lg" />
                </div>

                <div className="md:ml-6 flex-1">
                  <h2 className="text-xl font-bold mb-4">{event.title}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-gray-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-gray-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-gray-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="mr-2">School friendly?</span>
                    {event.schoolFriendly ? (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">Yes</span>
                    ) : (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">No</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Organized by:</p>
                    <p className="font-medium">{event.organizer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8">
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">1</button>

            {[2, 3, 4, 5, 6].map((page) => (
              <button
                key={page}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center mx-1"
              >
                {page}
              </button>
            ))}

            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

