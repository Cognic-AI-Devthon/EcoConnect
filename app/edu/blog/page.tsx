import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Sidebar from "@/components/sidebar"

// Mock blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: "invisible-intruder",
    title: "Invisible Intruder: Microplastics in Our Food Chain",
    excerpt: "How tiny plastic particles are making their way into what we eat and drink.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Health",
    date: "July 4th, 2024",
    author: {
      name: "Landon Brand",
      role: "Research Scientist",
    },
    slug: "invisible-intruder-microplastics",
  },
  {
    id: "from-streets-to-lake",
    title: "From Town Streets to Lake Depths: How Plastic Finds Its Way",
    excerpt: "Tracing the journey of plastic waste from urban areas to our precious water bodies.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Environment",
    date: "June 28th, 2024",
    author: {
      name: "Maya Johnson",
      role: "Environmental Journalist",
    },
    slug: "from-streets-to-lake",
  },
  {
    id: "natures-cry",
    title: "Nature's Cry: The Devastating Impact of Plastic Pollution",
    excerpt: "Exploring how plastic pollution is affecting wildlife and ecosystems worldwide.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Wildlife",
    date: "June 15th, 2024",
    author: {
      name: "Dr. Samuel Chen",
      role: "Marine Biologist",
    },
    slug: "natures-cry-plastic-pollution",
  },
  {
    id: "breaking-plastic-habit",
    title: "Breaking the Plastic Habit: Converting Paying the Price to a Sustainable Lifestyle",
    excerpt: "Practical steps to reduce your plastic consumption and live more sustainably.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Lifestyle",
    date: "May 30th, 2024",
    author: {
      name: "Olivia Martinez",
      role: "Sustainability Coach",
    },
    slug: "breaking-plastic-habit",
  },
  {
    id: "reinventing-packaging",
    title: "Reinventing Packaging: The Rise of Plastic-Free Alternatives",
    excerpt: "Innovative solutions that are replacing traditional plastic packaging.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Innovation",
    date: "May 18th, 2024",
    author: {
      name: "James Wilson",
      role: "Innovation Researcher",
    },
    slug: "reinventing-packaging",
  },
  {
    id: "ocean-cleanup",
    title: "Ocean Cleanup: Technologies Making a Difference",
    excerpt: "Exploring the cutting-edge technologies being deployed to clean our oceans.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Technology",
    date: "May 5th, 2024",
    author: {
      name: "Dr. Elena Rodriguez",
      role: "Ocean Engineer",
    },
    slug: "ocean-cleanup-technologies",
  },
  {
    id: "plastic-policy",
    title: "Plastic Policy: How Governments Are Tackling the Crisis",
    excerpt: "An overview of global policies and regulations aimed at reducing plastic pollution.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Policy",
    date: "April 22nd, 2024",
    author: {
      name: "Michael Thompson",
      role: "Policy Analyst",
    },
    slug: "plastic-policy-governments",
  },
  {
    id: "plastic-free-schools",
    title: "Plastic-Free Schools: Educating the Next Generation",
    excerpt: "How schools around the world are teaching students about plastic pollution and sustainability.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Education",
    date: "April 10th, 2024",
    author: {
      name: "Sarah Johnson",
      role: "Education Specialist",
    },
    slug: "plastic-free-schools",
  },
]

export default function BlogIndex() {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      {/* <Sidebar /> */}

      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4">EcoConnect Blog</h1>
            <p className="text-gray-600 max-w-2xl">
              Explore our collection of articles on plastic pollution, sustainability, and environmental conservation.
              Stay informed and learn how you can make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/edu/blog/${post.slug}`} key={post.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-2">
                      <span className="text-sm text-green-600 font-medium">{post.category}</span>
                      <span className="text-sm text-gray-500 ml-2">• {post.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-sm text-gray-500">By {post.author.name}</div>
                      <div className="flex items-center text-green-600 text-sm font-medium">
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

