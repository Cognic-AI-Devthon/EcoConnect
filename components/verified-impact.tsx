import { Shield, BarChart, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Verification",
    description: "All projects undergo rigorous verification process",
  },
  {
    icon: BarChart,
    title: "Measurable Results",
    description: "Transparent metrics for all conservation efforts",
  },
  {
    icon: Clock,
    title: "Long-Term Change",
    description: "Sustainable solutions for lasting environmental impact",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Powered by passionate individuals and organizations",
  },
]

export default function VerifiedImpact() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Only the Best, Verified for Impact</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We ensure that every project and initiative is thoroughly vetted for maximum environmental impact.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <feature.icon className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">EcoConnect's work is done publicly and verifiably.</h3>
      </div>
    </section>
  )
}

