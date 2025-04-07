import { Timestamp, GeoPoint } from "firebase/firestore"

// Import database functions
import { createUser } from "./users"
import { createBadge } from "./badges"
import { createChallenge } from "./challenges"
import { createReward } from "./rewards"
import { createFootprintQuestion } from "./footprint"
import { createRecycleLocation } from "./recycleLocations"
import { createCleanupEvent } from "./cleanupEvents"
import { createMarketItem } from "./marketplace"
import { createBlogPost } from "./blog"
import { createEduVideo } from "./eduVideos"

// Seed users
const seedUsers = async () => {
  const users = [
    {
      id: "user1",
      name: "John Doe",
      email: "john@example.com",
      profilePicture: "/placeholder.svg?height=200&width=200",
      joinDate: new Date().toISOString(),
      role: "regular",
      subscriptionPlan: "Free",
      ecoPoints: 1250,
      todaysPoints: 75,
      streakCount: 12,
      badges: ["badge1", "badge2"],
    },
    {
      id: "user2",
      name: "Jane Smith",
      email: "jane@example.com",
      profilePicture: "/placeholder.svg?height=200&width=200",
      joinDate: new Date().toISOString(),
      role: "regular",
      subscriptionPlan: "Supporter",
      ecoPoints: 3450,
      todaysPoints: 120,
      streakCount: 45,
      badges: ["badge1", "badge3", "badge4"],
    },
    {
      id: "admin1",
      name: "Admin User",
      email: "admin@example.com",
      profilePicture: "/placeholder.svg?height=200&width=200",
      joinDate: new Date().toISOString(),
      role: "admin",
      subscriptionPlan: "Protector",
      ecoPoints: 9800,
      todaysPoints: 0,
      streakCount: 180,
      badges: ["badge1", "badge2", "badge3", "badge4", "badge5"],
    },
  ]

  for (const user of users) {
    await createUser(user.id, user)
  }
}

// Seed badges
const seedBadges = async () => {
  const badges = [
    {
      id: "badge1",
      name: "Newcomer",
      description: "Joined EcoConnect",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-green-500",
    },
    {
      id: "badge2",
      name: "7-Day Streak",
      description: "Completed activities for 7 consecutive days",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-blue-500",
    },
    {
      id: "badge3",
      name: "30-Day Streak",
      description: "Completed activities for 30 consecutive days",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-500",
    },
    {
      id: "badge4",
      name: "Eco Warrior",
      description: "Earned 1000+ eco points",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-yellow-500",
    },
    {
      id: "badge5",
      name: "Generous Heart",
      description: "Made a donation to an environmental cause",
      image: "/placeholder.svg?height=80&width=80",
      color: "bg-pink-500",
    },
  ]

  for (const badge of badges) {
    await createBadge(badge)
  }
}

// Seed challenges
const seedChallenges = async () => {
  const challenges = [
    {
      id: "challenge1",
      title: "Carry a Reusable Bag",
      description: "Say goodbye to single-use bags—go reusable!",
      points: 10,
      type: "daily",
      icon: "/placeholder.svg?height=100&width=100",
      category: "lifestyle",
    },
    {
      id: "challenge2",
      title: "Skip Plastic Straws",
      description: "Choose metal, bamboo, or paper alternatives.",
      points: 10,
      type: "daily",
      icon: "/placeholder.svg?height=100&width=100",
      category: "lifestyle",
    },
    {
      id: "challenge3",
      title: "Answer Daily Quiz",
      description: "Discover how well you know Eco Facts!",
      points: 10,
      type: "daily",
      icon: "/placeholder.svg?height=100&width=100",
      category: "education",
    },
    {
      id: "challenge4",
      title: "Attend a Beach Cleanup",
      description: "Help keep our beaches and marine life clean",
      points: 50,
      type: "one-time",
      icon: "/placeholder.svg?height=100&width=100",
      category: "community",
    },
    {
      id: "challenge5",
      title: "Complete Plastic Footprint Calculator",
      description: "Measure your plastic usage and get personalized tips",
      points: 25,
      type: "weekly",
      icon: "/placeholder.svg?height=100&width=100",
      category: "education",
    },
  ]

  for (const challenge of challenges) {
    await createChallenge(challenge)
  }
}

