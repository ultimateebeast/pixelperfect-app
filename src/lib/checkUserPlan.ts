import { auth, clerkClient } from "@clerk/nextjs/server";

export async function checkUserPlan(requiredPlan: "pro" | "enterprise") {
  const { userId } = auth();
  if (!userId) return false;

  const user = await clerkClient.users.getUser(userId);
  const plan = user?.publicMetadata?.plan;

  return (
    plan === requiredPlan || (requiredPlan === "pro" && plan === "enterprise")
  );
}
