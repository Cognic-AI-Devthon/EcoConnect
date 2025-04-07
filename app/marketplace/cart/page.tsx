"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Heart, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/sidebar"

export default function ShoppingCartPage() {
  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 70,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: 250,
      quantity: 3,
      image: "/placeholder.svg?height=100&width=100",
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const discount = 24
  const tax = 61.99
  const total = subtotal + shipping - discount + tax

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
                {cartItems.length}
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
            <span className="text-gray-700 font-medium">Shopping Cart</span>
          </div>

          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="mb-4">
                <ShoppingCart className="h-16 w-16 mx-auto text-gray-300" />
              </div>
              <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
              <Link href="/marketplace">
                <Button className="bg-green-500 hover:bg-green-600 text-white">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-600">PRODUCTS</th>
                        <th className="text-center p-4 font-medium text-gray-600">PRICE</th>
                        <th className="text-center p-4 font-medium text-gray-600">QUANTITY</th>
                        <th className="text-center p-4 font-medium text-gray-600">SUB-TOTAL</th>
                        <th className="p-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200">
                          <td className="p-4">
                            <div className="flex items-center">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="w-16 h-16 object-contain mr-4"
                              />
                              <span className="font-medium">{item.name}</span>
                            </div>
                          </td>
                          <td className="p-4 text-center">${item.price}</td>
                          <td className="p-4">
                            <div className="flex items-center justify-center">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 rounded-full hover:bg-gray-100"
                              >
                                <Minus className="h-4 w-4 text-gray-600" />
                              </button>
                              <span className="mx-3">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 rounded-full hover:bg-gray-100"
                              >
                                <Plus className="h-4 w-4 text-gray-600" />
                              </button>
                            </div>
                          </td>
                          <td className="p-4 text-center font-medium">${(item.price * item.quantity).toFixed(2)}</td>
                          <td className="p-4 text-center">
                            <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between mt-6">
                  <Link href="/marketplace">
                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                      RETURN TO SHOP
                    </Button>
                  </Link>
                  <Button
                    onClick={() => setCartItems([])}
                    variant="outline"
                    className="border-red-500 text-red-600 hover:bg-red-50"
                  >
                    CLEAR CART
                  </Button>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-lg font-bold mb-4">Card Totals</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sub-total</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount</span>
                      <span className="font-medium">-${discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-green-600">${total.toFixed(2)} USD</span>
                    </div>
                  </div>

                  <Link href="/marketplace/checkout">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">PROCEED TO CHECKOUT</Button>
                  </Link>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                  <h2 className="text-lg font-bold mb-4">Coupon Code</h2>
                  <div className="flex">
                    <Input
                      type="text"
                      placeholder="Email address"
                      className="rounded-r-none focus-visible:ring-green-500"
                    />
                    <Button className="rounded-l-none bg-blue-500 hover:bg-blue-600 text-white">APPLY COUPON</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

