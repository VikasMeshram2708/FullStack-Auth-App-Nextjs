"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const ProfilePage = () => {
  const [fetchedInfo, setFetchedInfo] = useState("")
  const router = useRouter();
  async function handleLogout() {
    try {
      const response = await axios.get("/api/users/logout");
      Swal.fire({
        icon: "success",
        title: "Logout Successfully",
        text: "You Have Successfully Logged Out",
      });
      router.push("/login");
    } catch (error) {
      const errorMessage = error as Error;

      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage.message,
      });
    }
  }
  async function getUserDetails () {
    const response = await axios.get('/api/users/me')
    console.log('client-receoved-data',response.data);
    setFetchedInfo(response.data.data._id)
  }
  console.log('fetched-data-id-client',fetchedInfo)
  return (
    <div>
      <h1 className="text-center">ProfilePage</h1>
      <h1 className="text-center font-semibold text-2xl mt-10">
        {
        fetchedInfo===""
         ?
        "nothing..." :
        <Link href={`/profile/${fetchedInfo}`}>
          <p className="bg-pink-500 text-white text-lg">
            {fetchedInfo}
          </p>
          </Link>
        }
        
        </h1>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleLogout}
          className="bg-[#F41945] px-4 py-2 text-white font-semibold text-lg rounded-lg"
        >
          Logout
        </button>

        <button
          onClick={getUserDetails}
          className="bg-[#F41945] px-4 py-2 mx-5 text-white font-semibold text-lg rounded-lg"
        >
          Get User Details
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
