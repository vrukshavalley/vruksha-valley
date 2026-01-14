import type { Metadata } from "next";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ 
        margin: 0, 
        backgroundColor: "#FDFBF7",
        color: "#064e3b",
        fontFamily: "'Playfair Display', serif" 
      }}>
        {children}
      </body>
    </html>
  );
}