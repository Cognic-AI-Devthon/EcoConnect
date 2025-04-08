import Link from "next/link"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "How Plastic Waste Is Affecting Our Oceans",
    excerpt: "Learn about the devastating impact of plastic pollution on marine ecosystems.",
    image: "/Ocean-plastic-waste-Large.jpg?height=200&width=300",
    category: "Ocean Health",
    link: "/blog/plastic-waste-oceans",
  },
  {
    title: "5 Ways To Reduce Your Plastic Footprint",
    excerpt: "Simple steps you can take today to minimize your plastic consumption.",
    image: "/plasticfootprint.png?height=200&width=300",
    category: "Sustainable Living",
    link: "/blog/reduce-plastic-footprint",
  },
  {
    title: "Success Stories: The Rise of Sustainable Packaging",
    excerpt: "How innovative companies are revolutionizing the packaging industry.",
    image: "plasticfreepackage.png?height=200&width=300",
    category: "Innovation",
    link: "/blog/sustainable-packaging",
  },
  {
    title: "Microplastics: The Invisible Threat to Our Health",
    excerpt: "Understanding the hidden dangers of microplastics in our food and water.",
    image: "/microplastics1.jpg?height=200&width=300",
    category: "Health",
    link: "/blog/microplastics-health",
  },
]

export default function FeaturedArticles() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Featured writing</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <Link key={index} href={article.link} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-green-600 mb-2">{article.category}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

