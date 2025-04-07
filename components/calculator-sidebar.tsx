import Link from "next/link"
import { Home, User, ShoppingBag, Users, BookOpen, MessageCircle } from "lucide-react"

type CalculatorSidebarProps = {
  currentFootprint: string
}

export default function CalculatorSidebar({ currentFootprint }: CalculatorSidebarProps) {
  return (

    <div className="p-4 bg-white rounded-lg mx-2 mb-4 shadow-sm">
      <div className="text-center">
        <p className="text-xs text-gray-600">Your plastic footprint</p>
        <h3 className="text-3xl font-bold">{currentFootprint}</h3>
        <p className="text-xs text-gray-600">tons of plastic per year</p>
        <div className="mt-2 text-xs text-green-600 font-medium">95% less than average</div>
      </div>
    </div>
  )
}

