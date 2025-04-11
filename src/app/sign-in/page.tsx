"use client";

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6">
      <div className="max-w-6xl w-full bg-white/5 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-white/10">
        {/* Left: Branding & Intro */}
        <div className="md:w-1/2 w-full bg-gradient-to-b from-[#1e1e2f] to-[#141422] text-white p-10 flex flex-col justify-center relative">
          <div className="absolute top-6 left-6">
            <Image src="/Pixel.svg" alt="Logo" width={50} height={50} />
          </div>

          <h1 className="text-4xl font-extrabold mb-4 mt-12 md:mt-0">
            Welcome to PixelPerfect
          </h1>
          <p className="text-lg text-neutral-300">
            Convert your Figma designs to React code in seconds. Get started by
            signing in and exploring powerful tools tailored for developers and
            designers.
          </p>

          <div className="mt-10 text-sm text-neutral-400">
            Don&apos;t have an account?{" "}
            <a href="/sign-up" className="text-indigo-400 hover:underline">
              Create one now →
            </a>
          </div>
        </div>

        {/* Right: SignIn Form */}
        <div className="md:w-1/2 w-full p-8 md:p-16 bg-white dark:bg-[#121212]">
          <SignIn
            appearance={{
              elements: {
                card: "shadow-none bg-transparent",
                headerTitle:
                  "text-2xl font-bold text-neutral-900 dark:text-white mb-6",
                headerSubtitle:
                  "text-sm text-neutral-500 dark:text-neutral-400",
                formFieldLabel:
                  "text-sm font-medium text-neutral-700 dark:text-neutral-300",
                formFieldInput:
                  "w-full mt-1 px-4 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",
                socialButtonsBlockButton:
                  "bg-indigo-600 text-white w-full py-2 rounded-md hover:bg-indigo-700",
                footerActionLink:
                  "text-indigo-600 dark:text-indigo-400 hover:underline",
              },
              variables: {
                colorPrimary: "#6366f1",
              },
            }}
            path="/sign-in"
            routing="path"
            signUpUrl="/sign-up"
          />
        </div>
      </div>
    </div>
  );
}
