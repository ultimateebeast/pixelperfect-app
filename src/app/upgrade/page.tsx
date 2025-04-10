"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function UpgradePage() {
  const { user } = useUser();
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-lg p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-4">🚀 Upgrade Your Plan</h1>
        <p className="mb-6 text-white/80">
          Hey {user?.firstName || "there"}, you're currently on the{" "}
          <strong>{user?.publicMetadata?.plan ?? "free"}</strong> plan. To
          access premium tools, consider upgrading your account!
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => alert("Mock upgrade to Pro")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Upgrade to Pro
          </button>
          <button
            onClick={() => handleUpgrade()("Mock upgrade to Enterprise")}
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
            Upgrade to Enterprise
          </button>
        </div>

        <button
          onClick={() => router.back()}
          className="mt-6 text-sm text-gray-300 hover:underline">
          ⬅️ Go Back
        </button>
      </div>
    </div>
  );
}