// Seed rewards
const seedRewards = async () => {
  const rewards = [
    {
      id: "reward1",
      title: "Eco Market Gift Card Rs5000",
      description: "Shop eco-friendly products with this gift card",
      points: 21000,
      image: "/placeholder.svg?height=200&width=200",
      category: "gift-cards",
      featured: true,
    },
    {
      id: "reward2",
      title: "Plant 10 Trees",
      description: "Contribute to reforestation efforts",
      points: 5000,
      image: "/placeholder.svg?height=200&width=200",
      category: "donations",
      featured: true,
    },
    {
      id: "reward3",
      title: "Bamboo Cutlery Set",
      description: "Portable and reusable cutlery set",
      points: 8000,
      image: "/placeholder.svg?height=200&width=200",
      category: "eco-products",
      featured: true,
      new: true,
    },
    {
      id: "reward4",
      title: "Eco Market Gift Card Rs2500",
      description: "Shop eco-friendly products with this gift card",
      points: 10000,
      image: "/placeholder.svg?height=200&width=200",
      category: "gift-cards",
    },
    {
      id: "reward5",
      title: "Beach Cleanup Experience",
      description: "Join a guided beach cleanup with experts",
      points: 3000,
      image: "/placeholder.svg?height=200&width=200",
      category: "experiences",
      hot: true,
    },
  ]

  for (const reward of rewards) {
    await createReward(reward)
  }
}

// Seed footprint questions
const seedFootprintQuestions = async () => {
  const questions = [
    {
      question: "How many plastic water bottles do you use per week?",
      options: ["0", "1-3", "4-6", "7+"],
      weights: [0, 2, 5, 10],
      category: "consumption",
    },
    {
      question: "How often do you use plastic shopping bags?",
      options: ["Never (I always bring reusable bags)", "Rarely", "Sometimes", "Frequently"],
      weights: [0, 3, 7, 12],
      category: "consumption",
    },
    {
      question: "How often do you order takeout food that comes in plastic containers?",
      options: ["Never", "1-2 times per month", "1-2 times per week", "3+ times per week"],
      weights: [0, 4, 8, 15],
      category: "food",
    },
    {
      question: "Do you use plastic straws?",
      options: ["Never", "Rarely", "Sometimes", "Always"],
      weights: [0, 1, 3, 5],
      category: "consumption",
    },
    {
      question: "How often do you buy products with plastic packaging?",
      options: [
        "I actively avoid all plastic packaging",
        "I try to minimize it",
        "I don't pay attention to packaging",
        "Most of what I buy has plastic packaging",
      ],
      weights: [0, 5, 10, 20],
      category: "shopping",
    },
  ]

  for (const question of questions) {
    await createFootprintQuestion(question)
  }
}

// Seed recycle locations
const seedRecycleLocations = async () => {
  const locations = [
    {
      name: "Kaduwela Municipal Council Garbage Recycling Center",
      address: "WXJP+FJG, Kaduwela",
      location: new GeoPoint(6.9361, 79.9842),
      acceptedMaterials: ["plastic", "paper", "glass", "metal"],
      operatingHours: {
        monday: "8:00 AM - 5:00 PM",
        tuesday: "8:00 AM - 5:00 PM",
        wednesday: "8:00 AM - 5:00 PM",
        thursday: "8:00 AM - 5:00 PM",
        friday: "8:00 AM - 5:00 PM",
        saturday: "8:00 AM - 12:00 PM",
        sunday: "Closed",
      },
      contactInfo: "",
      ratings: {
        user1: 4,
        user2: 3,
      },
      averageRating: 3.5,
    },
    {
      name: "Kalhari Enterprises",
      address: "Dudley Gunasekara Mawatha, Colombo",
      location: new GeoPoint(6.9261, 79.9242),
      acceptedMaterials: ["plastic", "paper", "e-waste"],
      operatingHours: {
        monday: "8:00 AM - 6:00 PM",
        tuesday: "8:00 AM - 6:00 PM",
        wednesday: "8:00 AM - 6:00 PM",
        thursday: "8:00 AM - 6:00 PM",
        friday: "8:00 AM - 6:00 PM",
        saturday: "9:00 AM - 3:00 PM",
        sunday: "Closed",
      },
      contactInfo: "0112 401 167",
      website: "https://kalharienterprises.com",
      ratings: {
        user1: 5,
        user2: 4,
        admin1: 4,
      },
      averageRating: 4.3,
    },
    {
      name: "Wishwa Enterprises",
      address: "Malwana Rd, Colombo",
      location: new GeoPoint(6.9161, 79.8842),
      acceptedMaterials: ["plastic", "paper", "cardboard"],
      operatingHours: {
        monday: "8:00 AM - 5:00 PM",
        tuesday: "8:00 AM - 5:00 PM",
        wednesday: "8:00 AM - 5:00 PM",
        thursday: "8:00 AM - 5:00 PM",
        friday: "8:00 AM - 5:00 PM",
        saturday: "Closed",
        sunday: "Closed",
      },
      contactInfo: "077 774 8396",
      ratings: {
        user2: 5,
        admin1: 4.5,
      },
      averageRating: 4.8,
    },
  ]

  for (const location of locations) {
    await createRecycleLocation(location)
  }
}

