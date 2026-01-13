import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Setup Inter for clean body text
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

// Setup Playfair Display for luxury headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata = {
  title: "Vruksha Valley Resort | A Place to Pause",
  description: "Luxury nature resort in Kalasa, Chikmagalur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}