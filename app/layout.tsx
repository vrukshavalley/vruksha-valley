import type { Metadata } from "next";
import Script from 'next/script';
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vruksha Valley | Best Resort in Kalasa near Hornadu & Kyatanamakki",
  description: "Experience Vruksha Valley, the premier luxury resort in Kalasa, Chikmagalur. Ideally located for Hornadu pilgrims, Netravati trekkers, and Kyatanamakki Jeep safari lovers. Just 800m from Soormane Falls.",
  metadataBase: new URL('https://vrukshavalley.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vruksha Valley | Luxury Nature Stay in Kalasa",
    description: "Nestled in the coffee estates of Kalasa, Chikmagalur. Your gateway to Kyatanamakki and Hornadu.",
    url: 'https://vrukshavalley.com',
    siteName: 'Vruksha Valley',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Vruksha Valley Resort View',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Vruksha Valley",
    "description": "Luxury nature resort in Kalasa, Chikmagalur. Near Hornadu Temple and Soormane Falls.",
    "image": "https://vrukshavalley.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Soormane Falls Road, Guddemakki",
      "addressLocality": "Kalasa",
      "addressRegion": "Karnataka",
      "postalCode": "577124",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.2365,
      "longitude": 75.3678
    },
    "url": "https://vrukshavalley.com",
    "telephone": "+918217764481",
    "priceRange": "$$",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Coffee Plantation", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className="bg-[#FDFBF7]">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.className} bg-[#FDFBF7] m-0 p-0 overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}