import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Chikmagalur Luxury Resort | Vruksha Valley in Kalasa",
  description: "Vruksha Valley is a premier luxury resort in Chikmagalur district, located in Kalasa. Experience luxury cottages, coffee estate stays, and nature immersion in the Western Ghats.",
  keywords: [
    "Chikmagalur luxury resort", "luxury resort Chikmagalur", "Chikmagalur luxury stay",
    "best luxury resort Chikmagalur", "Chikmagalur premium resort",
    "Vruksha Valley Chikmagalur", "Western Ghats luxury resort Karnataka"
  ],
  alternates: { canonical: '/chikmagalur-luxury-resort' },
  openGraph: {
    title: "Chikmagalur Luxury Resort | Vruksha Valley in Kalasa",
    description: "Premium luxury resort in Chikmagalur. Cottages on a coffee estate, swimming pool, Malnad cuisine, and access to Western Ghats experiences.",
    url: 'https://vrukshavalley.com/chikmagalur-luxury-resort',
    images: [{ url: '/vrukshavalley-view.webp', width: 1200, height: 630, alt: 'Chikmagalur luxury resort Vruksha Valley' }],
  },
};

export default function ChikmagalurLuxuryResort() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen">

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A2F1F]/50 z-10" />
          <Image src="/vrukshavalley-view.webp" fill className="object-cover" alt="Chikmagalur luxury resort — Vruksha Valley" priority />
        </div>
        <div className="relative z-20 text-center px-6">
          <p className="text-[#C5A059] text-xs uppercase tracking-[0.5em] font-bold mb-4">Chikmagalur District, Karnataka</p>
          <h1 className="text-[#FDFBF7] text-4xl md:text-7xl font-serif leading-tight drop-shadow-2xl">
            Chikmagalur Luxury Resort
          </h1>
          <div className="w-20 h-[2px] bg-[#C5A059] mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto space-y-8 text-[#0A2F1F]/80 font-serif text-lg leading-relaxed">
        <h2 className="text-3xl md:text-5xl text-[#0A2F1F] font-serif">Vruksha Valley — Luxury Redefined in Chikmagalur</h2>
        <p>When people search for a luxury resort in Chikmagalur, they often find options that are either too commercial or too far from the natural beauty the region is known for. Vruksha Valley is different. Located in Kalasa — the most scenic corner of the Chikmagalur district — Vruksha Valley offers genuine luxury rooted in nature.</p>
        <p>Our philosophy at Vruksha Valley is "Low Impact, High Experience." Every cottage is designed to blend into the coffee estate canopy. Every meal is sourced from our farm. Every activity takes you deeper into the Western Ghats — not further from it.</p>
        <h3 className="text-2xl text-[#0A2F1F] font-serif">Luxury Features at Vruksha Valley</h3>
        <ul className="space-y-3 list-none">
          {[
            "6 signature cottages with premium finishes and forest views",
            "Private swimming pool set within the estate",
            "Farm-to-table Malnad cuisine prepared fresh daily",
            "Guided coffee estate tours by our estate team",
            "Curated trekking and safari experiences",
            "Direct access to Soormane Falls — 800m from your cottage",
            "15km from Horanadu Annapoorneshwari Temple"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 italic">
              <span className="w-6 h-[1px] bg-[#C5A059] mt-3 shrink-0"></span>{item}
            </li>
          ))}
        </ul>
        <p>Vruksha Valley is the luxury resort in Chikmagalur that doesn't compromise between comfort and authenticity. You get both — and the Western Ghats as your backyard.</p>
      </section>

      <section className="py-16 bg-[#0A2F1F] text-[#FDFBF7] text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-serif">Book Your Chikmagalur Luxury Stay</h2>
          <p className="opacity-70 font-serif italic">Vruksha Valley — Kalasa, Chikmagalur.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/918217764481" target="_blank" className="px-10 py-4 bg-[#C5A059] text-[#0A2F1F] uppercase tracking-widest font-bold text-xs hover:bg-white transition-all">Book on WhatsApp</a>
            <Link href="/contact" className="px-10 py-4 border border-[#C5A059] text-[#C5A059] uppercase tracking-widest font-bold text-xs hover:bg-[#C5A059] hover:text-[#0A2F1F] transition-all">Send Inquiry</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
