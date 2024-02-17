import { AppProps } from "next/app";
import React from "react";

export default function AuthProvider({ Component, pageProps }: AppProps) {
  return (
    <section>
      <Component {...pageProps} />
    </section>
  );
}
