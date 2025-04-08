"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Twitter, Linkedin, Facebook } from "lucide-react"
import Sidebar from "@/components/sidebar"
import { getBlogPostById } from "../../../../lib/db/blog"

// Mock blog data - in a real app, this would come from a CMS or API
// const blogPosts = [
//   {
//     slug: "invisible-intruder-microplastics",
//     title: "Invisible Intruder: Microplastics in Our Food Chain",
//     date: "July 4th, 2024",
//     author: {
//       name: "Landon Brand",
//       role: "Research Scientist",
//       avatar: "/placeholder.svg?height=50&width=50",
//     },
//     image: "/placeholder.svg?height=400&width=800",
//     content: [
//       {
//         type: "paragraph",
//         content:
//           "Microplastics, tiny particles smaller than 5mm, are silently making their way into our food chain. The journey of these particles is causing growing concern, and here's why we should pay attention.",
//       },
//       {
//         type: "heading",
//         content: "Becoming a Public Benefit Corporation",
//       },
//       {
//         type: "paragraph",
//         content:
//           "Microplastics are fragments of larger plastic objects that break down over time. These particles originate from everyday items like plastic bottles, bags, and packaging. Once these plastics start to degrade, they can spread through air, water, and soil, infiltrating our natural environments.",
//       },
//       {
//         type: "heading",
//         content: "How Microplastics Enter Our Food Chain",
//       },
//       {
//         type: "callout",
//         content:
//           "The scary part? Microplastics are showing up in the foods we consume every day, like seafood, salt, honey, and even drinking water.",
//       },
//       {
//         type: "paragraph",
//         content:
//           "As marine life and animals ingest these particles, they can enter our diets without us even knowing. Though research is still ongoing, scientists are concerned about the potential risks. These particles could carry harmful chemicals that may affect our health in ways we don't yet fully understand, from immune system issues to reproductive problems.",
//       },
//       {
//         type: "heading",
//         content: "Health Risks of Microplastics",
//       },
//       {
//         type: "paragraph",
//         content:
//           "Although research is still ongoing, the potential risks are concerning. Microplastics can carry harmful chemicals, which may have adverse effects on our immune system, reproductive health, and other aspects of our well-being.",
//       },
//       {
//         type: "callout",
//         content:
//           "The long-term impact of ingesting these particles remains uncertain, but scientists warn against the possible dangers.",
//       },
//       {
//         type: "heading",
//         content: "What Can We Do About It?",
//       },
//       {
//         type: "paragraph",
//         content:
//           "This invisible threat calls for action. Reducing our dependence on plastics, improving recycling systems, and raising awareness about the dangers of plastic pollution can help reduce the amount of microplastics in our food chain. By taking these steps, we can protect our health and the environment for future generations.",
//       },
//       {
//         type: "paragraph",
//         content:
//           "Let's work together to reduce plastic waste and stop microplastics from becoming a permanent part of our food chain.",
//       },
//     ],
//   },
//   {
//     slug: "from-streets-to-lake",
//     title: "From Town Streets to Lake Depths: How Plastic Finds Its Way",
//     date: "June 28th, 2024",
//     author: {
//       name: "Maya Johnson",
//       role: "Environmental Journalist",
//       avatar: "/placeholder.svg?height=50&width=50",
//     },
//     image: "/placeholder.svg?height=400&width=800",
//     content: [
//       {
//         type: "paragraph",
//         content:
//           "Have you ever wondered how a plastic wrapper discarded on a city street ends up in a remote lake or ocean? The journey is both fascinating and alarming, revealing the interconnectedness of our ecosystems and the far-reaching impact of our everyday actions.",
//       },
//     ],
//   },
//   {
//     slug: "natures-cry-plastic-pollution",
//     title: "Nature's Cry: The Devastating Impact of Plastic Pollution",
//     date: "June 15th, 2024",
//     author: {
//       name: "Dr. Samuel Chen",
//       role: "Marine Biologist",
//       avatar: "/placeholder.svg?height=50&width=50",
//     },
//     image: "/placeholder.svg?height=400&width=800",
//     content: [
//       {
//         type: "paragraph",
//         content:
//           "From entangled sea turtles to birds with stomachs full of plastic debris, the evidence of plastic pollution's impact on wildlife is heartbreaking and undeniable. This article explores the devastating effects plastic is having on ecosystems worldwide.",
//       },
//     ],
//   },
//   {
//     slug: "breaking-plastic-habit",
//     title: "Breaking the Plastic Habit: Converting Paying the Price to a Sustainable Lifestyle",
//     date: "May 30th, 2024",
//     author: {
//       name: "Olivia Martinez",
//       role: "Sustainability Coach",
//       avatar: "/placeholder.svg?height=50&width=50",
//     },
//     image: "/placeholder.svg?height=400&width=800",
//     content: [
//       {
//         type: "paragraph",
//         content:
//           "Breaking free from plastic dependency isn't just good for the planet—it can be liberating for you too. This guide provides practical, achievable steps to reduce your plastic consumption and transition to a more sustainable lifestyle.",
//       },
//     ],
//   },
//   {
//     slug: "reinventing-packaging",
//     title: "Reinventing Packaging: The Rise of Plastic-Free Alternatives",
//     date: "May 18th, 2024",
//     author: {
//       name: "James Wilson",
//       role: "Innovation Researcher",
//       avatar: "/placeholder.svg?height=50&width=50",
//     },
//     image: "/placeholder.svg?height=400&width=800",
//     content: [
//       {
//         type: "paragraph",
//         content:
//           "From mushroom-based packaging to edible wrappers, innovative companies are revolutionizing how products are packaged. Discover the cutting-edge alternatives that are helping reduce our reliance on plastic packaging.",
//       },
//     ],
//   },
// ]

export default function BlogPost() {
  const params = useParams()
  const { slug } = params
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    initializeData()
  }, [slug])

  const initializeData = async () => {
    setLoading(true)
    const res = await getBlogPostById(slug as string)
    setPost(res)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen bg-[#f5f5f5]">
        {/* <Sidebar /> */}
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-64 bg-gray-200 rounded mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex min-h-screen bg-[#f5f5f5]">
        {/* <Sidebar /> */}
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
            <Link href="/edu" className="text-green-600 hover:underline">
              Return to EduHub
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">

      <main className="flex-1">
        <div className="p-6">
          <div className="max-w-3xl mx-auto">
            <Link href="/edu" className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>

            <div className="mb-8">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto rounded-lg mb-6" />

              <div className="text-gray-500 text-sm mb-2">{post.date}</div>

              <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <img
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium">{post.author}</div>
                    <div className="text-sm text-gray-500">{post.author.role}</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Twitter className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Facebook className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
            <div className="prose max-w-none">

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Main Content */}
              <div className="text-gray-700 leading-relaxed">
                {post.content.split('\n').map((paragraph: string, index: string) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Author and Date */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <img
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{post.author}</h4>
                    <p className="text-sm text-gray-500">
                      Published on {post.publishDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

/* {post.content.map((section: any, index: number) => {
                if (section.type === "paragraph") {
                  return (
                    <p key={index} className="mb-6 text-gray-800">
                      {section.content}
                    </p>
                  )
                } else if (section.type === "heading") {
                  return (
                    <h2 key={index} className="text-xl font-bold mt-8 mb-4">
                      {section.content}
                    </h2>
                  )
                } else if (section.type === "callout") {
                  return (
                    <blockquote key={index} className="border-l-4 border-orange-500 pl-4 py-2 my-6 bg-orange-50">
                      <p className="italic text-gray-800">{section.content}</p>
                    </blockquote>
                  )
                }
                return null
              })} */