// components/ExportButton.tsx

"use client";

import { useUserPlan } from "@/components/hooks/useUserPlan";
import { hasAccess } from "@/utils/featureAccess";

export default function ExportButton() {
  const plan = useUserPlan();

  if (!hasAccess(plan, "code_export")) {
    return (
      <div className="text-sm text-yellow-400">
        🚫 Upgrade to Pro to use this feature.
      </div>
    );
  }

  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded">
      Export Code
    </button>
  );
}
