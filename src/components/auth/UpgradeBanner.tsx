// components/auth/UpgradeBanner.tsx
"use client";
import Link from "next/link";

export function UpgradeBanner({ plan }: { plan: string }) {
  if (plan !== "free") return null;

  return (
    <div className="bg-yellow-100 p-4 rounded-md shadow-sm mt-4 text-black">
      <p>
        You are currently on the <strong>Free</strong> plan.
        <Link href="/upgrade" className="ml-2 underline text-blue-600">
          Upgrade to Pro
        </Link>
      </p>
    </div>
  );
}
