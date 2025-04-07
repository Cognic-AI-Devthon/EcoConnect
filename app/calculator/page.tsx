"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowUp, ArrowDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CalculatorSidebar from "@/components/calculator-sidebar"

// Define the question structure
type Question = {
  id: string
  category: string
  question: string
  description: string
  options: {
    label: string
    value?: string
    description?: string
    custom?: boolean
  }[]
  icons?: {
    [key: string]: string
  }
}

// Define the questions
const questions: Question[] = [
  {
    id: "role",
    category: "Role",
    question: "First, what do you see as your role in helping with the plastic crisis?",
    description: "",
    options: [
      { label: "Raising awareness and educating others", value: "awareness" },
      { label: "Donating to and funding impactful groups", value: "funding" },
      { label: "Changing my lifestyle to be more sustainable", value: "lifestyle" },
      { label: "Helping with activism and political organizing", value: "activism" },
      { label: "Supporting companies with sustainable practices", value: "supporting" },
      { label: "Not sure", value: "unsure" },
    ],
  },
  {
    id: "household",
    category: "Role",
    question: "Would you like to calculate your individual or household footprint?",
    description:
      "Household footprint include any additional adults or children whose footprints you'd like to calculate and compensate for.",
    options: [
      { label: "Individual", value: "individual" },
      { label: "Household", value: "household" },
    ],
  },
  {
    id: "single-use",
    category: "Household Consumption",
    question: "How many single-use plastic items do you use per week?",
    description: "(e.g., water bottles, plastic bags, straws)",
    options: [
      { label: "None", value: "0", description: "0 items" },
      { label: "A few", value: "3", description: "1-5 items" },
      { label: "Several", value: "10", description: "6-15 items" },
      { label: "Many", value: "20", description: "16+ items" },
      { label: "Custom", value: "custom", custom: true },
    ],
  },
  {
    id: "packaged-food",
    category: "Household Consumption",
    question: "How much pre-packaged food do you buy per month?",
    description: "(e.g., snacks, frozen meals, plastic-wrapped produce)",
    options: [
      { label: "Very little", value: "3", description: "0-5 items" },
      { label: "Some", value: "10", description: "6-15 items" },
      { label: "A lot", value: "20", description: "16+ items" },
      { label: "Custom", value: "custom", custom: true },
    ],
    icons: {
      "Long flights": "/placeholder.svg?height=50&width=50",
      Diet: "/placeholder.svg?height=50&width=50",
      "Red meat": "/placeholder.svg?height=50&width=50",
      "Other protein": "/placeholder.svg?height=50&width=50",
      Dairy: "/placeholder.svg?height=50&width=50",
    },
  },
  {
    id: "toiletries",
    category: "Household Consumption",
    question: "What kind of toiletries do you use most?",
    description: "",
    options: [
      { label: "Mostly plastic-free", value: "10", description: "(bars, refills, glass/metal containers)" },
      { label: "Some plastic packaging", value: "50", description: "(mix of refillable and single-use)" },
      { label: "Mostly plastic packaging", value: "100", description: "(bottles, disposable razors, tubes)" },
    ],
  },
  {
    id: "synthetic-clothing",
    category: "Clothing & Textiles",
    question: "What percentage of your clothing contains synthetic materials?",
    description: "(e.g., polyester, nylon, acrylic)",
    options: [
      { label: "Almost none", value: "5", description: "0-10%" },
      { label: "Some", value: "30", description: "11-50%" },
      { label: "Mostly synthetic", value: "70", description: "51-90%" },
      { label: "Almost all", value: "95", description: "91-100%" },
      { label: "Custom", value: "custom", custom: true },
    ],
  },
  {
    id: "new-clothes",
    category: "Clothing & Textiles",
    question: "How often do you buy new clothes?",
    description: "",
    options: [
      { label: "Rarely", value: "10", description: "Once a year or less" },
      { label: "Occasionally", value: "30", description: "A few times a year" },
      { label: "Frequently", value: "70", description: "Every month" },
      { label: "Very often", value: "100", description: "Every week" },
    ],
  },
  {
    id: "recycling",
    category: "Waste Habits",
    question: "What percentage of your plastic waste do you recycle?",
    description: "",
    options: [
      { label: "None", value: "0", description: "0%" },
      { label: "Some", value: "15", description: "1-30%" },
      { label: "About half", value: "45", description: "31-60%" },
      { label: "Most of it", value: "75", description: "61-90%" },
      { label: "Nearly all", value: "95", description: "91-100%" },
      { label: "Custom", value: "custom", custom: true },
    ],
  },
  {
    id: "microplastics",
    category: "Waste Habits",
    question: "Do you use products with microplastics?",
    description: "(e.g., exfoliants, laundry pods, synthetic sponges)",
    options: [
      { label: "Never", value: "0" },
      { label: "Rarely", value: "25" },
      { label: "Sometimes", value: "50" },
      { label: "Often", value: "100" },
    ],
  },
  {
    id: "takeaway",
    category: "Lifestyle Factors",
    question: "How often do you order takeaway food with plastic containers or cutlery?",
    description: "",
    options: [
      { label: "Never", value: "0" },
      { label: "Rarely", value: "2", description: "1-2 times a month" },
      { label: "Sometimes", value: "5", description: "3-6 times a month" },
      { label: "Frequently", value: "10", description: "7+ times a month" },
    ],
  },
  {
    id: "reusables",
    category: "Lifestyle Factors",
    question: "Do you regularly use reusable alternatives?",
    description: "(e.g., coffee cups, grocery bags, water bottles)",
    options: [
      { label: "Always", value: "100" },
      { label: "Often", value: "75" },
      { label: "Sometimes", value: "50" },
      { label: "Rarely", value: "25" },
      { label: "Never", value: "0" },
    ],
  },
  {
    id: "disposal",
    category: "Additional Questions for Accuracy",
    question: "How do you dispose of plastic waste?",
    description: "",
    options: [
      { label: "Proper recycling and waste collection", value: "10" },
      { label: "Some informal disposal (burning, dumping, etc.)", value: "50" },
      { label: "Mostly informal disposal", value: "100" },
    ],
  },
  {
    id: "coastline",
    category: "Additional Questions for Accuracy",
    question: "Do you live near a coastline or water body?",
    description: "(Higher plastic leakage risk)",
    options: [
      { label: "Yes, within 10 km of a coastline/lake/river", value: "100" },
      { label: "No, far from any major water body", value: "0" },
    ],
  },
]