// Seed cleanup events
const seedCleanupEvents = async () => {
  const events = [
    {
      title: "Galkissa Beach Clean up",
      description: "Join us for a community beach cleanup to remove plastic waste and protect marine life.",
      image: "/placeholder.svg?height=200&width=300",
      date: Timestamp.fromDate(new Date(2025, 2, 22)), // March 22, 2025
      time: "11 A.M. - 12:30 P.M.",
      location: "NEW BRIGHTON, MERSEYSIDE",
      schoolFriendly: true,
      organizedBy: "ROTARAC SOCIETY, UNIVERSITY OF MORATUWA",
      capacity: 50,
      meetingPoint: "Main Beach Entrance",
    },
    {
      title: "Aberdeen City Beach - North End",
      description: "Help us clean Aberdeen's beautiful north beach and make a difference for our ocean.",
      image: "/placeholder.svg?height=200&width=300",
      date: Timestamp.fromDate(new Date(2025, 2, 23)), // March 23, 2025
      time: "2:00 P.M. - 4:30 P.M.",
      location: "ABERDEEN NORTH NI, ABERDEEN CITY",
      schoolFriendly: false,
      organizedBy: "ZERO PLASTIC MOVEMENT",
      capacity: 30,
      meetingPoint: "North Beach Parking Lot",
    },
    {
      title: "Community Clean Up, West Links Park & Beach",
      description: "A family-friendly cleanup event to restore the beauty of West Links Park and Beach.",
      image: "/placeholder.svg?height=200&width=300",
      date: Timestamp.fromDate(new Date(2025, 2, 28)), // March 28, 2025
      time: "7 A.M. - 1 P.M.",
      location: "ARBROATH WEST LINKS, ANGUS",
      schoolFriendly: true,
      organizedBy: "ARBROATH COMMUNITY",
      capacity: 100,
      meetingPoint: "West Links Pavilion",
    },
  ]

  for (const event of events) {
    await createCleanupEvent(event)
  }
}

// Seed market items
const seedMarketItems = async () => {
  const items = [
    {
      title: "Eco-Friendly Bamboo Water Bottle",
      description:
        "Stay hydrated sustainably with our 1.5L liter bamboo water bottle—durable, eco-friendly, and stylish for everyday use!",
      price: 799,
      originalPrice: 1350,
      discount: 32,
      sellerId: "user1",
      category: "Kitchen",
      condition: "new",
      inStock: true,
      quantity: 15,
      rating: 4.8,
      reviews: 677,
      isHot: true,
    },
    {
      title: "Wooden Cutting Board",
      description: "Handcrafted wooden cutting board made from sustainable materials",
      price: 520,
      sellerId: "user2",
      category: "Kitchen",
      condition: "new",
      inStock: true,
      quantity: 8,
      rating: 4.9,
      reviews: 245,
    },
    {
      title: "Eco-Friendly Spiral Notebooks, 100% Recycled",
      description: "100% recycled paper notebooks with spiral binding, perfect for notes and journaling",
      price: 450,
      originalPrice: 580,
      discount: 10,
      sellerId: "user1",
      category: "Office",
      condition: "new",
      inStock: true,
      quantity: 50,
      rating: 4.7,
      reviews: 132,
    },
    {
      title: "Bamboo Cutlery Set",
      description: "Portable and reusable bamboo cutlery set with carrying case",
      price: 350,
      sellerId: "user2",
      category: "Kitchen",
      condition: "new",
      inStock: true,
      quantity: 25,
      rating: 4.6,
      reviews: 89,
    },
    {
      title: "Biodegradable Garbage Bags - 20 Pcs",
      description: "Environmentally friendly alternative to plastic garbage bags",
      price: 199,
      sellerId: "admin1",
      category: "Home",
      condition: "new",
      inStock: true,
      quantity: 100,
      rating: 4.5,
      reviews: 156,
    },
  ]

  for (const item of items) {
    await createMarketItem(item)
  }
}

