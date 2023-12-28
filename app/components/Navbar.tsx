"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Navbar() {

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <p className="btn btn-ghost text-xl">
          <Link href="/">Authorizer</Link>
        </p>
      </div>
      <div className="flex-none lg:btn-wide">
        <button
          onClick={() => {
            signIn();
          }}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-error"
        >
          Login
        </button>
      </div>
    </div>
  );
}
