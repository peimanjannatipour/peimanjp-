import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return ["/humans.txt", "/llms.txt", "/llms-full.txt"].map((source) => ({
      source,
      headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
    }));
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
