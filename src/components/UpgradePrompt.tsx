// components/UpgradePrompt.tsx

import Link from "next/link";

export default function UpgradePrompt({ feature }: { feature: string }) {
  return (
    <div className="text-sm text-yellow-500">
      🚀 The feature <strong>{feature}</strong> is available in Pro/Enterprise.
      <Link href="/pricing" className="ml-2 underline hover:text-yellow-300">
        Upgrade your plan →
      </Link>
    </div>
  );
}
