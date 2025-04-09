"use client"; 

import dynamic from "next/dynamic";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const UserProfileCard = dynamic(
  () => import("@/components/auth/UserProfileCard"),
  { ssr: false }
);

export default function ProfilePage() {
  return (
    <>
      <SignedIn>
        <main className="p-8">
          <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
          <UserProfileCard />
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
