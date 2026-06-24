import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.mp4': {
        type: 'asset',
      },
      '*.png': {
        type: 'asset',
      },
      '*.jpg': {
        type: 'asset',
      },
      '*.jpeg': {
        type: 'asset',
      },
    },
  },
};

export default nextConfig;