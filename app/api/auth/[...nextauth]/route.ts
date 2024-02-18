import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("User", user);
      console.log("Account", account);

      if (account?.provider === "google") {
        const { name, email } = user;
        try {
          const res = await fetch("http://localhost:3000/api/User", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
          });

          if (res.ok) {
            return user;
          }
        } catch (error) {
          console.log(
            error instanceof Error ? error?.message : "sign in callback failed."
          );
        }
      }
      return user;
    },
  },
};
const handler = NextAuth(options);

export { handler as GET, handler as POST };
