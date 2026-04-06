import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Roboto } from "next/font/google";
import SEO from "@/components/Seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO
        title="Sakil Sazzad Joy | Software Engineer"
        description="Full-stack developer building scalable apps, dashboards, and AI-powered systems using Next.js, MERN, and modern web tech."
        url="https://ssjoy.xyz"
      />
      <Component {...pageProps} />
    </>
  );
}
