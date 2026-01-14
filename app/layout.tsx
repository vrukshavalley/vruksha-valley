import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vruksha Valley Resort",
  description: "Luxury Stay in the lap of nature",
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