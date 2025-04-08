"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Check, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalculatorResults() {
  const router = useRouter()
  const [expanded, setExpanded] = useState<string[]>([])
  const [donationAmount, setDonationAmount] = useState("100")

  const toggleExpand = (id: string) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter((item) => item !== id))
    } else {
      setExpanded([...expanded, id])
    }
  }

  const handleSignup = (plan: string) => {
    router.push(`/auth/signup?plan=${plan}`);
  }

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <div className="flex-1">
        <div className="p-6">
          <Link href="/calculator" className="inline-flex items-center text-sm text-gray-600 hover:text-green-600 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to calculator
          </Link>

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <img src="/placeholder.svg?height=60&width=60" alt="Results icon" className="h-14 w-14" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Your plastic footprint is 0.3 kg of plastic.</h1>
              <p className="text-gray-600">Here's what that means:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Your carbon footprint</h2>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold">0.3 kg</span>
                  <span className="ml-2 text-gray-600">of plastic per year</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  That's <span className="font-medium">88% below consumption</span> per capita
                </p>

                <div className="h-64 bg-gray-100 rounded-lg flex items-end p-4">
                  <div className="flex-1 flex items-end justify-around">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-16 bg-green-200 rounded-t-md"></div>
                      <span className="text-xs mt-2">You</span>
                      <span className="text-xs font-bold">0.3</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-32 w-16 bg-yellow-200 rounded-t-md"></div>
                      <span className="text-xs mt-2">Sri Lanka</span>
                      <span className="text-xs font-bold">2.5</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-48 w-16 bg-orange-200 rounded-t-md"></div>
                      <span className="text-xs mt-2">Global</span>
                      <span className="text-xs font-bold">4.0</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Your annual emissions are equivalent to...</h2>

                <div className="flex items-center p-4 bg-yellow-50 rounded-lg mb-4">
                  <img src="/placeholder.svg?height=60&width=60" alt="Supermarket trolley" className="h-14 w-14 mr-4" />
                  <div>
                    <h3 className="font-medium">57 supermarket trolleys—</h3>
                    <p className="text-sm text-gray-600">Imagine a whole row of them filled with plastic!</p>
                  </div>
                </div>

                <Tabs defaultValue="month">
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="month">Monthly</TabsTrigger>
                    <TabsTrigger value="year">Yearly</TabsTrigger>
                    <TabsTrigger value="lifetime">Lifetime</TabsTrigger>
                  </TabsList>
                  <TabsContent value="month" className="h-32 bg-gray-100 rounded-lg p-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold">0.025 kg</span>
                      <p className="text-sm text-gray-600">of plastic per month</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="year" className="h-32 bg-gray-100 rounded-lg p-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold">0.3 kg</span>
                      <p className="text-sm text-gray-600">of plastic per year</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="lifetime" className="h-32 bg-gray-100 rounded-lg p-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold">23.4 kg</span>
                      <p className="text-sm text-gray-600">of plastic in your lifetime</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Your plastic footprint vs. Sri Lanka average</h2>
                <p className="text-sm text-gray-600 mb-4">Plastic footprint in kg</p>

                <div className="h-64 bg-gray-100 rounded-lg p-4">
                  <div className="h-full flex items-end">
                    <div className="w-1/5 h-12 bg-green-400 rounded-t-md"></div>
                    <div className="w-1/5 h-48 bg-yellow-400 rounded-t-md mx-2"></div>
                    <div className="w-1/5 h-24 bg-orange-400 rounded-t-md"></div>
                    <div className="w-1/5 h-56 bg-red-400 rounded-t-md mx-2"></div>
                    <div className="w-1/5 h-32 bg-purple-400 rounded-t-md"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img src="/placeholder.svg?height=60&width=60" alt="Ocean icon" className="h-14 w-14 mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">By 2050, plastic waste tonnage will in the sea</h2>
                  </div>
                </div>

                <div className="h-48 bg-blue-50 rounded-lg flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Ocean plastic visualization"
                    className="h-32 w-32"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-xl font-bold text-green-600 mb-4">You can help solve the plastic crisis.</h2>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md mb-12">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="font-bold text-lg mb-2">ECO TIP</h3>
                  <p className="text-gray-300 mb-2">You can cut down 0.5 kg of plastic waste each year</p>
                  <p className="text-sm text-gray-400">Just by switching to a reusable bag instead of plastic bags.</p>
                </div>
                <div className="flex items-center">
                  <Button className="bg-green-500 hover:bg-green-600 text-white mr-4">Learn More</Button>
                  <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">30% OFF</div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-6 text-center">
                Reduce your plastic footprint by supporting innovative solutions to tackle plastic waste.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h3 className="font-bold mb-2">Supporter</h3>
                    <div className="text-2xl font-bold mb-4">Rs. 299</div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Helps remove 5kg of plastic monthly</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Monthly impact reports</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Community access</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Eco-friendly badge</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => handleSignup("Supporter")}>Choose Plan</Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-green-500">
                  <div className="p-6">
                    <h3 className="font-bold mb-2">Advocate</h3>
                    <div className="text-2xl font-bold mb-4">Rs. 499</div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Helps remove 10kg of plastic monthly</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Weekly impact reports</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">All Supporter benefits</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Personalized reduction tips</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Premium community access</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => handleSignup("Advocate")}>Choose Plan</Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h3 className="font-bold mb-2">Protector</h3>
                    <div className="text-2xl font-bold mb-4">Rs. 999</div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Helps remove 25kg of plastic monthly</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Daily impact reports</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">All Advocate benefits</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Direct project selection</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">VIP community access</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => handleSignup("Protector")}>Choose Plan</Button>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="font-medium mb-4">Make a Difference: Donate Today!</h3>
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline">
                      <span className="text-gray-500 mr-1">Rs.</span>
                      <Input
                        type="number"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        className="w-20 border-0 text-2xl font-bold p-0 focus-visible:ring-0"
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white mb-4">Donate Now</Button>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">
                        Support local recycling and plastic reduction initiatives
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">100% secure and tax-deductible donation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">
                        Receive detailed impact reports on your contribution
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold mb-6">What we're funding this month:</h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-40 relative">
                    <img
                      src="/placeholder.svg?height=160&width=300"
                      alt="Community cleanup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-2">Community cleanup drives</h3>
                    <p className="text-xs text-gray-600">
                      Supporting local communities in organizing beach and river cleanup initiatives.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-40 relative">
                    <img
                      src="/placeholder.svg?height=160&width=300"
                      alt="Recycling innovation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-2">Recycling innovation centers</h3>
                    <p className="text-xs text-gray-600">
                      Funding the development of new technologies to process hard-to-recycle plastics.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-40 relative">
                    <img
                      src="/placeholder.svg?height=160&width=300"
                      alt="Ocean cleanup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-2">Ocean cleanup efforts</h3>
                    <p className="text-xs text-gray-600">
                      Supporting organizations dedicated to removing plastic waste from our oceans.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-40 relative">
                    <img
                      src="/placeholder.svg?height=160&width=300"
                      alt="Education programs"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-2">Eco-education programs</h3>
                    <p className="text-xs text-gray-600">
                      Educating communities about plastic pollution and sustainable alternatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-900 text-white rounded-lg overflow-hidden mb-12">
              <div className="p-8 text-center">
                <h2 className="text-xl font-bold mb-4">
                  Your membership funds transformative projects designed to combat plastic waste, paving the way for a
                  cleaner, sustainable future.
                </h2>
                <div className="flex justify-center space-x-4 mb-8">
                  <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-900">
                    <div className="w-3 h-3 rounded-full bg-green-900"></div>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </button>
                </div>

                <h3 className="text-lg font-bold mb-4">Every project we fund is Wren-guaranteed.</h3>
                <p className="text-sm text-gray-300 mb-8 max-w-2xl mx-auto">
                  If a project doesn't reach its goals, we do not charge you and another project is made on the
                  difference.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-64">
                    <img
                      src="/placeholder.svg?height=256&width=400"
                      alt="Ocean cleanup"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="text-left">
                    <h3 className="font-bold mb-4">How we choose projects:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">Measurable Results</h4>
                          <p className="text-sm text-gray-300">
                            All projects must have clear metrics for success. This is a must and we're committed to
                            ensuring your contribution makes a real difference.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">Lasting Impact</h4>
                          <p className="text-sm text-gray-300">
                            We focus on projects that create sustainable, long-term solutions for reducing plastic
                            pollution.
                          </p>
                        </div>
                      </li>
                    </ul>

                    <button className="mt-6 flex items-center text-green-300 hover:text-white">
                      <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center mr-3">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                      </div>
                      <span>Watch our project selection process</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center mb-4">
                <img src="/placeholder.svg?height=40&width=40" alt="Coffee cup" className="h-10 w-10 mr-3" />
                <h2 className="text-xl font-bold">Make a positive impact—for the price of one coffee per week.</h2>
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6">Subscribe for Rs. 299</Button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
              <h2 className="text-xl font-bold mb-6 text-center">Questions? We've got you.</h2>

              <div className="space-y-4">
                {[
                  "How does EcoConnect's business model work?",
                  "Are donations tax-deductible?",
                  "What is the cost of reducing my plastic footprint?",
                  "How can you track how the donations are used?",
                ].map((question, index) => (
                  <div key={index} className="border rounded-lg">
                    <button
                      className="flex justify-between items-center w-full p-4 text-left font-medium"
                      onClick={() => toggleExpand(`faq-${index}`)}
                    >
                      <span>{question}</span>
                      {expanded.includes(`faq-${index}`) ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>

                    {expanded.includes(`faq-${index}`) && (
                      <div className="p-4 border-t">
                        <p className="text-gray-600">
                          {index === 0 &&
                            "EcoConnect operates on a subscription model where members contribute monthly to fund verified plastic reduction projects. We take a small percentage to cover operational costs, with the majority going directly to projects."}
                          {index === 1 &&
                            "Yes, all donations to EcoConnect are tax-deductible as we are a registered non-profit organization. You will receive a receipt for your contributions that can be used for tax purposes."}
                          {index === 2 &&
                            "The cost varies based on your subscription tier, starting at Rs. 299 per month. This allows us to remove approximately 5kg of plastic waste from the environment on your behalf."}
                          {index === 3 &&
                            "We provide detailed monthly reports showing exactly how your contributions are being used, including project updates, impact metrics, and financial breakdowns."}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

