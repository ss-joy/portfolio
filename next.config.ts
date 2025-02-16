import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "twig.symfony.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
