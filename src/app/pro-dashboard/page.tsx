import { checkUserPlan } from "@/lib/checkUserPlan";
import { redirect } from "next/navigation";

export default async function ProDashboardPage() {
  const hasAccess = await checkUserPlan("pro");

  if (!hasAccess) {
    redirect("/upgrade"); // Or show paywall
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">✨ Pro Dashboard</h1>
      <p>Welcome, Pro user! 🎉</p>
    </div>
  );
}
