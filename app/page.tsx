import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import MembershipPlans from "@/components/membership-plans"
import VerifiedImpact from "@/components/verified-impact"
import Statistics from "@/components/statistics"
import FeaturedArticles from "@/components/featured-articles"
import Faq from "@/components/faq"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col">

      <HeroSection />
      <div className="px-6 md:px-12 lg:px-24">
        <HowItWorks />
        <MembershipPlans />
        <VerifiedImpact />
        <Statistics />
        <FeaturedArticles />
        <Faq />
        <CallToAction />
      </div>
      <Footer />
    </div>
  )
}

