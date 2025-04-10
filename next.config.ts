import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.clerk.com"],
  },
  i18n: {
    locales: ["en", "hi"],
    defaultLocale: "en",
  },
};

export default nextConfig;
