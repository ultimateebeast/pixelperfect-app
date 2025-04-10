import { usePlan } from "@/hooks/usePlan";

export const PlanBadge = () => {
  const { plan } = usePlan();

  const colorMap: Record<string, string> = {
    free: "bg-gray-400 text-white",
    pro: "bg-blue-600 text-white",
    enterprise: "bg-yellow-500 text-black",
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-semibold ${colorMap[plan]}`}>
      {plan.toUpperCase()}
    </span>
  );
};
