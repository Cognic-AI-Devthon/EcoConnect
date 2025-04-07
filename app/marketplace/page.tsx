"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Heart, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MarketplacePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const featuredProducts = [
    {
      id: 1,
      name: "Eco-Friendly Bamboo Water Bottle",
      price: 799,
      originalPrice: 1350,
      rating: 4.8,
      reviews: 677,
      image: "/placeholder.svg?height=300&width=300",
      discount: 32,
      isHot: true,
      description:
        "Stay hydrated sustainably with our 1.5L liter bamboo water bottle—durable, eco-friendly, and stylish for everyday use!",
    },
    {
      id: 2,
      name: "Wooden Cutting Board",
      price: 520,
      originalPrice: null,
      rating: 4.9,
      reviews: 245,
      image: "/placeholder.svg?height=300&width=300",
      soldOut: false,
      description: "Handcrafted wooden cutting board made from sustainable materials",
    },
    {
      id: 3,
      name: "Eco-Friendly Spiral Notebooks, 100% Recycled",
      price: 450,
      originalPrice: 580,
      rating: 4.7,
      reviews: 132,
      image: "/placeholder.svg?height=300&width=300",
      discount: 10,
      description: "100% recycled paper notebooks with spiral binding, perfect for notes and journaling",
    },
    {
      id: 4,
      name: "Cutting Board Large Nulkin Serving Board with handles",
      price: 1200,
      originalPrice: null,
      rating: 4.6,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium wooden cutting board with handles for easy serving",
    },
    {
      id: 5,
      name: "Disposable Garbage Bags - 20 Pcs",
      price: 199,
      originalPrice: null,
      rating: 4.5,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      description: "Biodegradable garbage bags, environmentally friendly alternative to plastic",
    },
    {
      id: 6,
      name: '18" x 12" Bamboo Tea Set Mat Non-Slip Table Decor Mat',
      price: 660,
      originalPrice: null,
      rating: 4.8,
      reviews: 78,
      image: "/placeholder.svg?height=300&width=300",
      isHot: true,
      description: "Elegant bamboo tea set mat, perfect for serving tea and protecting your table",
    },
    {
      id: 7,
      name: "Women's Midi Plain Long Sleeve 100% Cotton Dresses",
      price: 950,
      originalPrice: 1350,
      rating: 4.7,
      reviews: 211,
      image: "/placeholder.svg?height=300&width=300",
      discount: 32,
      description: "Comfortable and stylish midi dresses made from 100% organic cotton",
    },
  ]

  const categories = [
    { name: "Home & Living", icon: "/placeholder.svg?height=80&width=80" },
    { name: "Personal Care & Beauty", icon: "/placeholder.svg?height=80&width=80" },
    { name: "Clothing & Accessories", icon: "/placeholder.svg?height=80&width=80" },
    { name: "Office & School Supplies", icon: "/placeholder.svg?height=80&width=80" },
    { name: "Outdoor & Travel Essentials", icon: "/placeholder.svg?height=80&width=80" },
    { name: "Toys & Kids' Items", icon: "/placeholder.svg?height=80&width=80" },
  ]

  const flashSaleItems = [
    { name: "Bamboo Water Bottle", price: 549, image: "/placeholder.svg?height=80&width=80" },
    { name: "Kitchen household bottle", price: 349, image: "/placeholder.svg?height=80&width=80" },
    { name: "Wooden Cutting Board - 7 inch", price: 629, image: "/placeholder.svg?height=80&width=80" },
    { name: "Paper coffee cups -30pack", price: 459, image: "/placeholder.svg?height=80&width=80" },
  ]

  const bestSellers = [
    { name: 'Accessories Box - 12" x 15"', price: 899, image: "/placeholder.svg?height=80&width=80" },
    { name: "Tea Setup -5 cups & 1 pot", price: 1990, image: "/placeholder.svg?height=80&width=80" },
    { name: "Unisex Baby Garment", price: 549, image: "/placeholder.svg?height=80&width=80" },
    { name: "Women Hand Bag", price: 999, image: "/placeholder.svg?height=80&width=80" },
  ]

  const topRated = [
    { name: "Toy -Wooden plane", price: 399, image: "/placeholder.svg?height=80&width=80" },
    { name: "Disposable Bags -300 pack", price: 599, image: "/placeholder.svg?height=80&width=80" },
    { name: "Spray Bottle -Wooden", price: 299, image: "/placeholder.svg?height=80&width=80" },
    { name: 'Cutting Board -8"x10"', price: 399, image: "/placeholder.svg?height=80&width=80" },
  ]

  const banners = [
    {
      title: "Eco-Friendly Tote Bags",
      subtitle: "SUMMER SALES",
      discount: "30% OFF",
      buttonText: "SHOP NOW",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Sustainable Kitchen Products",
      subtitle: "NEW ARRIVALS",
      discount: "20% OFF",
      buttonText: "DISCOVER NOW",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Organic Cotton Clothing",
      subtitle: "LIMITED OFFER",
      discount: "25% OFF",
      buttonText: "SHOP COLLECTION",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
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
          {/* Hero Banner */}
          <div className="relative h-[300px] bg-black rounded-lg overflow-hidden mb-8">
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
              style={{ backgroundImage: `url(${banners[currentSlide].image})`, opacity: 0.7 }}
            ></div>

            <div className="absolute inset-0 flex flex-col justify-center p-8">
              <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded inline-block mb-2 w-fit">
                {banners[currentSlide].discount}
              </div>
              <div className="text-yellow-400 text-sm font-medium mb-2">{banners[currentSlide].subtitle}</div>
              <h2 className="text-white text-3xl font-bold mb-4">{banners[currentSlide].title}</h2>
              <Button className="bg-green-500 hover:bg-green-600 text-white w-fit">
                {banners[currentSlide].buttonText} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
            >
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
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
            >
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
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-green-500"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">FASTED DELIVERY</h3>
                <p className="text-xs text-gray-500">Delivery in 24-72 h</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-green-500"
                >
                  <polyline points="17 1 21 5 17 9"></polyline>
                  <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                  <polyline points="7 23 3 19 7 15"></polyline>
                  <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">24 HOURS RETURN</h3>
                <p className="text-xs text-gray-500">100% money back guarantee</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-green-500"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">SECURE PAYMENT</h3>
                <p className="text-xs text-gray-500">Buy with peace of mind</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-green-500"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">SUPPORT 24/7</h3>
                <p className="text-xs text-gray-500">Live support specialist</p>
              </div>
            </div>
          </div>

          {/* Best Deals */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Best Deals</h2>
              <Link
                href="/marketplace/products"
                className="text-green-500 hover:text-green-600 text-sm flex items-center"
              >
                Browse All Product <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 4).map((product) => (
                <Link href={`/marketplace/products/${product.id}`} key={product.id} className="group">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.discount && (
                        <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                          {product.discount}% OFF
                        </div>
                      )}
                      {product.isHot && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          HOT
                        </div>
                      )}
                      {product.soldOut && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="text-white font-bold">SOLD OUT</span>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <div className="flex items-center mb-1">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className={`h-4 w-4 ${i >= Math.floor(product.rating) ? "text-gray-300" : ""}`}
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                      </div>

                      <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>

                      <div className="flex items-baseline">
                        <span className="text-green-600 font-bold">Rs. {product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-400 text-sm line-through ml-2">Rs. {product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Shop with Categories */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-center mb-8">Shop with Categories</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Link
                  href={`/marketplace/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                  key={index}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mb-2">
                      <img
                        src={category.icon || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-sm font-medium group-hover:text-green-600 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Product Sections */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-sm mb-4 pb-2 border-b">FLASH SALE TODAY</h3>
              <div className="space-y-4">
                {flashSaleItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-16 h-16 mr-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium mb-1">{item.name}</h4>
                      <span className="text-green-600 font-bold text-sm">Rs. {item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-sm mb-4 pb-2 border-b">BEST SELLERS</h3>
              <div className="space-y-4">
                {bestSellers.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-16 h-16 mr-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium mb-1">{item.name}</h4>
                      <span className="text-green-600 font-bold text-sm">Rs. {item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-sm mb-4 pb-2 border-b">TOP RATED</h3>
              <div className="space-y-4">
                {topRated.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-16 h-16 mr-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium mb-1">{item.name}</h4>
                      <span className="text-green-600 font-bold text-sm">Rs. {item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-sm mb-4 pb-2 border-b">NEW ARRIVAL</h3>
              <div className="space-y-4">
                {flashSaleItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-16 h-16 mr-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium mb-1">{item.name}</h4>
                      <span className="text-green-600 font-bold text-sm">Rs. {item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-green-100 rounded-lg p-8 mb-12">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-xl font-bold mb-2">Newsletter</h2>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter to get updates on our latest offers!</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors">
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
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white py-8 border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link href="/" className="text-gray-600 hover:text-green-600">
                Home
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-green-600">
                Community
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-green-600">
                Blog
              </Link>
              <Link href="/about-us" className="text-gray-600 hover:text-green-600">
                About us
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-green-600">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-green-600">
                Contact
              </Link>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13\

