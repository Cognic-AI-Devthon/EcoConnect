"use client";

import { Calculator, Leaf, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const steps = [
  {
    icon: Calculator,
    title: "Measure Your Plastic Footprint",
    description: "Use our Carbon Footprint Calculator to understand your impact on the environment.",
    buttonText: "Try Calculator",
    buttonLink: "/calculator",
  },
  {
    icon: Leaf,
    title: "Take Action & Earn Rewards",
    description: "Complete eco-challenges, participate in clean-ups, and earn rewards for your efforts.",
    buttonText: "Get Started",
    buttonLink: "/ecohub/earn",
  },
  {
    icon: Recycle,
    title: "Educate. Act. Reduce Plastic.",
    description: "Dive into our blog for easy tips and smart habits to reduce your plastic footprint every day.",
    buttonText: "Visit EduHub",
    buttonLink: "/edu",
  },
]

export default function HowItWorks() {

  const router = useRouter()

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">How EcoConnect Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <step.icon className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 mb-4">{step.description}</p>
            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50"
            onClick={() => router.push(step.buttonLink)}
            >
              {step.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

