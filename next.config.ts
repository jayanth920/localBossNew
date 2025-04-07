import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['res.cloudinary.com', "www.example.com"], // Add your external domain here
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during production builds
  },
};

export default nextConfig;
