import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Vruksha Valley | Best Resort in Kalasa near Hornadu & Kyatanamakki",
  description: "Experience Vruksha Valley, the premier luxury resort in Kalasa, Chikmagalur. Ideally located for Hornadu pilgrims, Netravati trekkers, and Kyatanamakki Jeep safari lovers. Just 800m from Soormane Falls. Book your nature retreat today!",
  keywords: [
    "Resort in Kalasa", 
    "Stay near Hornadu Temple", 
    "Netravati Peak Trek stay", 
    "Kyatanamakki Jeep Safari", 
    "Chikmagalur Luxury Resort",
    "Soormane Falls stay"
  ],
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-[#FDFBF7]">
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