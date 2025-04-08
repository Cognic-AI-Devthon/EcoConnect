"use client"

import { useState, useEffect, use } from "react"
import { MapPin } from "lucide-react"
import { useRouter } from "next/navigation"// import Sidebar from "@/components/sidebar" // Removed Sidebar import

type RecycleCenter = {
  id: number
  name: string
  rating: number
  reviews: number
  type: string
  address: string
  hours: string
  closed?: boolean
  phone: string
  coordinates: {
    lat: number
    lng: number
  }
}

export default function RecycleMapPage() {
  const [selectedCenter, setSelectedCenter] = useState<RecycleCenter | null>(null)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const router = useRouter()

  useEffect(() => {
    // In a real app, we would get the user's location
    // For demo purposes, we'll set a default location
    if (localStorage.getItem("user") === null) {
      router.push("/auth/login")
    }
    setUserLocation({ lat: 6.9271, lng: 79.8612 }) // Colombo, Sri Lanka
  }, [])

  const recycleCenters: RecycleCenter[] = [
    {
      id: 1,
      name: "Kaduwela municipal council garbage recycling center",
      rating: 3.7,
      reviews: 6,
      type: "Recycling center",
      address: "WXJP+FJG",
      hours: "Opens 8 AM Sat",
      closed: true,
      phone: "",
      coordinates: { lat: 6.9361, lng: 79.9842 },
    },
    {
      id: 2,
      name: "Kalhari Enterprises",
      rating: 4.3,
      reviews: 16,
      type: "Recycling center",
      address: "Dudley Gunasekara Mawatha",
      hours: "Opens 8 AM Mon",
      phone: "0112 401 167",
      coordinates: { lat: 6.9261, lng: 79.9242 },
    },
    {
      id: 3,
      name: "Wishwa Enterprises",
      rating: 4.8,
      reviews: 6,
      type: "Recycling center",
      address: "Malwana Rd",
      hours: "Opens 8 AM Mon",
      phone: "077 774 8396",
      coordinates: { lat: 6.9161, lng: 79.8842 },
    },
    {
      id: 4,
      name: "Pilisaru Organic Project Garbage Collection center",
      rating: 0,
      reviews: 0,
      type: "Recycling center",
      address: "WXJP+FJW",
      hours: "",
      phone: "076 376 9777",
      coordinates: { lat: 6.9461, lng: 79.8742 },
    },
    {
      id: 5,
      name: "INFINITY GREEN INTERNATIONAL (PVT) LTD",
      rating: 5.0,
      reviews: 1,
      type: "Recycling center",
      address: "23/A Maguruwaila Road",
      hours: "Opens 8 AM Sat",
      closed: true,
      phone: "0115 923 443",
      coordinates: { lat: 6.9061, lng: 79.8542 },
    },
    {
      id: 6,
      name: "Neptune Recyclers",
      rating: 4.0,
      reviews: 3,
      type: "Recycling center",
      address: "230/6 Sedawatta - Ambatale Rd",
      hours: "",
      phone: "077 744 4555",
      coordinates: { lat: 6.9561, lng: 79.9042 },
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-green-500 py-3 px-6 flex items-center">
          <div className="flex items-center text-white font-bold text-xl">
            <MapPin className="h-6 w-6 mr-2" />
            Recycle Map
          </div>
        </div>

        {/* Map */}
        <div className="relative h-[500px] bg-blue-50">
          {/* This would be replaced with an actual map component in a real app */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EcoConnect%20-%20Cognic.AI-29-kItddrNq6q3sTXUjJsb3VIJFFjGt2r.png')",
            }}
          >
            {/* Map placeholder */}
          </div>

          {/* Map controls */}
          <div className="absolute right-4 bottom-4 flex flex-col space-y-2">
            <button className="w-8 h-8 bg-white rounded-md shadow-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <button className="w-8 h-8 bg-white rounded-md shadow-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Recycle centers list */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-6">Recycle centers near you</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {recycleCenters.map((center) => (
                <div key={center.id} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="font-bold mb-1">{center.name}</h3>
                  <div className="flex items-center mb-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={`h-4 w-4 ${i >= Math.floor(center.rating) ? "text-gray-300" : ""}`}
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">({center.reviews})</span>
                  </div>
                  <p className="text-sm text-green-600 mb-1">
                    {center.type} - {center.address}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    {center.closed ? (
                      <span className="text-red-500">Closed</span>
                    ) : (
                      <span className="text-green-600">Open</span>
                    )}
                    {center.hours && <span> · {center.hours}</span>}
                  </p>
                  {center.phone && <p className="text-sm text-gray-600 mb-2">{center.phone}</p>}

                  <div className="flex space-x-2">
                    <button className="flex items-center justify-center w-24 p-2 bg-blue-100 rounded-md text-blue-600 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Website
                    </button>
                    <button className="flex items-center justify-center w-24 p-2 bg-blue-100 rounded-md text-blue-600 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-1"
                      >
                        <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                      </svg>
                      Directions
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-sm h-fit">
              <div className="mb-6">
                <img src="/placeholder.svg?height=200&width=200" alt="Recycling illustration" className="w-40 h-auto" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Recycling 1 kg of plastic saves 5.774 kWh—enough to power a light bulb for 240 hours!
              </h3>
              <p className="text-sm text-gray-500 text-center">Source</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

