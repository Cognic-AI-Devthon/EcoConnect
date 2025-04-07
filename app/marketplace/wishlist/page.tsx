"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Heart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"

export default function WishlistPage() {
  // Mock wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Bose Sport Earbuds- Wireless Earphones- Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
      price: 699,
      originalPrice: 1299,
      image: "/placeholder.svg?height=100&width=100",
      inStock: true,
    },
    {
      id: 2,
      name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
      price: 2300,
      originalPrice: null,
      image: "/placeholder.svg?height=100&width=100",
      inStock: true,
    },
    {
      id: 3,
      name: "Portable Welding Machine, 110a capacity Model 18NMFIAM",
      price: 970,
      originalPrice: null,
      image: "/placeholder.svg?height=100&width=100",
      inStock: true,
    },
    {
      id: 4,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear",
      price: 220,
      originalPrice: 250,
      image: "/placeholder.svg?height=100&width=100",
      inStock: false,
    },
    {
      id: 5,
      name: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera with Color Night Vision, 2-Way Audio",
      price: 1499.99,
      originalPrice: null,
      image: "/placeholder.svg?height=100&width=100",
      inStock: true,
    },
  ])

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
  }

  const addToCart = (id: number) => {
    console.log(`Added item ${id} to cart`)
    // In a real app, this would dispatch an action to add the item to the cart
  }

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      

      <div className="flex-1">
        {/* Header */}
        <div className="bg-green-500 py-3 px-6 flex items-center justify-between">
          <Link href="/marketplace" className="flex items-center text-white font-bold text-xl">
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
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            Eco Market
          </Link>

          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full py-2 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/marketplace/cart" className="relative text-white">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-white text-green-500 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                2
              </span>
            </Link>
            <Link href="/marketplace/wishlist" className="text-white">
              <Heart className="h-6 w-6" />
            </Link>
            <Link href="/marketplace/account" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
          </div>
        </div>

        <div className="p-6">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link href="/marketplace" className="hover:text-green-600">
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mx-2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <span className="text-gray-700 font-medium">Wishlist</span>
          </div>

          <h1 className="text-2xl font-bold mb-6">Wishlist</h1>

          {wishlistItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="mb-4">
                <Heart className="h-16 w-16 mx-auto text-gray-300" />
              </div>
              <h2 className="text-xl font-bold mb-2">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any products to your wishlist yet.</p>
              <Link href="/marketplace">
                <Button className="bg-green-500 hover:bg-green-600 text-white">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-600">PRODUCTS</th>
                    <th className="text-center p-4 font-medium text-gray-600">PRICE</th>
                    <th className="text-center p-4 font-medium text-gray-600">STOCK STATUS</th>
                    <th className="text-center p-4 font-medium text-gray-600">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200">
                      <td className="p-4">
                        <div className="flex items-center">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-contain mr-4"
                          />
                          <Link href={`/marketplace/products/${item.id}`} className="font-medium hover:text-green-600">
                            {item.name}
                          </Link>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        {item.originalPrice ? (
                          <div>
                            <span className="font-bold text-green-600">${item.price}</span>
                            <span className="text-gray-400 line-through ml-2">${item.originalPrice}</span>
                          </div>
                        ) : (
                          <span className="font-bold text-green-600">${item.price}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            item.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.inStock ? "IN STOCK" : "OUT OF STOCK"}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center space-x-2">
                          <Button
                            onClick={() => addToCart(item.id)}
                            className="bg-green-500 hover:bg-green-600 text-white"
                            disabled={!item.inStock}
                          >
                            ADD TO CARD
                          </Button>
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="p-2 text-gray-500 hover:text-red-500"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

