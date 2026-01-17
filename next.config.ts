import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows the use of quality={95} in your Image components for crisp photos
    qualities: [25, 50, 75, 95],
    
    // Keeps support for your current placeholder images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;