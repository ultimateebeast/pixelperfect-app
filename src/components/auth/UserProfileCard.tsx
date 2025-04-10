"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function UserProfilePage() {
  const { user, isLoaded } = useUser();

  // Mock data
  const importedFiles = [
    "LandingPage.fig",
    "DashboardUI.fig",
    "EcommerceScreen.fig",
  ];

  const extractedComponents = [
    "Navbar.tsx",
    "ProductCard.tsx",
    "SidebarMenu.tsx",
  ];

  const activityLog = [
    "Uploaded Figma file: LandingPage.fig",
    "Extracted 3 components from DashboardUI.fig",
    "Signed in from new device",
    "Downloaded code bundle",
    "Viewed 30-day usage stats",
  ];

  if (!isLoaded || !user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-10 text-center space-y-8">
          {/* Profile Info */}
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={user.imageUrl}
              alt="Profile Photo"
              width={100}
              height={100}
              className="rounded-full border-2 border-white"
            />
            <div>
              <h2 className="text-3xl font-semibold">{user.fullName}</h2>
              <p className="text-sm text-gray-400">{user.emailAddresses[0]?.emailAddress}</p>
            </div>
          </div>

          {/* Imported Files */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">📁 Imported Files</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {importedFiles.map((file, index) => (
                <li key={index}>{file}</li>
              ))}
            </ul>
          </div>

          {/* Extracted Components */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">🧩 Extracted Components</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {extractedComponents.map((comp, index) => (
                <li key={index}>{comp}</li>
              ))}
            </ul>
          </div>

          {/* Activity Log */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">📜 Recent Activity</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {activityLog.map((log, index) => (
                <li key={index}>{log}</li>
              ))}
            </ul>
          </div>

          {/* Usage Chart */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">📈 30-Day Site Usage</h3>
            <Image
              src="/mock_usage_chart_dark.png"
              alt="30-Day Usage"
              width={600}
              height={200}
              className="mx-auto rounded-md border border-white/10"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
