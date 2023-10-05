"use client";

import React from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import axios from "axios";

const ProfilePage = () => {
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
  return (
    <div>
      <h1 className="text-center">ProfilePage</h1>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleLogout}
          className="bg-[#F41945] px-4 py-2 text-white font-semibold text-lg rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
