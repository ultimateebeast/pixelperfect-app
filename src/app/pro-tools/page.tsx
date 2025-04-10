import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ProToolsPage() {
  const user = await currentUser();
  const plan = user?.publicMetadata?.plan ?? "free";

  if (plan === "free") {
    redirect("/upgrade");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">🔧 Pro Tools Dashboard</h1>
        <p className="text-gray-700">
          Welcome, {user?.firstName}! You have access to Pro-only features.
        </p>

        {/* Future tools can go here */}
        <div className="mt-6 text-sm text-gray-500">
          More Pro features coming soon...
        </div>
      </div>
    </div>
  );
}
