"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

type Question = {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "By 2050, how much plastic is expected to be in the ocean compared to fish?",
    options: [
      "Less than fish by weight",
      "Equal to fish by weight",
      "More than fish by weight",
      "Twice as much as fish by weight",
    ],
    correctAnswer: 2,
    explanation:
      "According to current projections, by 2050, there will be more plastic than fish in the ocean by weight if current pollution rates continue.",
  },
  {
    id: 2,
    question: "How long does it take for a plastic bottle to decompose?",
    options: ["10-20 years", "50-100 years", "450-500 years", "1000+ years"],
    correctAnswer: 2,
    explanation: "Plastic bottles take approximately 450-500 years to decompose in the environment.",
  },
  {
    id: 3,
    question: "What percentage of plastic ever produced has been recycled?",
    options: ["Less than 10%", "About 25%", "About 50%", "More than 75%"],
    correctAnswer: 0,
    explanation:
      "Less than 10% of all plastic ever produced has been recycled. The majority ends up in landfills or the environment.",
  },
  {
    id: 4,
    question: "Which of these items contains microplastics?",
    options: ["Toothpaste", "Face scrubs", "Synthetic clothing", "All of the above"],
    correctAnswer: 3,
    explanation:
      "All of these items can contain microplastics. Microplastics are found in many everyday products including toothpaste, face scrubs, and synthetic clothing.",
  },
  {
    id: 5,
    question: "How many marine animals are estimated to die each year from plastic pollution?",
    options: ["Thousands", "Hundreds of thousands", "Millions", "Over 100 million"],
    correctAnswer: 3,
    explanation:
      "Over 100 million marine animals die each year from plastic pollution, including fish, seabirds, and marine mammals.",
  },
]

export default function EcoQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (!isAnswered) {
      setSelectedAnswer(answerIndex)
    }
  }

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return

    setIsAnswered(true)
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
    setQuizCompleted(false)
  }

  if (quizCompleted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Quiz Completed!</h2>
        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-green-600 mb-2">
            {score}/{quizQuestions.length}
          </div>
          <p className="text-gray-600">
            {score === quizQuestions.length
              ? "Perfect score! You're an eco-warrior!"
              : score >= quizQuestions.length / 2
                ? "Great job! You know your stuff about plastic pollution."
                : "Keep learning about plastic pollution to improve your score!"}
          </p>
        </div>
        <Button onClick={resetQuiz} className="w-full bg-green-500 hover:bg-green-600 text-white">
          Take Quiz Again
        </Button>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Question {currentQuestion + 1}/{quizQuestions.length}
          </span>
          <span className="text-sm font-medium text-gray-500">Score: {score}</span>
        </div>
        <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full text-left p-3 rounded-lg border ${
              selectedAnswer === index
                ? isAnswered
                  ? index === question.correctAnswer
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                  : "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            } transition-colors`}
            onClick={() => handleAnswerSelect(index)}
            disabled={isAnswered}
          >
            <div className="flex justify-between items-center">
              <span>{option}</span>
              {isAnswered && index === question.correctAnswer && <CheckCircle className="h-5 w-5 text-green-500" />}
              {isAnswered && selectedAnswer === index && index !== question.correctAnswer && (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-700">{question.explanation}</p>
        </div>
      )}

      <div className="flex justify-between">
        {!isAnswered ? (
          <Button
            onClick={handleCheckAnswer}
            disabled={selectedAnswer === null}
            className="w-full bg-green-500 hover:bg-green-600 text-white disabled:bg-gray-300"
          >
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
          </Button>
        )}
      </div>
    </div>
  )
}

