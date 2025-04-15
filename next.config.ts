import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.example.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during production builds
  },
};

export default nextConfig;
