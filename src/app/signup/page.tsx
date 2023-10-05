"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import axios from "axios";

interface IUser {
  username: string;
  email: string;
  password: string;
}
const SignUpPage = () => {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });
  async function onSignUp(event: any) {
    try {
      event.preventDefault();
      setLoading(true);

      const response = await axios.post("/api/users/signup", userData);
      console.log(response.data);

      console.log(userData);
      Swal.fire({
        icon: "success",
        title: "Registration Completed Successfully",
        text: "User Is Registered",
      });
      router.push("/login");
    } catch (error) {
      const errorMessage = error as Error;

      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage.message,
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (
      userData.email.length > 0 &&
      userData.password.length > 0 &&
      userData.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [userData]); // how often do we want to run this useEffect
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1C26]">
      <div className="max-w-md w-full p-6 bg-[#202330] rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6 text-white">
          {loading ? "Processing..." : "Sign Up"}
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
            {buttonDisabled ? "No Sign Up" : "Sign Up"}
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
