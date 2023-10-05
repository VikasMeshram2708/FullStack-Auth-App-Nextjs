"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface IUser {
  username: string;
  email: string;
  password: string;
}
const SignUpPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });
  async function onSignUp(event:any) {
    event.preventDefault();
    console.log(userData);
    router.push("/login");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1C26]">
      <div className="max-w-md w-full p-6 bg-[#202330] rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6 text-white">
          Sign Up
        </h1>
        <form onSubmit={onSignUp}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400">
              UserName:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={userData.username}
              onChange={(event: FormEvent<HTMLInputElement>) =>
                setUserData({
                  ...userData,
                  username: event.currentTarget.value,
                })
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter your username here..."
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={userData.email}
              onChange={(event: FormEvent<HTMLInputElement>) => {
                setUserData({
                  ...userData,
                  email: event.currentTarget.value,
                });
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter your email here..."
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-400">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={userData.password}
              onChange={(event: FormEvent<HTMLInputElement>) => {
                setUserData({
                  ...userData,
                  password: event.currentTarget.value,
                });
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter your password here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F41945] text-white py-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:bg-pink-600"
          >
            Sign Up
          </button>
          <Link href={"/login"}>
            <p className="text-sm font-semibold p-1">Already a User?</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
