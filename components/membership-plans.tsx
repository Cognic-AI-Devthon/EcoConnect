"use client";

import React, { useState } from "react";
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    title: "Supporter",
    price: "Rs. 299",
    features: [
      "Basic access to all features",
      "Monthly impact report",
      "Community access",
      "Eco-friendly badge",
      "Limited rewards",
    ],
    buttonText: "Choose Plan",
    popular: false,
  },
  {
    title: "Advocate",
    price: "Rs. 499",
    features: [
      "Full access to all features",
      "Weekly impact reports",
      "Priority community access",
      "Exclusive eco-friendly badge",
      "Expanded rewards catalog",
      "Personalized reduction tips",
    ],
    buttonText: "Choose Plan",
    popular: true,
  },
  {
    title: "Protector",
    price: "Rs. 999",
    features: [
      "Premium access to all features",
      "Daily impact reports",
      "VIP community access",
      "Premium eco-friendly badge",
      "Full rewards catalog",
      "Personalized reduction plan",
      "Direct impact on conservation",
    ],
    buttonText: "Choose Plan",
    popular: false,
  },
]

export default function MembershipPlans() {
  const [donationAmount, setDonationAmount] = useState("100"); 

  return (
    <section className="py-16 bg-green-50 -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-4">Join Thousands Making a Difference.</h2>

      <div className="flex justify-center space-x-2 mb-8">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div key={dot} className="w-2 h-2 rounded-full bg-green-500" />
        ))}
      </div>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Your membership supports thousands of plastic reduction projects and innovative solutions, creating a cleaner,
        greener planet.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-6 relative ${plan.popular ? "border-2 border-green-500" : ""}`}
          >
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full ${
                plan.popular
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-white border border-green-500 text-green-600 hover:bg-green-50"
              }`}
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold">Make a one-time donation</h3>
            <p className="text-gray-600 text-sm">Support our mission with any amount</p>
          </div>
          <div className="text-2xl font-bold">
            Rs.{" "}
            <input
              type="text"
              value={donationAmount} // Controlled input
              onChange={(e) => setDonationAmount(e.target.value)} // Update state on change
              className="w-16 border-b border-gray-300 focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Your donation helps us continue our work protecting oceans and reducing plastic pollution.
        </p>

        <div className="flex items-start mb-4">
          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-600 text-sm">100% of your donation goes directly to conservation efforts</span>
        </div>

        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Donate Now</Button>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">Make a Difference Today!</p>
      </div>
    </section>
  )
}

