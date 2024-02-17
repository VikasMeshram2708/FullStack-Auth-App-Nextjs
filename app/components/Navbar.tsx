"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="flex sm:justify-between gap-5 flex-wrap rounded mt-5 p-3 items-center outline max-w-[90%] mx-auto">
        <h1 className="text-3xl font-bold">
          <Link href="/">iBook</Link>
        </h1>
        <button
          onClick={() => {
            signIn();
          }}
          type="button"
          className="text-lg btn btn-success btn-lg"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}
