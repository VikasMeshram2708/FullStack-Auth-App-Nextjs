"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data } = useSession();
  return (
    <main className="min-h-screen flex items-center justify-center">
      {data && (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">{data?.user?.name}</h1>
          <div className="flex items-center">
            <div className="mr-4">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  alt={data?.user?.name!}
                  src={data?.user?.image!}
                />
              </div>
            </div>
            <div>
              <p className="italic">{data?.user?.email}</p>
            </div>
          </div>
        </div>
      )}

      {!data && <p className="text-3xl font-semibold">Please Login First!</p>}
    </main>
  );
}
