import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "@/helpers/contants";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "creds",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Enter Email",
        },
        password: {
          label: "Password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials?.email || !credentials?.password) {
          return null;
        }
        const user = users.find((item) => item?.email === credentials?.email);
        if (user?.password == credentials?.password) {
          return user;
        }
        return null;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);


export {handler as GET, handler as POST};