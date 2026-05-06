import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Best Resort in Kalasa, Chikmagalur | Vruksha Valley",
  description: "Looking for a resort in Kalasa, Chikmagalur? Vruksha Valley offers luxury cottages, a swimming pool, Malnad cuisine, and direct access to Soormane Falls and Horanadu Temple.",
  keywords: [
    "resort in Kalasa", "best resort in Kalasa", "Kalasa resort booking",
    "luxury resort Kalasa Karnataka", "Kalasa Chikmagalur resort",
    "Vruksha Valley Kalasa", "resort near Horanadu", "Kalasa stay"
  ],
  alternates: { canonical: '/resort-in-kalasa' },
  openGraph: {
    title: "Best Resort in Kalasa, Chikmagalur | Vruksha Valley",
    description: "Luxury cottages, swimming pool, and Malnad cuisine at Vruksha Valley — the best resort in Kalasa, Karnataka.",
    url: 'https://vrukshavalley.com/resort-in-kalasa',
    images: [{ url: '/vrukshavalley-view.webp', width: 1200, height: 630, alt: 'Best Resort in Kalasa Vruksha Valley' }],
  },
};

export default function ResortInKalasa() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen">

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A2F1F]/50 z-10" />
          <Image src="/vrukshavalley-view.webp" fill className="object-cover" alt="Best resort in Kalasa Chikmagalur — Vruksha Valley" priority />
        </div>
        <div className="relative z-20 text-center px-6">
          <p className="text-[#C5A059] text-xs uppercase tracking-[0.5em] font-bold mb-4">Kalasa, Chikmagalur</p>
          <h1 className="text-[#FDFBF7] text-4xl md:text-7xl font-serif leading-tight drop-shadow-2xl">
            The Best Resort in Kalasa
          </h1>
          <div className="w-20 h-[2px] bg-[#C5A059] mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto space-y-8 text-[#0A2F1F]/80 font-serif text-lg leading-relaxed">
        <h2 className="text-3xl md:text-5xl text-[#0A2F1F] font-serif">Why Vruksha Valley is Kalasa's Premier Resort</h2>
        <p>If you are searching for a resort in Kalasa, Vruksha Valley is the answer. Nestled on a working coffee estate in Guddemakki, Kalasa, Vruksha Valley combines luxury accommodation with direct access to the Western Ghats' most spectacular experiences.</p>
        <p>Kalasa is a small town in the Chikmagalur district of Karnataka, known for the Horanadu Annapoorneshwari Temple, Soormane Falls, Netravati Peak, and the Kyatanamakki hills. Vruksha Valley is positioned at the heart of all of these, making it the most convenient and luxurious base for exploring the region.</p>
        <h3 className="text-2xl text-[#0A2F1F] font-serif">What Vruksha Valley Resort in Kalasa Offers</h3>
        <ul className="space-y-3 list-none">
          {["6 unique luxury cottages — Parijatha, Prakruthi, Myst Wood, Kadamba, Mouna, and Dormitory","Swimming pool surrounded by the Western Ghats forest","Authentic Malnad and South Indian farm-to-table cuisine","800m walk to Soormane Falls directly from the resort","Coffee estate tours and guided nature walks","Trekking packages to Netravati Peak and Kyatanamakki Jeep Safari","Just 15km from Horanadu Annapoorneshwari Temple"].map((item, i) => (
            <li key={i} className="flex items-start gap-3 italic">
              <span className="w-6 h-[1px] bg-[#C5A059] mt-3 shrink-0"></span>{item}
            </li>
          ))}
        </ul>
        <p>Whether you are a pilgrim visiting Horanadu, an adventure seeker planning the Netravati Peak trek, or a family looking for a peaceful retreat in nature, Vruksha Valley is the ideal resort in Kalasa for you.</p>
      </section>

      <section className="py-16 bg-[#0A2F1F] text-[#FDFBF7] text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-serif">Book Your Stay at Vruksha Valley, Kalasa</h2>
          <p className="opacity-70 font-serif italic">Direct bookings only. No third-party fees.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/918217764481" target="_blank" className="px-10 py-4 bg-[#C5A059] text-[#0A2F1F] uppercase tracking-widest font-bold text-xs hover:bg-white transition-all">Book on WhatsApp</a>
            <Link href="/contact" className="px-10 py-4 border border-[#C5A059] text-[#C5A059] uppercase tracking-widest font-bold text-xs hover:bg-[#C5A059] hover:text-[#0A2F1F] transition-all">Send Inquiry</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
