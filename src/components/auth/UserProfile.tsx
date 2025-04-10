import { PlanBadge } from "@/components/PlanBadge";

export const UserProfile = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Avatar + name etc */}
      <div className="text-sm">
        <div className="font-medium">Pratyush Jain</div>
        <PlanBadge />
      </div>
    </div>
  );
};
