import { useUser } from "@clerk/nextjs";

export function usePlan() {
  const { user } = useUser();
  const plan = (user?.publicMetadata?.plan as string) ?? "free";

  return {
    plan,
    isFree: plan === "free",
    isPro: plan === "pro",
    isEnterprise: plan === "enterprise",
  };
}
