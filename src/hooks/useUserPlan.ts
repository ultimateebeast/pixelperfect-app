// hooks/useUserPlan.ts

import { useUser } from "@clerk/nextjs";

export const useUserPlan = (): string => {
  const { user, isLoaded } = useUser();

  const plan = (user?.publicMetadata?.plan as string) ?? "free";

  return isLoaded ? plan : "free";
};