// Seed blog posts
const seedBlogPosts = async () => {
  const posts = [
    {
      title: "Invisible Intruder: Microplastics in Our Food Chain",
      content:
        "Microplastics, tiny particles smaller than 5mm, are silently making their way into our food chain. The journey of these particles is causing growing concern, and here's why we should pay attention...",
      author: {
        id: "user1",
        name: "Landon Brand",
        role: "Research Scientist",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      tags: ["microplastics", "food", "health", "environment"],
      imageUrl: "/placeholder.svg?height=400&width=800",
    },
    {
      title: "From Town Streets to Lake Depths: How Plastic Finds Its Way",
      content:
        "Have you ever wondered how a plastic wrapper discarded on a city street ends up in a remote lake or ocean? The journey is both fascinating and alarming...",
      author: {
        id: "user2",
        name: "Maya Johnson",
        role: "Environmental Journalist",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      tags: ["plastic pollution", "waterways", "environment"],
      imageUrl: "/placeholder.svg?height=400&width=800",
    },
    {
      title: "Breaking the Plastic Habit: Converting to a Sustainable Lifestyle",
      content:
        "Breaking free from plastic dependency isn't just good for the planet—it can be liberating for you too. This guide provides practical, achievable steps to reduce your plastic consumption...",
      author: {
        id: "admin1",
        name: "Olivia Martinez",
        role: "Sustainability Coach",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      tags: ["sustainable living", "plastic-free", "lifestyle"],
      imageUrl: "/placeholder.svg?height=400&width=800",
    },
  ]

  for (const post of posts) {
    await createBlogPost(post)
  }
}

// Seed educational videos
const seedEduVideos = async () => {
  const videos = [
    {
      title: "The Life Cycle of Plastic",
      description:
        "Follow the journey of plastic from production to disposal and learn about its environmental impact.",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      thumbnailUrl: "/placeholder.svg?height=200&width=300",
      duration: 420, // 7 minutes
      category: "Environment",
      tags: ["plastic", "lifecycle", "pollution"],
    },
    {
      title: "How to Start a Zero-Waste Kitchen",
      description: "Practical tips and tricks to reduce waste in your kitchen and make more sustainable choices.",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      thumbnailUrl: "/placeholder.svg?height=200&width=300",
      duration: 540, // 9 minutes
      category: "Lifestyle",
      tags: ["zero-waste", "kitchen", "sustainable living"],
    },
    {
      title: "The Impact of Microplastics on Marine Life",
      description: "Discover how microplastics affect ocean ecosystems and what scientists are doing about it.",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      thumbnailUrl: "/placeholder.svg?height=200&width=300",
      duration: 780, // 13 minutes
      category: "Science",
      tags: ["microplastics", "marine life", "ocean"],
    },
  ]

  for (const video of videos) {
    await createEduVideo(video)
  }
}

// Main seed function
export const seedDatabase = async () => {
  try {
    console.log("Seeding database...")

    await seedUsers()
    console.log("Users seeded")

    await seedBadges()
    console.log("Badges seeded")

    await seedChallenges()
    console.log("Challenges seeded")

    await seedRewards()
    console.log("Rewards seeded")

    await seedFootprintQuestions()
    console.log("Footprint questions seeded")

    await seedRecycleLocations()
    console.log("Recycle locations seeded")

    await seedCleanupEvents()
    console.log("Cleanup events seeded")

    await seedMarketItems()
    console.log("Market items seeded")

    await seedBlogPosts()
    console.log("Blog posts seeded")

    await seedEduVideos()
    console.log("Educational videos seeded")

    console.log("Database seeding completed successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
  }
}

