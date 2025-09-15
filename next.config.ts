import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Force the project root to this directory to avoid lockfile-root mis-detection in dev
    root: __dirname,
  },
};

export default nextConfig;
