import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'red-calm-bat-318.mypinata.cloud',
      },
    ],
  },
};
export default nextConfig;
