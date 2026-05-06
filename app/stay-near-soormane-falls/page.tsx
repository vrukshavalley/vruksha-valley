import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Stay Near Soormane Falls | Vruksha Valley Resort Kalasa",
  description: "Vruksha Valley is the closest resort to Soormane Falls — just 800m away. Stay in luxury cottages and walk to the waterfall through our coffee estate in Kalasa, Chikmagalur.",
  keywords: [
    "stay near Soormane Falls", "resort near Soormane Falls", "Soormane Falls accommodation",
    "hotel near Soormane Falls Kalasa", "Soormane Falls resort Chikmagalur",
    "Vruksha Valley Soormane", "closest stay to Soormane Falls"
  ],
  alternates: { canonical: '/stay-near-soormane-falls' },
  openGraph: {
    title: "Stay Near Soormane Falls | Vruksha Valley Resort Kalasa",
    description: "Just 800m from Soormane Falls. Walk to the waterfall through our coffee estate. Luxury resort stay in Kalasa, Chikmagalur.",
    url: 'https://vrukshavalley.com/stay-near-soormane-falls',
    images: [{ url: '/vrukshavalley-view.webp', width: 1200, height: 630, alt: 'Stay near Soormane Falls Vruksha Valley' }],
  },
};

export default function StayNearSoormaneFalls() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen">

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A2F1F]/50 z-10" />
          <Image src="/hero.webp" fill className="object-cover" alt="Stay near Soormane Falls — Vruksha Valley Resort Kalasa" priority />
        </div>
        <div className="relative z-20 text-center px-6">
          <p className="text-[#C5A059] text-xs uppercase tracking-[0.5em] font-bold mb-4">800m from the Falls</p>
          <h1 className="text-[#FDFBF7] text-4xl md:text-7xl font-serif leading-tight drop-shadow-2xl">
            Stay Near Soormane Falls
          </h1>
          <div className="w-20 h-[2px] bg-[#C5A059] mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto space-y-8 text-[#0A2F1F]/80 font-serif text-lg leading-relaxed">
        <h2 className="text-3xl md:text-5xl text-[#0A2F1F] font-serif">The Closest Resort to Soormane Falls</h2>
        <p>Vruksha Valley is the closest luxury resort to Soormane Falls, located just 800 metres away in Kalasa, Chikmagalur. No other stay option gives you this level of direct access to one of the Western Ghats' most pristine waterfalls.</p>
        <p>Soormane Falls is a hidden gem — a 25-foot waterfall dropping into a natural rock pool, surrounded by dense shola forest. Unlike Jog Falls or Abbey Falls, Soormane has no crowds, no ticket counters, and no noise. Just you, the water, and the forest.</p>
        <h3 className="text-2xl text-[#0A2F1F] font-serif">The Vruksha Valley Experience</h3>
        <p>From your cottage at Vruksha Valley, the walk to Soormane Falls takes just 10–15 minutes through our coffee estate. We recommend the early morning walk — the mist is still on the valley, the birds are awake, and the falls are at their most magical before the day heats up.</p>
        <p>Vruksha Valley provides rubber slippers, towels, and a guide for the Soormane Falls walk at no extra charge. After your visit, return to a hot Malnad breakfast at the resort — idlis, coconut chutney, and freshly brewed estate coffee.</p>
        <p>Staying near Soormane Falls at Vruksha Valley also gives you access to Horanadu Temple (15km), Netravati Peak trekking, Kyatanamakki Jeep Safari, and coffee estate tours — all organized directly by Vruksha Valley.</p>
      </section>

      <section className="py-16 bg-[#0A2F1F] text-[#FDFBF7] text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-serif">Book Your Stay Near Soormane Falls</h2>
          <p className="opacity-70 font-serif italic">Vruksha Valley — 800m from Soormane Falls, Kalasa.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/918217764481" target="_blank" className="px-10 py-4 bg-[#C5A059] text-[#0A2F1F] uppercase tracking-widest font-bold text-xs hover:bg-white transition-all">Book on WhatsApp</a>
            <Link href="/contact" className="px-10 py-4 border border-[#C5A059] text-[#C5A059] uppercase tracking-widest font-bold text-xs hover:bg-[#C5A059] hover:text-[#0A2F1F] transition-all">Send Inquiry</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
