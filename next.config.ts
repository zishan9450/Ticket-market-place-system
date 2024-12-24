import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "doting-corgi-925.convex.cloud",
        protocol: "https",
      },
      {
        hostname: "efficient-swordfish-631.convex.cloud",
        protocol: "https",
      }
    ]
  }
};

export default nextConfig;
