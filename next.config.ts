import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Force the project root to this directory to avoid lockfile-root mis-detection in dev
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/news-events",
        destination: "/news",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
