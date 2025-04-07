"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "How long will it take before your first blog post?",
    answer:
      "Our team reviews and publishes new blog posts within 1-2 business days after submission. We ensure all content meets our quality standards before publishing.",
  },
  {
    question: "How long will we deliver your first blog post?",
    answer:
      "Once you subscribe to our content plan, we'll deliver your first custom blog post within 3-5 business days, depending on the complexity and research required.",
  },
  {
    question: "How long will we deliver your first blog post?",
    answer:
      "For our premium members, we aim to deliver your first blog post within 48 hours of subscription, with expedited research and writing processes.",
  },
  {
    question: "How long will we deliver your first blog post?",
    answer:
      "If you're on our enterprise plan, you'll receive your first blog post within a timeframe agreed upon during your onboarding call, typically 1-3 business days.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Ask Questions</h2>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex items-center justify-between w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {openIndex === index && (
              <div className="p-4 bg-gray-50 rounded-b-lg mt-1">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button className="bg-green-500 hover:bg-green-600 text-white">Contact Us</Button>
      </div>
    </section>
  )
}

