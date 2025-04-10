import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixelPerfect",
  description: "Transform Figma designs into pixel-perfect React code.",
  icons: {
    icon: "/Pixel.svg", // make sure this exists in your /public folder
  },
  themeColor: "#000000", // for mobile status bar
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/Pixel.svg" type="image/svg+xml" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
