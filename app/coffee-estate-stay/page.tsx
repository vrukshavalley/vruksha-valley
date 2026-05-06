import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Coffee Estate Stay in Kalasa | Vruksha Valley Resort",
  description: "Stay on a working coffee estate in Kalasa, Chikmagalur. Vruksha Valley offers a unique coffee estate homestay experience with luxury cottages, estate tours, and Malnad cuisine.",
  keywords: [
    "coffee estate stay Kalasa", "coffee estate homestay Kalasa",
    "coffee plantation stay Chikmagalur", "coffee estate resort Karnataka",
    "Vruksha Valley coffee estate", "homestay on coffee estate Western Ghats",
    "coffee estate accommodation Kalasa"
  ],
  alternates: { canonical: '/coffee-estate-stay' },
  openGraph: {
    title: "Coffee Estate Stay in Kalasa | Vruksha Valley Resort",
    description: "Live on a working coffee estate. Guided tours, fresh estate coffee, and luxury cottages at Vruksha Valley, Kalasa, Chikmagalur.",
    url: 'https://vrukshavalley.com/coffee-estate-stay',
    images: [{ url: '/vrukshavalley-view.webp', width: 1200, height: 630, alt: 'Coffee estate stay Kalasa Vruksha Valley' }],
  },
};

export default function CoffeeEstateStay() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen">

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A2F1F]/50 z-10" />
          <Image src="/hero.webp" fill className="object-cover" alt="Coffee estate stay Kalasa — Vruksha Valley" priority />
        </div>
        <div className="relative z-20 text-center px-6">
          <p className="text-[#C5A059] text-xs uppercase tracking-[0.5em] font-bold mb-4">Working Coffee Estate, Kalasa</p>
          <h1 className="text-[#FDFBF7] text-4xl md:text-7xl font-serif leading-tight drop-shadow-2xl">
            Coffee Estate Stay
          </h1>
          <div className="w-20 h-[2px] bg-[#C5A059] mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto space-y-8 text-[#0A2F1F]/80 font-serif text-lg leading-relaxed">
        <h2 className="text-3xl md:text-5xl text-[#0A2F1F] font-serif">Wake Up on a Coffee Estate in Kalasa</h2>
        <p>Vruksha Valley is built on a working coffee estate in Kalasa, Chikmagalur — one of the most celebrated coffee-growing regions in India. A stay at Vruksha Valley is not just a resort experience; it is an immersion into the life and rhythm of a Malnad coffee plantation.</p>
        <p>The Vruksha Valley estate grows both Arabica and Robusta varieties of coffee. Guests can walk through the plantation at any time of day, watch the cherries ripen on the bush, and understand the full journey of coffee from seed to cup. It is an experience that city life can never replicate.</p>
        <h3 className="text-2xl text-[#0A2F1F] font-serif">The Coffee Estate Experience at Vruksha Valley</h3>
        <ul className="space-y-3 list-none">
          {[
            "Guided coffee estate tour with our estate team",
            "Learn the difference between Arabica and Robusta cultivation",
            "Watch coffee processing — pulping, fermentation, drying",
            "Freshly brewed estate coffee served every morning",
            "Purchase freshly roasted Vruksha Valley estate coffee beans to take home",
            "Walk the estate trails and spot wildlife — hornbills, squirrels, and more",
            "800m from Soormane Falls through the estate trail"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 italic">
              <span className="w-6 h-[1px] bg-[#C5A059] mt-3 shrink-0"></span>{item}
            </li>
          ))}
        </ul>
        <p>The Vruksha Valley coffee estate stay combines the authenticity of a Malnad homestay with the comfort of a luxury resort. You sleep in a premium cottage, eat farm-to-table food, and wake up to the sound of the Western Ghats — with freshly brewed estate coffee waiting for you.</p>
      </section>

      <section className="py-16 bg-[#0A2F1F] text-[#FDFBF7] text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-serif">Book Your Coffee Estate Stay</h2>
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
