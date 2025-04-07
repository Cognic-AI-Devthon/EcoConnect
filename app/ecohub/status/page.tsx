"use client"

import { useState } from "react"
import Link from "next/link"
import { Info, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import EcoHubTabs from "@/components/ecohub-tabs"

export default function StatusPage() {
  const [streakProtection, setStreakProtection] = useState(true)

  const userStats = {
    name: "Nishan",
    level: 2,
    availablePoints: 19461,
    autoRedeem: "-",
    todaysPoints: 150,
    streakCount: 179,
    lifetimePointsEarned: 30376,
    lifetimePointsRedeemed: 10915,
  }

  const badges = [
    {
      id: 1,
      name: "1997",
      description: "Joined in 1997",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-red-500",
    },
    {
      id: 2,
      name: "888",
      description: "Lucky number",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "7",
      description: "7 day streak",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-blue-400",
    },
    {
      id: 4,
      name: "30",
      description: "30 day streak",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-orange-500",
    },
    {
      id: 5,
      name: "SWEET HEART",
      description: "Donated to charity",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-pink-400",
    },
  ]

  const progressItems = [
    {
      id: 1,
      title: "Go for your goal",
      description: "You're on the way to Singer Sri Lanka Gift Card Rs5000. Keep up the earnings!",
      image: "/placeholder.svg?height=100&width=100",
      progress: "19,461 / 21,000 points",
      link: {
        text: "Learn more",
        url: "#",
      },
      color: "bg-red-500",
    },
    {
      id: 2,
      title: "Your points breakdown",
      description: "See your earning progress",
      image: "/placeholder.svg?height=100&width=100",
      link: {
        text: "See points breakdown",
        url: "#",
      },
      color: "bg-yellow-500",
    },
    {
      id: 3,
      title: "Your longest streak: 179",
      description: "You've earned 1,790 bonus points for completing daily sets and earning points.",
      image: "/placeholder.svg?height=100&width=100",
      link: {
        text: "Go to daily set",
        url: "#",
      },
      color: "bg-amber-500",
    },
    {
      id: 4,
      title: "Your goal is within reach",
      description: "You're more halfway there. Start earning to reach your goal!",
      image: "/placeholder.svg?height=100&width=100",
      link: {
        text: "Earn now",
        url: "#",
      },
      color: "bg-gray-800",
    },
  ]

  const recentRewards = [
    {
      id: 1,
      title: "$1 in points donated",
      description: "Thanks for your generosity. You've made an impact by donating to a non-profit.",
      image: "/placeholder.svg?height=100&width=100",
      link: {
        text: "Visit donation page",
        url: "#",
      },
    },
    {
      id: 2,
      title: "$2500 in gift cards redeemed",
      description: "You've redeemed a gift card.",
      image: "/placeholder.svg?height=100&width=100",
      link: {
        text: "Get more",
        url: "#",
      },
    },
    {
      id: 3,
      title: "Play to win",
      description: "Redeem for a chance to win great prizes.",
      image: "/placeholder.svg?height=100&width=100",
      link: {
        text: "Try your luck",
        url: "#",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="flex-1">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-200">
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
                  <span className="text-2xl font-bold">{userStats.availablePoints.toLocaleString()}</span>
                </div>
                <div className="mt-2">
                  <Link href="/ecohub/redeem" className="text-sm text-blue-600 hover:underline">
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
                <div className="mt-2 flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Streak protection</span>
                  <Switch
                    checked={streakProtection}
                    onCheckedChange={setStreakProtection}
                    className="data-[state=checked]:bg-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <EcoHubTabs activeTab="status" />

        {/* Main content */}
        <div className="max-w-6xl mx-auto p-6">
          {/* Lifetime stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-2">{userStats.lifetimePointsEarned.toLocaleString()}</h2>
              <p className="text-gray-600">Lifetime points earned</p>

              <div className="mt-4">
                <img src="/placeholder.svg?height=150&width=200" alt="Points earned" className="h-32 object-contain" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-16 w-16 text-gray-400"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <h2 className="text-xl font-bold mb-1">Level {userStats.level}</h2>
              <p className="text-gray-600">Level {userStats.level} through April</p>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-2">{userStats.lifetimePointsRedeemed.toLocaleString()}</h2>
              <p className="text-gray-600">Lifetime points redeemed</p>

              <div className="mt-4">
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Points redeemed"
                  className="h-32 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Your badges</h2>
            <p className="text-center text-gray-600 mb-6">
              Congrats! You've earned 5 badges. Check out the other badges you can unlock.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {badges.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 ${badge.color} rounded-lg flex items-center justify-center text-white mb-2`}
                  >
                    <span className="font-bold text-sm">{badge.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button className="bg-blue-500 hover:bg-blue-600">See available badges</Button>
            </div>

            <div className="flex justify-center mt-4 text-sm text-gray-600">
              <span className="mr-2">Share with your friends</span>
              <a href="#" className="text-blue-600 mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-blue-400 mx-1">
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
            </div>
          </div>

          {/* Your progress */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Your
              <br />
              progress
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {progressItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center text-white mr-4`}
                    >
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {item.progress && (
                    <div className="mb-4">
                      <div className="h-2 bg-gray-200 rounded-full mb-1">
                        <div className="h-2 bg-blue-500 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                      <div className="text-xs text-gray-600">{item.progress}</div>
                    </div>
                  )}

                  <div className="text-right">
                    <Link
                      href={item.link.url}
                      className="text-sm text-blue-600 hover:underline flex items-center justify-end"
                    >
                      {item.link.text} <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent rewards */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Your recent rewards</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentRewards.map((reward) => (
                <div key={reward.id} className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center">
                  <div className="mb-4">
                    <img
                      src={reward.image || "/placeholder.svg"}
                      alt={reward.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>

                  <h3 className="font-bold text-center mb-2">{reward.title}</h3>
                  <p className="text-sm text-gray-600 text-center mb-4">{reward.description}</p>

                  <Link href={reward.link.url} className="text-sm text-blue-600 hover:underline">
                    {reward.link.text} <ChevronRight className="h-4 w-4 inline ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <Button className="bg-blue-500 hover:bg-blue-600">
              See your redemption history <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

