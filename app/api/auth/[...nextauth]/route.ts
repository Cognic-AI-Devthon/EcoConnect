import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { getUserById, createUser } from "@/lib/db/users"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)

          const user = userCredential.user

          return {
            id: user.uid,
            email: user.email,
            name: user.displayName,
            image: user.photoURL,
          }
        } catch (error) {
          console.error("Authentication error:", error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        // Check if user exists in our database
        const dbUser = await getUserById(user.id)

        // If not, create a new user
        if (!dbUser) {
          await createUser(user.id, {
            name: user.name || "",
            email: user.email || "",
            profilePicture: user.image || "",
          })
        }
      }

      return true
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub

        // Get additional user data from our database
        const dbUser = await getUserById(token.sub)
        if (dbUser) {
          session.user.role = dbUser.role
          session.user.ecoPoints = dbUser.ecoPoints
          session.user.subscriptionPlan = dbUser.subscriptionPlan
        }
      }

      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
      }

      return token
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

