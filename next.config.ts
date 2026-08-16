import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // vinext's local Cloudflare preview does not expose the production ASSETS
    // binding to Next's image optimizer. Serve our project-owned assets directly.
    unoptimized: true,
  },
};

export default nextConfig;
