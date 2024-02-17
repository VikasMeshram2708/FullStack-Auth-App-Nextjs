"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Navbar() {
  const { status, data } = useSession();
  useEffect(() => {
    console.log('user-data', data)
  },[data])
  return (
    <nav>
      <div className="flex sm:justify-between gap-5 flex-wrap rounded mt-5 p-3 items-center outline max-w-[90%] mx-auto">
        <h1 className="text-3xl font-bold">
          <Link href="/">iBook</Link>
        </h1>
        {status === "authenticated" ? (
          <button
            onClick={() => {
              signOut();
            }}
            type="button"
            className="text-lg btn btn-error btn-lg"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              signIn();
            }}
            type="button"
            className="text-lg btn btn-success btn-lg"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}
