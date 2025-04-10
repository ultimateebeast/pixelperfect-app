import { User } from "@prisma/client";

export function checkUserPlan(
  user: User | null,
  requiredPlan: "free" | "pro" | "enterprise"
) {
  if (!user) return false;

  const plans = ["free", "pro", "enterprise"];
  const userLevel = plans.indexOf(user.plan);
  const requiredLevel = plans.indexOf(requiredPlan);

  return userLevel >= requiredLevel;
}
