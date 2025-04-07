import { type NextRequest, NextResponse } from "next/server"
import { createFootprintReport } from "@/lib/db/footprint"

export async function POST(req: NextRequest) {
  try {
    const { userId, answers } = await req.json()

    if (!userId || !answers || !Array.isArray(answers)) {
      return NextResponse.json({ error: "User ID and answers array are required" }, { status: 400 })
    }

    // Calculate footprint based on answers
    const totalWeight = answers.reduce((sum, answer) => sum + answer.weight, 0)

    // Generate recommendations based on answers
    const recommendations = generateRecommendations(answers)

    // Create footprint report
    const reportId = await createFootprintReport({
      userId,
      footprint: totalWeight,
      answers,
      recommendations,
    })

    return NextResponse.json({
      reportId,
      footprint: totalWeight,
      recommendations,
    })
  } catch (error) {
    console.error("Error calculating footprint:", error)
    return NextResponse.json({ error: "Failed to calculate footprint" }, { status: 500 })
  }
}

// Helper function to generate recommendations
function generateRecommendations(answers: any[]): string[] {
  const recommendations: string[] = []

  // Check for high plastic bottle usage
  const bottleAnswer = answers.find((a) => a.questionId.includes("bottle") || a.answer.includes("bottle"))
  if (bottleAnswer && bottleAnswer.weight > 5) {
    recommendations.push("Consider investing in a reusable water bottle to reduce plastic waste.")
  }

  // Check for plastic bag usage
  const bagAnswer = answers.find((a) => a.questionId.includes("bag") || a.answer.includes("bag"))
  if (bagAnswer && bagAnswer.weight > 3) {
    recommendations.push("Keep reusable shopping bags in your car or by the door to remember them when shopping.")
  }

  // Check for takeout container usage
  const takeoutAnswer = answers.find((a) => a.questionId.includes("takeout") || a.answer.includes("container"))
  if (takeoutAnswer && takeoutAnswer.weight > 8) {
    recommendations.push("Bring your own containers when getting takeout food to reduce plastic waste.")
  }

  // Check for straw usage
  const strawAnswer = answers.find((a) => a.questionId.includes("straw") || a.answer.includes("straw"))
  if (strawAnswer && strawAnswer.weight > 1) {
    recommendations.push("Carry a reusable straw or simply decline straws when offered.")
  }

  // Add general recommendations
  recommendations.push("Shop at bulk stores to reduce packaging waste.")
  recommendations.push("Choose products with minimal or recyclable packaging.")

  return recommendations
}

