import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Bypass ESLint errors during build
  },
};

export default nextConfig;
