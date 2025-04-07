"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Sidebar from "@/components/sidebar"

export default function CheckoutPage() {
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    country: "",
    region: "",
    city: "",
    zipCode: "",
    email: "",
    phone: "",
  })

  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBillingInfo({ ...billingInfo, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would process the order
    console.log("Order submitted:", { billingInfo, shipToDifferentAddress, paymentMethod })
    // Redirect to order confirmation page
    window.location.href = "/marketplace/checkout/success"
  }

  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: "Canon EOS 1500D DSLR Camera Body+ 18-...",
      price: 1299,
      quantity: 1,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Wired Over-Ear Gaming Headphones with U...",
      price: 250,
      quantity: 3,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

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
            <Link href="/marketplace/cart" className="hover:text-green-600">
              Shopping Cart
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
            <span className="text-gray-700 font-medium">Checkout</span>
          </div>

          <h1 className="text-2xl font-bold mb-6">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Billing Information */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="text-lg font-bold mb-4">Billing Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={billingInfo.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={billingInfo.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name (Optional)
                    </label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={billingInfo.companyName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={billingInfo.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={billingInfo.country}
                        onChange={(e) => setBillingInfo({ ...billingInfo, country: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      >
                        <option value="">Select...</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                        Region/State
                      </label>
                      <select
                        id="region"
                        name="region"
                        value={billingInfo.region}
                        onChange={(e) => setBillingInfo({ ...billingInfo, region: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      >
                        <option value="">Select...</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Rajshahi">Rajshahi</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={billingInfo.city}
                        onChange={(e) => setBillingInfo({ ...billingInfo, city: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      >
                        <option value="">Select...</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Rajshahi">Rajshahi</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Zip Code
                    </label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={billingInfo.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={billingInfo.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={billingInfo.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="shipToDifferentAddress"
                      type="checkbox"
                      checked={shipToDifferentAddress}
                      onChange={(e) => setShipToDifferentAddress(e.target.checked)}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="shipToDifferentAddress" className="ml-2 block text-sm text-gray-700">
                      Ship into different address
                    </label>
                  </div>
                </div>

                {/* Payment Option */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="text-lg font-bold mb-4">Payment Option</h2>

                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 mr-2 text-green-500"
                        >
                          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                          <circle cx="12" cy="12" r="2"></circle>
                          <path d="M6 12h.01M18 12h.01"></path>
                        </svg>
                        Cash on Delivery
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="venmo" id="venmo" />
                      <Label htmlFor="venmo" className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 mr-2 text-blue-500"
                        >
                          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                          <path d="M12 12v.01"></path>
                          <path d="M9 12v.01"></path>
                          <path d="M15 12v.01"></path>
                        </svg>
                        Venmo
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 mr-2 text-blue-700"
                        >
                          <path d="M7 11l5-5 5 5"></path>
                          <path d="M12 6v12"></path>
                        </svg>
                        Paypal
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="amazon" id="amazon" />
                      <Label htmlFor="amazon" className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 mr-2 text-yellow-500"
                        >
                          <path d="M4 10h12"></path>
                          <path d="M4 14h9"></path>
                          <path d="M19 6v12"></path>
                        </svg>
                        Amazon Pay
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 mr-2 text-gray-600"
                        >
                          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                          <line x1="1" y1="10" x2="23" y2="10"></line>
                        </svg>
                        Debit/Credit Card
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit-card" && (
                    <div className="mt-4 space-y-4">
                      <div>
                        <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">
                          Name on Card
                        </label>
                        <Input id="nameOnCard" />
                      </div>

                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <Input id="cardNumber" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expireDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Expire Date
                          </label>
                          <Input id="expireDate" placeholder="MM/YY" />
                        </div>
                        <div>
                          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                            CVC
                          </label>
                          <Input id="cvc" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Additional Information */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-lg font-bold mb-4">Additional Information</h2>

                  <div>
                    <label htmlFor="orderNotes" className="block text-sm font-medium text-gray-700 mb-1">
                      Order Notes (Optional)
                    </label>
                    <textarea
                      id="orderNotes"
                      rows={4}
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                  <h2 className="text-lg font-bold mb-4">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <div className="relative w-16 h-16 mr-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                          <span className="absolute -top-2 -right-2 bg-gray-200 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium line-clamp-2">{item.name}</h3>
                          <p className="text-sm text-gray-500">${item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 border-t pt-4 mb-6">
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
                    <div className="border-t pt-2 flex justify-between">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-green-600">${total.toFixed(2)} USD</span>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                    PLACE ORDER
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

