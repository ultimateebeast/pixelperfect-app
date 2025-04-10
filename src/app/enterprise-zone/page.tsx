import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function EnterpriseZonePage() {
  const user = await currentUser();
  const plan = user?.publicMetadata?.plan ?? "free";

  if (plan !== "enterprise") {
    redirect("/upgrade");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-900 to-indigo-800 px-4 text-white">
      <div className="max-w-xl w-full shadow-xl rounded-xl p-8 bg-white/5 backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-4">🏢 Enterprise Zone</h1>
        <p className="text-white/80">
          Welcome, {user?.firstName}! You have exclusive access to
          enterprise-level features.
        </p>

        {/* Enterprise features placeholder */}
        <div className="mt-6 text-sm text-white/60">
          Enterprise features coming soon...
        </div>
      </div>
    </div>
  );
}