export default function PlasticCalculator() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [customValue, setCustomValue] = useState<string>("")
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const currentQuestion = questions[currentQuestionIndex]

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value)
    if (value !== "custom") {
      setAnswers({ ...answers, [currentQuestion.id]: value })
    }
  }

  const handleCustomValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomValue(e.target.value)
  }

  const handleCustomValueSubmit = () => {
    if (customValue) {
      setAnswers({ ...answers, [currentQuestion.id]: customValue })
      setCustomValue("")
    }
  }

  const goToNextQuestion = () => {
    if (selectedOption === "custom") {
      handleCustomValueSubmit()
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
    } else {
      // Navigate to submit page before results
      router.push("/calculator/submit")
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedOption(answers[questions[currentQuestionIndex - 1].id] || null)
    }
  }

  const skipToResults = () => {
    router.push("/calculator/submit")
  }

  return (
    <div className="flex-1 p-6 md:p-12">
      <div className="flex">
        <div className="hidden md:block w-64 mr-8">
          <CalculatorSidebar currentFootprint="0.1" />
        </div>

        <div className="flex-1">
          <div className="max-w-3xl">
            <div className="mb-8">
              <span className="text-sm text-gray-500">{currentQuestion.category}</span>
              <h1 className="text-2xl md:text-3xl font-bold mt-1 mb-2">{currentQuestion.question}</h1>
              {currentQuestion.description && <p className="text-gray-600">{currentQuestion.description}</p>}
            </div>

            {/* Icons for the packaged food question */}
            {currentQuestion.id === "packaged-food" && (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {Object.entries(currentQuestion.icons || {}).map(([name, icon], index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative w-16 h-16 mb-2">
                      <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center">
                        <img src={icon || "/placeholder.svg"} alt={name} className="w-10 h-10" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                        <Check size={14} />
                      </div>
                    </div>
                    <span className="text-sm text-center">{name}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full flex justify-between items-center p-4 rounded-lg border ${
                    selectedOption === option.value
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  } transition-colors`}
                  onClick={() => handleOptionSelect(option.value || option.label)}
                >
                  <span className="font-medium">{option.label}</span>
                  {option.description && <span className="text-gray-500 text-sm">{option.description}</span>}
                </button>
              ))}
            </div>

            {selectedOption === "custom" && (
              <div className="mb-8">
                <div className="flex">
                  <Input
                    type="number"
                    placeholder="Enter custom value"
                    value={customValue}
                    onChange={handleCustomValueChange}
                    className="rounded-r-none"
                  />
                  <span className="bg-gray-100 border border-l-0 border-gray-300 px-4 flex items-center rounded-r-md">
                    items
                  </span>
                </div>
              </div>
            )}

            <div className="flex justify-between">
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center"
                >
                  <ArrowUp className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button
                  variant="outline"
                  onClick={goToNextQuestion}
                  disabled={!selectedOption && !answers[currentQuestion.id]}
                  className="flex items-center"
                >
                  Next
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" onClick={skipToResults}>
                Skip to results
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

