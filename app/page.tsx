import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import RoomCarousel from "@/components/RoomCarousel";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vruksha Valley | Best Luxury Resort in Kalasa, Chikmagalur",
  description: "Vruksha Valley is a luxury nature resort in Kalasa, Chikmagalur — 800m from Soormane Falls, 15km from Horanadu Temple. Coffee estate cottages, swimming pool, Malnad cuisine.",
  keywords: [
    "Vruksha Valley", "best resort in Kalasa", "luxury resort Kalasa Chikmagalur",
    "resort near Horanadu Temple", "resort near Soormane Falls", "Kalasa resort booking",
    "nature resort Chikmagalur", "coffee estate resort Karnataka", "Western Ghats luxury stay",
    "Parijatha cottage Kalasa", "Prakruthi heritage stay", "Myst Wood forest retreat",
    "Kadamba cottage Kalasa", "Mouna sanctuary Vruksha Valley", "group stay Kalasa",
    "swimming pool resort Chikmagalur", "Malnad cuisine resort", "farm to table Kalasa",
    "Netravati peak basecamp", "Kyatanamakki jeep safari resort", "Soormane Falls walk",
    "Horanadu pilgrimage stay", "eco resort Western Ghats", "cottage stay Kalasa Karnataka",
    "resort in Kalasa", "Chikmagalur luxury stay", "coffee estate homestay Kalasa"
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: "Vruksha Valley | Luxury Nature Resort in Kalasa, Chikmagalur",
    description: "800m from Soormane Falls. 15km from Horanadu Temple. Coffee estate cottages, swimming pool & Malnad cuisine at Vruksha Valley, Kalasa.",
    url: 'https://vrukshavalley.com',
    images: [{ url: '/vrukshavalley-view.webp', width: 1200, height: 630, alt: 'Vruksha Valley luxury resort Kalasa Chikmagalur' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vruksha Valley | Luxury Nature Resort in Kalasa, Chikmagalur",
    description: "800m from Soormane Falls. 15km from Horanadu Temple. Coffee estate cottages, swimming pool & Malnad cuisine.",
    images: ['/vrukshavalley-view.webp'],
  },
};

export default async function Home() {
  const supabase = await createClient();

  const [{ data: cottages }, { data: faqs }, { data: settings }] = await Promise.all([
    supabase.from('cottages').select('*').order('order_index'),
    supabase.from('faqs').select('*').order('order_index'),
    supabase.from('site_settings').select('key,value'),
  ]);

  const s: Record<string, string> = {};
  (settings || []).forEach(r => { s[r.key] = r.value || ''; });

  const heroImage   = s.hero_image   || '/hero.webp';
  const heroTagline = s.hero_tagline || 'Luxury Nature Resort | Kalasa, Chikmagalur';
  const heroHeading = s.hero_heading || 'A place to pause and remember what matters the most.';
  const aboutLabel = s.about_label || 'Our Story';
  const aboutHeading = s.about_heading || 'A Sanctuary in the Heart of Nature.';
  const aboutP1 = s.about_paragraph_1 || 'Vruksha Valley was born from a simple desire: to create a space where the modern world fades away and the rhythm of the Western Ghats takes over.';
  const aboutP2 = s.about_paragraph_2 || 'Located in the misty heights of Kalasa, our resort is more than a destination; it is a tribute to the ancient coffee estates and the quiet dignity of the mountains.';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (faqs || []).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <main className="relative min-h-screen bg-[#FDFBF7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={heroImage}
            alt="Aerial view of Vruksha Valley Resort in Kalasa"
            fill
            priority
            quality={95}
            className="object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#FDFBF7] text-xs md:text-sm tracking-[0.4em] uppercase mb-4 drop-shadow-lg opacity-90">
            {heroTagline}
          </p>
          <h1 className="text-[#FDFBF7] text-3xl md:text-7xl font-serif leading-tight drop-shadow-2xl">
            {heroHeading}
            <span className="sr-only"> — Vruksha Valley, Best Resort in Kalasa, Chikmagalur near Soormane Falls and Horanadu Temple</span>
          </h1>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-[#FDFBF7] text-[#0A2F1F]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-[#C5A059] text-xs md:text-sm uppercase tracking-[0.6em] font-serif font-bold">
              {aboutLabel}
            </p>
            <h2 className="text-3xl md:text-6xl font-serif leading-tight">
              {aboutHeading.replace(' Heart of Nature.', '')}
              <br />
              <span className="text-[#C5A059] italic font-medium">Heart of Nature.</span>
              <span className="sr-only"> — Eco Resort on a Coffee Estate in Kalasa, Western Ghats, Karnataka</span>
            </h2>
          </div>
          <div className="space-y-6 text-[#0A2F1F]/80 font-serif leading-relaxed text-lg italic">
            <p>{aboutP1}</p>
            <p>{aboutP2}</p>
            <div className="pt-4">
              <Link
                href="/blog"
                className="text-[#C5A059] text-xs uppercase tracking-[0.4em] font-bold border-b border-[#C5A059] pb-2 hover:text-[#0A2F1F] transition-colors"
              >
                Explore our Journal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="cottages" className="py-12 md:py-24 bg-[#0A2F1F] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl leading-tight font-serif mb-4">
              The Living Spaces
            </h2>
            <div className="w-20 h-[2px] bg-[#C5A059] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(cottages || []).map((cottage, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-[#051610] rounded-sm shadow-2xl">
                <RoomCarousel images={cottage.images} name={cottage.name} />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#051610] via-[#051610]/40 to-transparent pointer-events-none">
                  <h3 className="text-xl md:text-2xl font-serif text-white">{cottage.name}</h3>
                  <p className="text-[#C5A059] text-[10px] uppercase tracking-widest mt-1">{cottage.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Amenities />
      <Testimonials />
    </main>
  );
}
