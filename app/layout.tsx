import type { Metadata } from "next";

import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: '--font-lato',
});

export const metadata: Metadata = {

  title: "Vruksha Valley | Best Resort in Kalasa, Chikmagalur",
  
  description: "Escape to Vruksha Valley, a luxury coffee plantation resort in Kalasa. Experience private cottages, nature treks near Soormane Falls, and authentic Malnad hospitality.",
  
  icons: {
    icon: '/icon.png', 
  },
  
  keywords: ["Resort in Kalasa", "Homestay in Chikmagalur", "Vruksha Valley", "Plantation Stay", "Soormane Falls Stay", "Malnad Cuisine"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en" className="scroll-smooth">
    
      <body className={lato.className}>{children}</body>
    </html>
  );
}