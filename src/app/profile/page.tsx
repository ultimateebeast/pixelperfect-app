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
        <main>
          <UserProfileCard />
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
