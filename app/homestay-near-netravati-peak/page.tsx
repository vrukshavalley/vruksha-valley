import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Homestay Near Netravati Peak | Vruksha Valley Kalasa",
  description: "Vruksha Valley is the best basecamp and homestay near Netravati Peak, Kalasa. We arrange permits, guides, and packed meals for your Netravati Peak trek from Chikmagalur.",
  keywords: [
    "homestay near Netravati Peak", "stay near Netravati Peak",
    "Netravati Peak basecamp Kalasa", "resort near Netravati Peak",
    "Vruksha Valley Netravati trek", "Chikmagalur trekking stay",
    "Netravati Peak accommodation", "Western Ghats trek basecamp"
  ],
  alternates: { canonical: '/homestay-near-netravati-peak' },
  openGraph: {
    title: "Homestay Near Netravati Peak | Vruksha Valley Kalasa",
    description: "The ideal basecamp for Netravati Peak trek. Vruksha Valley arranges permits, guides, and a full trek experience from Kalasa, Chikmagalur.",
    url: 'https://vrukshavalley.com/homestay-near-netravati-peak',
    images: [{ url: '/vrukshavalley-view.webp', width: 1200, height: 630, alt: 'Homestay near Netravati Peak Vruksha Valley' }],
  },
};

export default function HomestayNearNetravatiPeak() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen">

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A2F1F]/50 z-10" />
          <Image src="/hero.webp" fill className="object-cover" alt="Homestay near Netravati Peak — Vruksha Valley Kalasa" priority />
        </div>
        <div className="relative z-20 text-center px-6">
          <p className="text-[#C5A059] text-xs uppercase tracking-[0.5em] font-bold mb-4">Netravati Peak Basecamp, Kalasa</p>
          <h1 className="text-[#FDFBF7] text-4xl md:text-7xl font-serif leading-tight drop-shadow-2xl">
            Homestay Near Netravati Peak
          </h1>
          <div className="w-20 h-[2px] bg-[#C5A059] mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto space-y-8 text-[#0A2F1F]/80 font-serif text-lg leading-relaxed">
        <h2 className="text-3xl md:text-5xl text-[#0A2F1F] font-serif">Your Basecamp for the Netravati Peak Trek</h2>
        <p>Vruksha Valley in Kalasa is the most recommended stay and basecamp for the Netravati Peak trek. Located in Guddemakki, Kalasa, Vruksha Valley is perfectly positioned for an early morning departure to the peak — the starting point for the Netravati trail is just a short drive from the resort.</p>
        <p>Netravati Peak, standing at approximately 1,516 metres in the Kudremukh range, is famous for its "sea of clouds" phenomenon. Trekkers who start from Vruksha Valley at dawn reach the summit just as the valley is blanketed in mist — one of the most spectacular sights in the Western Ghats.</p>
        <h3 className="text-2xl text-[#0A2F1F] font-serif">What Vruksha Valley Arranges for Netravati Trekkers</h3>
        <ul className="space-y-3 list-none">
          {[
            "Advance permit booking for Kudremukh National Park",
            "Experienced local guides who know every inch of the Netravati trail",
            "4:30–5:00 AM early breakfast before the trek",
            "Packed lunch and water bottles for the climb",
            "Trekking poles available on request",
            "Post-trek hot meals and recovery at the resort",
            "Transport to and from the trek starting point"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 italic">
              <span className="w-6 h-[1px] bg-[#C5A059] mt-3 shrink-0"></span>{item}
            </li>
          ))}
        </ul>
        <p>The Netravati Peak trek is rated moderate to difficult and takes 5–6 hours round trip. Vruksha Valley recommends booking at least 2 nights — one before the trek to rest and acclimatize, and one after to recover. Contact Vruksha Valley to plan your Netravati Peak experience.</p>
      </section>

      <section className="py-16 bg-[#0A2F1F] text-[#FDFBF7] text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-serif">Plan Your Netravati Trek with Vruksha Valley</h2>
          <p className="opacity-70 font-serif italic">Basecamp in Kalasa. Permits, guides, and everything arranged.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/918217764481" target="_blank" className="px-10 py-4 bg-[#C5A059] text-[#0A2F1F] uppercase tracking-widest font-bold text-xs hover:bg-white transition-all">Book on WhatsApp</a>
            <Link href="/contact" className="px-10 py-4 border border-[#C5A059] text-[#C5A059] uppercase tracking-widest font-bold text-xs hover:bg-[#C5A059] hover:text-[#0A2F1F] transition-all">Send Inquiry</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
