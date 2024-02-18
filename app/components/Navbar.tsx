"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Navbar() {
  const { status, data } = useSession();
  useEffect(() => {
    console.log("user-data", data);
  }, [data]);
  return (
    <nav className="navbar shadow-lg bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Vikas MeshRAM
        </Link>
      </div>
      <div className="flex-none gap-2">
        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div> */}
        <button
          onClick={() => signIn("google")}
          type="button"
          className="btn btn-lg btn-accent"
        >
          {status === "loading" ? "Loading..." : "Sign In"}
        </button>
        {status === "authenticated" && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  width={500}
                  height={500}
                  alt={data.user?.name!}
                  src={data.user?.image!}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button
                  onClick={() => signOut()}
                  type="button"
                  className="btn btn-error btn-sm"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
