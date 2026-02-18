import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 95],
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
  
  async redirects() {
    return [
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
        destination: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff', // Temporary coffee image
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
