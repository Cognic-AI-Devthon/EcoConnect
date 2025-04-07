"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  Search,
  ShoppingCart,
  Heart,
  ChevronRight,
  Star,
  Minus,
  Plus,
  Share2,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Sidebar from "@/components/sidebar"

export default function ProductDetailsPage() {
  const params = useParams()
  const { id } = params

  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Mock product data - in a real app, this would come from an API call
  const product = {
    id: Number(id),
    name: "Eco-Friendly Bamboo Water Bottle",
    price: 799,
    originalPrice: 1350,
    discount: 32,
    rating: 4.8,
    reviews: 677,
    stock: 15,
    sku: "ECO-BWB-001",
    description:
      "Stay hydrated sustainably with our 1.5L liter bamboo water bottle—durable, eco-friendly, and stylish for everyday use! Made from 100% natural bamboo exterior with a stainless steel interior to keep your drinks at the perfect temperature.",
    features: [
      "Made from sustainable bamboo",
      "Stainless steel interior",
      "Keeps drinks hot for 12 hours and cold for 24 hours",
      "1.5L capacity",
      "Leak-proof design",
      "BPA-free",
      "Eco-friendly packaging",
    ],
    specifications: {
      Material: "Bamboo exterior, Stainless steel interior",
      Capacity: "1.5L",
      Dimensions: "10 x 10 x 25 cm",
      Weight: "350g",
      "Care Instructions": "Hand wash only, do not microwave",
    },
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    categories: ["Eco-Friendly", "Kitchen", "Water Bottles"],
    tags: ["bamboo", "sustainable", "water bottle", "eco-friendly"],
    relatedProducts: [
      {
        id: 2,
        name: "Stainless Steel Straw Set",
        price: 350,
        image: "/placeholder.svg?height=200&width=200",
        rating: 4.7,
      },
      {
        id: 3,
        name: "Organic Cotton Produce Bags",
        price: 450,
        image: "/placeholder.svg?height=200&width=200",
        rating: 4.5,
      },
      {
        id: 4,
        name: "Bamboo Cutlery Set",
        price: 599,
        image: "/placeholder.svg?height=200&width=200",
        rating: 4.9,
      },
      {
        id: 5,
        name: "Reusable Coffee Cup",
        price: 699,
        image: "/placeholder.svg?height=200&width=200",
        rating: 4.6,
      },
    ],
  }

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const addToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`)
    // In a real app, this would dispatch an action to add the product to the cart
  }

  const addToWishlist = () => {
    console.log(`Added ${product.name} to wishlist`)
    // In a real app, this would dispatch an action to add the product to the wishlist
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
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/marketplace/category/eco-friendly" className="hover:text-green-600">
              Eco-Friendly
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-700 font-medium">{product.name}</span>
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Images */}
              <div>
                <div className="mb-4 h-80 overflow-hidden rounded-lg">
                  <img
                    src={product.images[activeImageIndex] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex space-x-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                        activeImageIndex === index ? "border-green-500" : "border-gray-200"
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : "fill-none"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-green-600">Rs. {product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 text-lg line-through ml-2">Rs. {product.originalPrice}</span>
                  )}
                  {product.discount && (
                    <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-6">{product.description}</p>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Availability:</span>
                    <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
                      {product.stock > 0 ? `In Stock (${product.stock} items)` : "Out of Stock"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">SKU:</span>
                    <span className="text-gray-600">{product.sku}</span>
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <span className="text-gray-700 mr-4">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4 mb-6">
                  <Button
                    onClick={addToCart}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                    disabled={product.stock <= 0}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    onClick={addToWishlist}
                    variant="outline"
                    className="border-green-500 text-green-600 hover:bg-green-50"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <Truck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium text-sm">Free Shipping</span>
                      <p className="text-xs text-gray-500">Free shipping on orders over Rs. 1000</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <RotateCcw className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium text-sm">Easy Returns</span>
                      <p className="text-xs text-gray-500">30-day money-back guarantee</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium text-sm">Secure Checkout</span>
                      <p className="text-xs text-gray-500">SSL/TLS encryption for security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <p className="text-gray-600">{product.description}</p>

                <h3 className="font-bold text-lg mt-6 mb-3">Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="specifications">
                <div className="border rounded-md overflow-hidden">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className={`flex ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                      <div className="w-1/3 p-3 border-r border-gray-200 font-medium">{key}</div>
                      <div className="w-2/3 p-3 text-gray-600">{value}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-lg">Customer Reviews</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : "fill-none"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">Based on {product.reviews} reviews</span>
                    </div>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600 text-white">Write a Review</Button>
                </div>

                <div className="space-y-6">
                  {/* Mock reviews */}
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">John Doe</h4>
                      <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 5 ? "fill-current" : "fill-none"}`} />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      Great product! I've been using it for a week now and I'm very happy with it. The bamboo exterior
                      looks beautiful and the bottle keeps my water cold all day.
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Jane Smith</h4>
                      <span className="text-gray-500 text-sm">1 week ago</span>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-current" : "fill-none"}`} />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      I love that this bottle is eco-friendly and sustainable. It's a bit heavier than I expected, but
                      the quality is excellent. Would recommend!
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Mike Johnson</h4>
                      <span className="text-gray-500 text-sm">2 weeks ago</span>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 5 ? "fill-current" : "fill-none"}`} />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      This water bottle is perfect for my daily hikes. It's durable, keeps my water cold, and I love the
                      sustainable materials. The bamboo exterior is beautiful and gets lots of compliments!
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-6">Related Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {product.relatedProducts.map((relatedProduct) => (
                <Link href={`/marketplace/products/${relatedProduct.id}`} key={relatedProduct.id} className="group">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-1">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(relatedProduct.rating) ? "fill-current" : "fill-none"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <h3 className="font-medium text-sm mb-1 group-hover:text-green-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <span className="text-green-600 font-bold">Rs. {relatedProduct.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
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
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>

            <div className="text-center text-sm text-gray-500 mt-6">© Copyright 2025 - EcoConnect</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

