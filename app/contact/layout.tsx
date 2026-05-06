import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact & Bookings | Vruksha Valley Resort Kalasa, Chikmagalur",
  description: "Book your stay at Vruksha Valley, a luxury nature resort in Kalasa, Chikmagalur. Call or WhatsApp us for cottages, trekking packages, and Horanadu pilgrimage stays.",
  keywords: [
    "book resort Kalasa", "Vruksha Valley contact", "Chikmagalur resort booking",
    "Kalasa cottage reservation", "Horanadu temple stay booking",
    "Soormane falls resort contact", "Western Ghats resort inquiry",
    "Malnad resort WhatsApp", "Netravati trek package", "Kyatanamakki jeep safari booking",
    "resort in Kalasa", "resort near Soormane Falls",
    "Chikmagalur luxury stay", "coffee estate homestay Kalasa"
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: "Contact & Bookings | Vruksha Valley Resort Kalasa",
    description: "Book cottages, trekking packages, or pilgrimage stays at Vruksha Valley. WhatsApp or call us directly.",
    url: 'https://vrukshavalley.com/contact',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Vruksha Valley Resort Contact' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact & Bookings | Vruksha Valley Resort Kalasa",
    description: "Book cottages, trekking packages, or pilgrimage stays at Vruksha Valley.",
    images: ['/logo.png'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
