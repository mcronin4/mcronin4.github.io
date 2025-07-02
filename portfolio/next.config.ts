import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/mcronin4.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mcronin4.github.io' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
