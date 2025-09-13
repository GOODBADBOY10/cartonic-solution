import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      rules: {
        '*.css': {
          loaders: ['@tailwindcss/vite'],
        },
      },
    },
  },
};

export default nextConfig;