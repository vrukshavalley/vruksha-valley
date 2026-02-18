import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 95],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'loremflickr.com', pathname: '/**' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/((?!maintenance|_next/static|_next/image|favicon.ico).*)',
        destination: '/maintenance',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
