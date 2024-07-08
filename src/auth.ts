import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
  }),
    // Credentials({
    //   name: "credentials",
    //   async authorize(credential){
    //     await connectDB();
    //     const user = await User.findOne({
    //       email: credential?.email,
    //       password: credential?.password,
    //     });
    //     if(!user) return null
    //     return user;
    //   }
    // })
  ],
  pages: {
    signIn: "/login",
  },
})