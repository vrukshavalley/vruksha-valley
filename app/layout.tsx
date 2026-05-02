import type { Metadata } from "next";
import Script from 'next/script';
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vruksha Valley | Best Luxury Resort in Kalasa, Chikmagalur",
  description: "A premier luxury resort in Kalasa, Chikmagalur. Just 800m from Soormane Falls. Ideally located for Horanadu pilgrims, Netravati trekkers, and Kyatanamakki Jeep safari lovers.",
  metadataBase: new URL('https://vrukshavalley.com'),
  alternates: { canonical: '/' },
  keywords: [
    "Vruksha Valley", "luxury resort Kalasa", "Chikmagalur resort", "best resort Kalasa",
    "nature resort Western Ghats", "Soormane Falls stay", "Horanadu temple resort",
    "Netravati peak trekking", "Kyatanamakki jeep safari", "coffee estate stay Karnataka",
    "Malnad resort", "eco resort Chikmagalur", "cottage stay Kalasa",
    "resort near Horanadu", "Western Ghats luxury hotel", "Kudremukh resort",
    "Kalasa Karnataka tourism", "Guddemakki resort"
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Vruksha Valley | Best Luxury Nature Stay in Kalasa, Chikmagalur",
    description: "Nestled in the coffee estates of Kalasa, Chikmagalur. Your gateway to Kyatanamakki and Horanadu. 800m from Soormane Falls.",
    url: 'https://vrukshavalley.com',
    siteName: 'Vruksha Valley',
    images: [
      {
        url: '/vrukshavalley-view.webp',
        width: 1200,
        height: 630,
        alt: 'Aerial view of Vruksha Valley Resort in Kalasa, Chikmagalur',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vruksha Valley | Luxury Nature Resort in Kalasa, Chikmagalur",
    description: "800m from Soormane Falls. Gateway to Horanadu, Netravati Peak & Kyatanamakki Jeep Safari. Book your escape into the Western Ghats.",
    images: ['/vrukshavalley-view.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Resort",
    "name": "Vruksha Valley",
    "description": "Best luxury nature resort in Kalasa, Chikmagalur. 800m from Soormane Falls. Gateway to Horanadu Temple, Netravati Peak, and Kyatanamakki Jeep Safari.",
    "image": [
      "https://vrukshavalley.com/vrukshavalley-view.webp",
      "https://vrukshavalley.com/hero.webp",
      "https://vrukshavalley.com/logo.png"
    ],
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
    "telephone": ["+918217764481", "+916364364481"],
    "priceRange": "₹₹₹",
    "checkinTime": "12:00",
    "checkoutTime": "11:00",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "120",
      "bestRating": "5",
      "worstRating": "1"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Coffee Plantation Tour", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Farm-to-Table Dining", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Trekking Packages", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Jeep Safari", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Indoor Games", "value": true }
    ],
    "hasMap": "https://maps.google.com/?q=Vruksha+Valley+Kalasa+Karnataka",
    "servesCuisine": "Malnad, South Indian",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, UPI",
    "touristType": ["Nature Lovers", "Trekkers", "Pilgrims", "Families", "Couples"],
    "sameAs": [
      "https://www.instagram.com/vrukshavalley"
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
