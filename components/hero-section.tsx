"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/bottle.jpg?height=500&width=800",
  "/river.jpg?height=500&width=800",
  "/elephants.jpeg?height=500&width=800",
  "/oceanplastic.jpg?height=500&width=800",
  "/turtle.png?height=500&width=800",
]

export default function HeroSection() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleClick = () => {
    router.push('/calculator');
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[500px] overflow-hidden bg-green-900">
      <div className="absolute inset-0 flex">
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          From little actions, great revolutions are born.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Track, reduce, and manage your plastic footprint effortlessly with{" "}
          <span className="block">AI-powered tools.</span>
        </p>

        <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full" onClick={handleClick}>
          Get Started
        </Button>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

