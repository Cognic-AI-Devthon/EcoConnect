"use client"

import { useState } from "react"
import Link from "next/link"
import { Info, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EcoHubTabs from "@/components/ecohub-tabs"

type RewardCategory = "all" | "gift-cards" | "donations" | "eco-products" | "experiences"

type Reward = {
  id: number
  title: string
  description: string
  points: number
  image: string
  category: RewardCategory
  featured?: boolean
  new?: boolean
  hot?: boolean
}

export default function RedeemPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<RewardCategory>("all")

  const userStats = {
    name: "Nishan",
    level: 2,
    ecoPoints: 19258,
    autoRedeem: "-",
    todaysPoints: 140,
    streakCount: 178,
  }

  const featuredRewards: Reward[] = [
    {
      id: 1,
      title: "Eco Market Gift Card Rs5000",
      description: "Shop eco-friendly products with this gift card",
      points: 21000,
      image: "/placeholder.svg?height=200&width=200",
      category: "gift-cards",
      featured: true,
    },
    {
      id: 2,
      title: "Plant 10 Trees",
      description: "Contribute to reforestation efforts",
      points: 5000,
      image: "/placeholder.svg?height=200&width=200",
      category: "donations",
      featured: true,
    },
    {
      id: 3,
      title: "Bamboo Cutlery Set",
      description: "Portable and reusable cutlery set",
      points: 8000,
      image: "/placeholder.svg?height=200&width=200",
      category: "eco-products",
      featured: true,
      new: true,
    },
  ]

  const allRewards: Reward[] = [
    ...featuredRewards,
    {
      id: 4,
      title: "Eco Market Gift Card Rs2500",
      description: "Shop eco-friendly products with this gift card",
      points: 10000,
      image: "/placeholder.svg?height=200&width=200",
      category: "gift-cards",
    },
    {
      id: 5,
      title: "Eco Market Gift Card Rs1000",
      description: "Shop eco-friendly products with this gift card",
      points: 5000,
      image: "/placeholder.svg?height=200&width=200",
      category: "gift-cards",
    },
    {
      id: 6,
      title: "Beach Cleanup Experience",
      description: "Join a guided beach cleanup with experts",
      points: 3000,
      image: "/placeholder.svg?height=200&width=200",
      category: "experiences",
      hot: true,
    },
    {
      id: 7,
      title: "Reusable Water Bottle",
      description: "High-quality stainless steel water bottle",
      points: 7500,
      image: "/placeholder.svg?height=200&width=200",
      category: "eco-products",
    },
    {
      id: 8,
      title: "Donate to Ocean Cleanup",
      description: "Support efforts to clean plastic from oceans",
      points: 2000,
      image: "/placeholder.svg?height=200&width=200",
      category: "donations",
    },
    {
      id: 9,
      title: "Eco Workshop Ticket",
      description: "Learn how to reduce your carbon footprint",
      points: 4000,
      image: "/placeholder.svg?height=200&width=200",
      category: "experiences",
    },
  ]

  const filteredRewards = allRewards.filter(
    (reward) =>
      (selectedCategory === "all" || reward.category === selectedCategory) &&
      (searchQuery === "" || reward.title.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="flex-1">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100">
          <div className="max-w-6xl mx-auto">
            <div className="mb-4">
              <h1 className="text-xl font-bold">Hi {userStats.name}</h1>
              <div className="flex items-center text-sm text-gray-600">
                Level {userStats.level}
                <button className="ml-1">
                  <Info className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Available points */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-1">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-blue-600">🏆</span>
                  </div>
                  <span className="text-sm text-gray-600">Available points</span>
                  <button className="ml-1">
                    <Info className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">{userStats.ecoPoints.toLocaleString()}</span>
                </div>
                <div className="mt-2">
                  <Link href="#" className="text-sm text-blue-600 hover:underline">
                    Redeem
                  </Link>
                </div>
              </div>

              {/* Auto-redeem */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-1">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-blue-600">🔄</span>
                  </div>
                  <span className="text-sm text-gray-600">Auto-redeem</span>
                  <button className="ml-1">
                    <Info className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">{userStats.autoRedeem}</span>
                </div>
                <div className="mt-2">
                  <Link href="#" className="text-sm text-blue-600 hover:underline">
                    Setup
                  </Link>
                </div>
              </div>

              {/* Today's points */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-1">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-blue-600">📅</span>
                  </div>
                  <span className="text-sm text-gray-600">Today's points</span>
                  <button className="ml-1">
                    <Info className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">{userStats.todaysPoints}</span>
                </div>
                <div className="mt-2">
                  <Link href="#" className="text-sm text-blue-600 hover:underline">
                    Points breakdown
                  </Link>
                </div>
              </div>

              {/* Streak count */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-1">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-blue-600">🔥</span>
                  </div>
                  <span className="text-sm text-gray-600">Streak count</span>
                  <button className="ml-1">
                    <Info className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">{userStats.streakCount}</span>
                </div>
                <div className="mt-2">
                  <Link href="#" className="text-sm text-blue-600 hover:underline">
                    Streak protection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <EcoHubTabs activeTab="redeem" />

        {/* Main content */}
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Redeem your points</h1>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search rewards"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full md:w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <Tabs
              defaultValue="all"
              className="w-full"
              onValueChange={(value) => setSelectedCategory(value as RewardCategory)}
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
                <TabsTrigger value="all">All Rewards</TabsTrigger>
                <TabsTrigger value="gift-cards">Gift Cards</TabsTrigger>
                <TabsTrigger value="donations">Donations</TabsTrigger>
                <TabsTrigger value="eco-products">Eco Products</TabsTrigger>
                <TabsTrigger value="experiences">Experiences</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Featured rewards */}
          {selectedCategory === "all" && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Featured Rewards</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredRewards.map((reward) => (
                  <div key={reward.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative">
                      <img
                        src={reward.image || "/placeholder.svg"}
                        alt={reward.title}
                        className="w-full h-48 object-cover"
                      />
                      {reward.new && (
                        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                          NEW
                        </div>
                      )}
                      {reward.hot && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          HOT
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold mb-2">{reward.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{reward.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="font-bold">{reward.points.toLocaleString()} points</span>
                        <Button className="bg-green-500 hover:bg-green-600">Redeem</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All rewards */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              {selectedCategory === "all"
                ? "All Rewards"
                : selectedCategory === "gift-cards"
                  ? "Gift Cards"
                  : selectedCategory === "donations"
                    ? "Donations"
                    : selectedCategory === "eco-products"
                      ? "Eco Products"
                      : "Experiences"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredRewards.map((reward) => (
                <div key={reward.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative">
                    <img
                      src={reward.image || "/placeholder.svg"}
                      alt={reward.title}
                      className="w-full h-48 object-cover"
                    />
                    {reward.new && (
                      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </div>
                    )}
                    {reward.hot && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        HOT
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold mb-2">{reward.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{reward.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="font-bold">{reward.points.toLocaleString()} points</span>
                      <Button
                        className={`${userStats.ecoPoints >= reward.points ? "bg-green-500 hover:bg-green-600" : "bg-gray-300 cursor-not-allowed"}`}
                        disabled={userStats.ecoPoints < reward.points}
                      >
                        Redeem
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

