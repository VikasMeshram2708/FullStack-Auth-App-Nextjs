"use client";

import { useSession } from "next-auth/react";

export default  function Home() {
  const { data } = useSession();

  return (
    <main className="">
      <h1>Hello, World</h1>
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}
