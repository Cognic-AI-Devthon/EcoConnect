"use client"

import { useState } from "react"
import Link from "next/link"
import { Info, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import EcoHubTabs from "@/components/ecohub-tabs"

export default function EarnPage() {
  const [streakProtection, setStreakProtection] = useState(true)

  const userStats = {
    name: "Nishan",
    level: 2,
    ecoPoints: 19258,
    todaysPoints: 140,
    streakCount: 178,
  }

  const dailyChallenges = [
    {
      id: 1,
      title: "Carry a Reusable Bag",
      description: "Say goodbye to single-use bags—go reusable!",
      points: 10,
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      title: "Skip Plastic Straws",
      description: "Choose metal, bamboo, or paper alternatives.",
      points: 10,
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      title: "Answer Daily Quiz",
      description: "Discover how well you know Eco Facts!",
      points: 10,
      icon: "/placeholder.svg?height=100&width=100",
    },
  ]

  const moreActivities = [
    {
      id: 1,
      title: "Spread Awareness",
      description: "Share your journey and inspire others",
      points: 5,
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      title: "Attend a Beach Cleanup",
      description: "Help keep our beaches and marine life clean",
      points: 5,
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      title: "Complete this puzzle",
      description: "Arrange the tiles to reveal the image",
      points: 5,
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      title: "Do you know the answer?",
      description: "Challenge yourself with these trivia questions",
      points: 5,
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      title: "Do you know the answer?",
      description: "Test your knowledge on these topics",
      points: 5,
      icon: "/placeholder.svg?height=100&width=100",
    },
  ]

  const suggestedRewards = [
    {
      id: 1,
      title: "Eco Market Gift Card Rs5000",
      points: 21000,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 2,
      title: "Eco Market Gift Card Rs2500",
      points: 10000,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 3,
      title: "Eco Market Gift Card Rs1000",
      points: 5000,
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-blue-50">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Eco points */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-1">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-yellow-600">🏆</span>
                  </div>
                  <span className="text-sm text-gray-600">Eco points</span>
                  <button className="ml-1">
                    <Info className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">{userStats.ecoPoints.toLocaleString()}</span>
                </div>
                <div className="mt-2">
                  <Link href="/ecohub/redeem" className="text-sm text-blue-600 hover:underline">
                    Redeem
                  </Link>
                </div>
              </div>

              {/* Today's points */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-1">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-yellow-600">📅</span>
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
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-yellow-600">🔥</span>
                  </div>
                  <span className="text-sm text-gray-600">Streak count</span>
                  <button className="ml-1">
                    <Info className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">{userStats.streakCount}</span>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Streak protection</span>
                  <Switch
                    checked={streakProtection}
                    onCheckedChange={setStreakProtection}
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <EcoHubTabs activeTab="earn" />

        {/* Main content */}
        <div className="max-w-6xl mx-auto p-6">
          {/* Promo banner */}
          <div className="bg-yellow-300 rounded-lg p-6 mb-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-8 z-10">
                <h2 className="text-2xl font-bold mb-2">
                  You've earned enough
                  <br />
                  points to redeem!
                </h2>
                <p className="text-gray-800 mb-4">
                  Shop eco-friendly and save big with exclusive
                  <br />
                  coupons at Eco Market!
                </p>
                <Button className="bg-black hover:bg-gray-800 text-white">Redeem now</Button>
              </div>
              <div className="relative w-40 h-40 md:w-60 md:h-60">
                <img
                  src="/rewards.png?height=360&width=360"
                  alt="Eco Store"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-20 text-yellow-500 text-4xl">✦</div>
            <div className="absolute bottom-8 left-40 text-yellow-500 text-2xl">✦</div>
            <div className="absolute top-1/2 left-1/3 text-blue-500 text-3xl">✦</div>
          </div>

          {/* Daily set */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Daily set</h2>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Streak protection</span>
                <Switch
                  checked={streakProtection}
                  onCheckedChange={setStreakProtection}
                  className="data-[state=checked]:bg-green-500"
                />
                <button className="ml-1">
                  <Info className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-600 mb-2">Go back to today's set</div>
            <div className="text-xs text-blue-600 mb-4">SNEAK PEAK AT TOMORROW'S SET</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dailyChallenges.map((challenge) => (
                <div key={challenge.id} className="bg-white rounded-lg shadow-sm p-4 relative">
                  <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    +{challenge.points}
                  </div>

                  <div className="flex justify-center mb-4">
                    <img
                      src={challenge.icon || "/placeholder.svg"}
                      alt={challenge.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>

                  <h3 className="font-bold text-center mb-2">{challenge.title}</h3>
                  <p className="text-sm text-gray-600 text-center mb-4">{challenge.description}</p>

                  <div className="text-center">
                    <Link href="#" className="text-xs text-blue-600 hover:underline flex items-center justify-center">
                      {challenge.points} points <ChevronRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Streak tracker */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <div className="text-lg font-bold">Current day streak</div>
                  <div className="text-3xl font-bold text-yellow-500">{userStats.streakCount}</div>
                </div>
              </div>

              <div className="flex-1 mx-8 hidden md:block">
                <div className="h-2 bg-gray-200 rounded-full relative">
                  <div className="absolute h-2 bg-yellow-400 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <div className="text-sm text-gray-600">
                  Keep going, <span className="font-bold">6 more days to go</span>
                </div>
                <div className="text-xs text-gray-500">unlocking your 180-point bonus prize</div>
              </div>
            </div>
          </div>

          {/* More activities */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">More activities</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {moreActivities.slice(0, 3).map((activity) => (
                <div key={activity.id} className="bg-white rounded-lg shadow-sm p-4 relative">
                  <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    +{activity.points}
                  </div>

                  <div className="flex justify-center mb-4">
                    <img
                      src={activity.icon || "/placeholder.svg"}
                      alt={activity.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>

                  <h3 className="font-bold text-center mb-2">{activity.title}</h3>
                  <p className="text-sm text-gray-600 text-center mb-4">{activity.description}</p>

                  <div className="text-center">
                    {activity.id === 2 ? (
                      <Link href="#" className="text-xs text-blue-600 hover:underline flex items-center justify-center">
                        Check it out <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    ) : (
                      <Link href="#" className="text-xs text-blue-600 hover:underline flex items-center justify-center">
                        {activity.points} points <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {moreActivities.slice(3).map((activity) => (
                <div key={activity.id} className="bg-white rounded-lg shadow-sm p-4 relative">
                  <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    +{activity.points}
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4">
                      <img
                        src={activity.icon || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-16 h-16 object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{activity.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{activity.description}</p>

                      <Link href="#" className="text-xs text-blue-600 hover:underline flex items-center">
                        {activity.points} points <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Your goal and reward */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-bold mb-4">Your goal</h2>

              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img src="/placeholder.svg?height=80&width=80" alt="Whale" className="w-16 h-16 object-contain" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold">Coupon Card Rs5000</h3>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="font-bold">19,258</span>
                    <span className="text-gray-500">/ 31,000</span>
                  </div>
                  <button className="text-xs text-red-500 mt-1">Remove goal</button>
                </div>
              </div>

              <div className="text-right">
                <Link href="#" className="text-xs text-blue-600 hover:underline flex items-center justify-end">
                  Go to your order history <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-bold mb-4">Your last reward</h2>

              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img src="/placeholder.svg?height=80&width=80" alt="Gift" className="w-16 h-16 object-contain" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold">1000 points donation to Zero-plastic Foundation</h3>
                  <p className="text-sm text-gray-600">1,000 points</p>
                  <p className="text-xs text-gray-500">Ordered on 24/11/2024</p>
                  <p className="text-xs text-gray-500">Order history</p>
                </div>
              </div>
            </div>
          </div>

          {/* Suggested rewards */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Suggested rewards</h2>
              <Link href="/ecohub/redeem" className="text-sm text-blue-600 hover:underline">
                See all rewards
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {suggestedRewards.map((reward) => (
                <div key={reward.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
                  <div className="mb-4">
                    <img
                      src={reward.image || "/placeholder.svg"}
                      alt={reward.title}
                      className="w-32 h-32 object-contain"
                    />
                  </div>

                  <h3 className="font-bold text-center mb-4">{reward.title}</h3>

                  <Link href="#" className="text-xs text-blue-600 hover:underline">
                    Redeem for {reward.points.toLocaleString()} points
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

