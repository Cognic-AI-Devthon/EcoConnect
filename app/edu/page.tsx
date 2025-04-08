"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EduVideo } from "../../types/eduVideo"
import { getAllEduVideos } from "../../lib/db/eduVideos"

export default function EduHub() {
  const [isVisible, setIsVisible] = useState(false)
  const bottleRef = useRef<HTMLDivElement>(null)
  const [ecoVideos, setEcoVideos] = useState<EduVideo[]>([])

  useEffect(() => {
    setIsVisible(true)
    initializeData()

    // Floating animation for the bottle
    const bottle = bottleRef.current
    if (bottle) {
      let position = 0
      let direction = 1
      const floatAnimation = () => {
        if (position > 20) direction = -1
        if (position < 0) direction = 1
        position += 0.2 * direction
        if (bottle) bottle.style.transform = `translateY(${position}px) rotate(5deg)`
        requestAnimationFrame(floatAnimation)
      }

      const animationId = requestAnimationFrame(floatAnimation)
      return () => cancelAnimationFrame(animationId)
    }
  }, [])

  const initializeData = async () => {
    try {
      const data = await getAllEduVideos()
      setEcoVideos(data)
    }
    catch (error) {
      console.error('Error fetching data:', error)
    } finally {

    }
  }

  const featuredArticles = [
    {
      id: "from-streets-to-lake",
      title: "From Town Streets to Lake Depths: How Plastic Finds Its Way",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Tracing the journey of plastic waste from urban areas to our precious water bodies.",
      slug: "from-streets-to-lake",
    },
    {
      id: "natures-cry",
      title: "Nature's Cry: The Devastating Impact of Plastic Pollution",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Exploring how plastic pollution is affecting wildlife and ecosystems worldwide.",
      slug: "natures-cry-plastic-pollution",
    },
    {
      id: "breaking-plastic-habit",
      title: "Breaking the Plastic Habit: Converting Paying the Price to a Sustainable Lifestyle",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Practical steps to reduce your plastic consumption and live more sustainably.",
      slug: "breaking-plastic-habit",
    },
    {
      id: "reinventing-packaging",
      title: "Reinventing Packaging: The Rise of Plastic-Free Alternatives",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Innovative solutions that are replacing traditional plastic packaging.",
      slug: "reinventing-packaging",
    },
    {
      id: "invisible-intruder",
      title: "Invisible Intruder: Microplastics in Our Food Chain",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "How tiny plastic particles are making their way into what we eat and drink.",
      slug: "invisible-intruder-microplastics",
    },
  ]

  // const ecoVideos = [
  //   {
  //     id: "video1",
  //     title: "From Town Streets to Lake Depths",
  //     subtitle: "How Plastic Finds Its Way",
  //     thumbnail: "/placeholder.svg?height=200&width=300",
  //   },
  //   {
  //     id: "video2",
  //     title: "From Town Streets to Lake Depths",
  //     subtitle: "How Plastic Finds Its Way",
  //     thumbnail: "/placeholder.svg?height=200&width=300",
  //   },
  //   {
  //     id: "video3",
  //     title: "From Town Streets to Lake Depths",
  //     subtitle: "How Plastic Finds Its Way",
  //     thumbnail: "/placeholder.svg?height=200&width=300",
  //   },
  //   {
  //     id: "video4",
  //     title: "From Town Streets to Lake Depths",
  //     subtitle: "How Plastic Finds Its Way",
  //     thumbnail: "/placeholder.svg?height=200&width=300",
  //   },
  // ]

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <main className="flex-1">
        {/* Hero Section with Animated Bottle */}
        <section className="relative h-[500px] bg-black overflow-hidden">
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="absolute top-[15%] left-[10%] z-10">
              <h1 className="text-[80px] font-bold text-[#e6ff00] leading-none">2050</h1>
              <p className="text-white text-2xl max-w-md">
                Plastic may <span className="bg-[#e6ff00] text-black px-1">outweigh fish</span> in the ocean
              </p>
            </div>

            <div
              ref={bottleRef}
              className="absolute right-[15%] transition-transform duration-500 ease-in-out"
              style={{ transform: "translateY(0) rotate(5deg)" }}
            >
              <img
                src="/placeholder.svg?height=400&width=200"
                alt="Plastic bottle floating"
                className="h-[400px] w-auto opacity-70"
              />
            </div>

            <div className="absolute bottom-[15%] right-[10%] z-10">
              <h2 className="text-[#e6ff00] text-5xl font-bold mb-2">8 Million tons</h2>
              <p className="text-white text-xl text-right">
                of plastic entering the ocean
                <br />
                every year.
              </p>
            </div>
          </div>
        </section>

        {/* Plastic Journey Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#e6ff00] mb-2">FROM HANDS TO OCEAN:</h2>
              <h3 className="text-xl mb-6">THE JOURNEY OF A PLASTIC BAG</h3>
              <p className="mb-6 text-gray-300">
                How one plastic bag turned into a problem for our seas and the incredible work trying to fix it
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white">LEARN MORE</Button>
            </div>
            <div className="relative h-[300px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Plastic journey visualization"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Daily Eco Quiz */}
        <section className="py-12 container mx-auto px-6">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/placeholder.svg?height=100&width=100" alt="Eco Quiz Mascots" className="h-24 w-auto mr-6" />
              <div>
                <h2 className="text-blue-600 text-2xl font-bold">
                  TAKE TODAY'S
                  <br />
                  ECO QUIZ!
                </h2>
                <p className="text-gray-600">Test your knowledge and learn something new every day!</p>
              </div>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8">START QUIZ</Button>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12 container mx-auto px-6">
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 mr-3">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600">
                <path d="M14 4V20M4 14L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">
              Featured
              <br />
              writing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.slice(0, 6).map((article) => (
              <Link href={`/edu/blog/${article.slug}`} key={article.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Eco Bites Videos */}
        <section className="py-12 container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="text-gray-800">QUICK</span> <span className="text-green-600">ECO BITES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {ecoVideos.map((video) => {
              // Extract YouTube video ID if it's a YouTube URL
              const getVideoId = (url: string) => {
                if (url.includes('youtube.com/watch?v=')) {
                  return url.split('v=')[1].split('&')[0];
                }
                if (url.includes('youtu.be/')) {
                  return url.split('youtu.be/')[1].split('?')[0];
                }
                return null;
              };

              const videoId = getVideoId(video.url);
              const embedUrl = videoId
                ? `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`
                : video.url;

              return (
                <div key={video.id} className="relative group">
                  <div className="relative h-48 overflow-hidden rounded-lg bg-gray-200">
                    {videoId ? (
                      <iframe
                        src={embedUrl}
                        title={video.title}
                        className="w-full h-full object-cover"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      // Fallback for non-YouTube videos
                      <iframe
                        src={video.url}
                        title={video.title}
                        className="w-full h-full object-cover"
                        frameBorder="0"
                        allowFullScreen
                      />
                    )}

                    {/* Play button overlay (hidden when using iframe) */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                        <Play className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-sm font-medium">{video.title}</h3>
                    {video.duration && (
                      <p className="text-xs text-gray-500">
                        {Math.floor(video.duration / 60)}:{String(video.duration % 60).padStart(2, '0')}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dual Info Sections */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div
              className="relative h-[400px] bg-cover bg-center"
              style={{ backgroundImage: "url('/placeholder.svg?height=400&width=600')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-70 p-12 flex flex-col items-center justify-center text-center">
                <h2 className="text-white text-2xl font-bold mb-4">
                  THE INVISIBLE CRISIS:
                  <br />
                  MICROPLASTICS AND OUR PLANET
                </h2>
                <p className="text-gray-300 mb-6 max-w-md">
                  Microplastics are tiny particles that invisibly alter our oceans, air, and food. These microscopic
                  invaders have global impact and solutions to this crisis require immediate action.
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-white">LEARN MORE</Button>
              </div>
            </div>

            <div
              className="relative h-[400px] bg-cover bg-center"
              style={{ backgroundImage: "url('/placeholder.svg?height=400&width=600')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-70 p-12 flex flex-col items-center justify-center text-center">
                <h2 className="text-white text-2xl font-bold mb-4">
                  THE PLASTIC PERIL:
                  <br />
                  HOW POLLUTION IMPACTS OUR DAILY LIVES
                </h2>
                <p className="text-gray-300 mb-6 max-w-md">
                  Plastic is everywhere in our daily lives, from the food we eat to the air we breathe. Together, we can
                  take action to reduce our plastic footprint and create a cleaner, healthier world.
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-white">LEARN MORE</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-green-100">
          <div className="container mx-auto px-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Newsletter</h2>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
        </section>

        {/* Footer */}
        <footer className="py-8 bg-white border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link href="/" className="text-gray-600 hover:text-green-600">
                Home
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-green-600">
                Community
              </Link>
              <Link href="/edu/blog" className="text-gray-600 hover:text-green-600">
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
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>

            <div className="text-center text-sm text-gray-500 mt-6">© Copyright 2023 - EcoConnect</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

