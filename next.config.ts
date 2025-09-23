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
      {
        source: "/news-events/wft57-trinidad-visitation-2024",
        destination: "/news/trinidad-trip",
        permanent: true,
      },
      {
        source: "/news-events/wft57-trinidad-visitation-2025",
        destination: "/news/trinidad-trip",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
