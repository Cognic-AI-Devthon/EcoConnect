import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import MembershipPlans from "@/components/membership-plans"
import VerifiedImpact from "@/components/verified-impact"
import Statistics from "@/components/statistics"
import FeaturedArticles from "@/components/featured-articles"
import Faq from "@/components/faq"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

// Firebase imports
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(
  firebaseConfig
);

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