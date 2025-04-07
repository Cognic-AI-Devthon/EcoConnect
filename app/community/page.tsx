"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Heart, MessageSquare, Share2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CommunityPage() {
  const [postText, setPostText] = useState("")

  const cleanupEvents = [
    {
      id: 1,
      title: "Galkissa Beach Clean",
      date: "22 MAR 2025",
      time: "11 A.M. - 12:30 P.M.",
      location: "NEW BRIGHTON, MERSEYSIDE",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 2,
      title: "Great British Spring Clean beach clean and litter survey - New Brighton!",
      date: "22 MAR 2025",
      time: "11 A.M. - 12:30 P.M.",
      location: "NEW BRIGHTON, MERSEYSIDE",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 3,
      title: "Turtle Beach Clean-up",
      date: "22 MAR 2025",
      time: "11 A.M. - 12:30 P.M.",
      location: "NEW BRIGHTON, MERSEYSIDE",
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  const recycleCenters = [
    {
      id: 1,
      name: "Kaduwela municipal council",
      rating: 4.8,
      reviews: 8,
      type: "Recycling center - Kaduwela Rd.",
      hours: "Opens 8 AM Mon",
      phone: "077 774 8396",
    },
    {
      id: 2,
      name: "Wishwa Enterprises",
      rating: 4.8,
      reviews: 8,
      type: "Recycling center - Malwana Rd",
      hours: "Opens 8 AM Mon",
      phone: "077 774 8396",
    },
    {
      id: 3,
      name: "Recycle Lanka (Pvt) Ltd",
      rating: 4.8,
      reviews: 8,
      type: "Recycling center - Malwana Rd",
      hours: "Opens 8 AM Mon",
      phone: "077 774 8396",
    },
  ]

  const communityPosts = [
    {
      id: 1,
      user: {
        name: "Emily Anderson",
        username: "@emilyanderson",
        avatar: "/placeholder.svg?height=50&width=50",
        verified: true,
      },
      date: "May 29",
      content:
        "Joined an amazing beach cleanup at Nilaveli Beach! 🌊✨ It was such a great experience working with a passionate community to protect our oceans. Proud to be part of this impactful event! 💙💚",
      hashtags: ["#BeachCleanup", "#PlasticFreeOceans", "#SustainableLiving", "#EcoWarriors", "#NilaveliBeach"],
      image: "/placeholder.svg?height=300&width=500",
      likes: "36.3k",
      comments: "13.1k",
      shares: "97.4k",
    },
    {
      id: 2,
      user: {
        name: "Piyumi Nisansala",
        username: "@piyuminisansala",
        avatar: "/placeholder.svg?height=50&width=50",
        verified: true,
      },
      date: "May 29",
      content:
        "\"Just got my hands on a bamboo water bottle from EcoMarket, and I'm loving it! 💧🌿 Not only does it look great, but the water feels so refreshing too. Small swaps like this make a big impact. 💚",
      hashtags: ["#SustainableLiving", "#EcoFriendly", "#PlasticFree", "#BambooBottle", "#StayHydrated"],
      image: "/placeholder.svg?height=300&width=500",
      likes: "36.3k",
      comments: "13.1k",
      shares: "97.4k",
    },
  ]

  const suggestedFriends = [
    {
      id: 1,
      name: "Olivia Anderson",
      role: "Environmentalist",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Thomas Baker",
      role: "Researcher",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Lily Lee",
      role: "Graphic Designer",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "Andrew Harris",
      role: "Social Influencer",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-green-500 py-3 px-6 flex items-center">
          <div className="flex items-center text-white font-bold text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 mr-2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Eco Community
          </div>
        </div>

        <div className="flex flex-1">
          {/* Main content */}
          <div className="flex-1 p-6">
            {/* Create post */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Input
                  placeholder="Share your Eco-friendly thoughts..."
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  className="flex-1 bg-gray-100 border-0 focus-visible:ring-0"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-600 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-1"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    Add Media
                  </button>
                  <button className="flex items-center text-gray-600 text-sm">
                    <Calendar className="h-5 w-5 mr-1" />
                    Event
                  </button>
                </div>
                <Button className="bg-green-500 hover:bg-green-600 text-white px-6">Post</Button>
              </div>
            </div>

            {/* Nearby Clean-up Events */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Nearby Clean-up Events</h2>
              <div className="space-y-4">
                {cleanupEvents.map((event) => (
                  <div key={event.id} className="flex bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="w-1/4 h-40 overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <h3 className="font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  JOIN NOW
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
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Button>
              </div>
            </div>

            {/* Community Posts */}
            <div className="space-y-6">
              {communityPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img
                        src={post.user.avatar || "/placeholder.svg"}
                        alt={post.user.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className="font-bold">{post.user.name}</span>
                        {post.user.verified && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#1DA1F2"
                            className="h-4 w-4 ml-1"
                          >
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                          </svg>
                        )}
                        <span className="text-gray-500 text-sm ml-2">• {post.date}</span>
                      </div>
                    </div>
                    <button className="text-gray-500">
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
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </button>
                  </div>

                  <div className="mb-3">
                    <p className="mb-2">{post.content}</p>
                    <div className="flex flex-wrap">
                      {post.hashtags.map((tag, index) => (
                        <span key={index} className="text-blue-500 mr-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden mb-3">
                    <img src={post.image || "/placeholder.svg"} alt="Post image" className="w-full h-auto" />
                  </div>

                  <div className="flex justify-between text-gray-500 text-sm">
                    <button className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {post.comments}
                    </button>
                    <button className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </button>
                    <button className="flex items-center">
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
                        <polyline points="17 1 21 5 17 9"></polyline>
                        <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                        <polyline points="7 23 3 19 7 15"></polyline>
                        <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                      </svg>
                      {post.shares}
                    </button>
                    <button className="flex items-center">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-80 p-6 bg-gray-100 border-l border-gray-200">
            {/* Nearby Recycle Centers */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <h2 className="font-bold mb-3">Nearby Recycle Centers</h2>
              <div className="mb-4 rounded-lg overflow-hidden">
                <img src="/placeholder.svg?height=150&width=300" alt="Map" className="w-full h-auto" />
              </div>

              <div className="space-y-4">
                {recycleCenters.map((center) => (
                  <div key={center.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-medium">{center.name}</h3>
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
                    <p className="text-sm text-gray-600">{center.type}</p>
                    <p className="text-sm text-gray-600">Open: {center.hours}</p>
                    <p className="text-sm text-gray-600">{center.phone}</p>

                    <div className="flex mt-2 space-x-2">
                      <button className="flex items-center justify-center w-1/2 p-2 bg-blue-100 rounded-md text-blue-600 text-sm">
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
                      <button className="flex items-center justify-center w-1/2 p-2 bg-blue-100 rounded-md text-blue-600 text-sm">
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

              <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white">
                SEE ON MAP
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
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>
            </div>

            {/* Suggested Friends */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-bold mb-4">Suggested Friends</h2>
              <div className="space-y-4">
                {suggestedFriends.map((friend) => (
                  <div key={friend.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img
                          src={friend.avatar || "/placeholder.svg"}
                          alt={friend.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{friend.name}</h3>
                        <p className="text-sm text-gray-600">{friend.role}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

