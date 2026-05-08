import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: "About Us | Vruksha Valley Eco Resort Kalasa, Chikmagalur",
  description: "Learn the story behind Vruksha Valley — a sustainable luxury resort on a working coffee estate in Kalasa, Chikmagalur. Gateway to Soormane Falls, Horanadu Temple & Netravati Peak.",
  keywords: [
    "about Vruksha Valley", "eco resort Kalasa", "Chikmagalur resort story",
    "sustainable luxury resort Karnataka", "coffee estate stay Kalasa",
    "Western Ghats nature retreat", "Malnad hospitality", "Horanadu temple stay",
    "Netravati peak basecamp", "Soormane falls resort",
    "resort in Kalasa", "resort near Soormane Falls",
    "Chikmagalur luxury stay", "coffee estate homestay Kalasa"
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: "About Vruksha Valley | Eco Luxury Resort in Kalasa, Chikmagalur",
    description: "A working coffee estate turned luxury sanctuary in the heart of the Western Ghats. Discover our story and sustainable philosophy.",
    url: 'https://vrukshavalley.com/about',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Vruksha Valley Resort Kalasa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Vruksha Valley | Eco Luxury Resort in Kalasa",
    description: "A working coffee estate turned luxury sanctuary in the heart of the Western Ghats.",
    images: ['/logo.png'],
  },
};

export default async function AboutPage() {
  const supabase = await createClient();
  const { data: settings } = await supabase.from('site_settings').select('key,value');

  const s: Record<string, string> = {};
  (settings || []).forEach(r => { s[r.key] = r.value || ''; });

  const heroImg       = s.about_page_hero_img || 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070';
  const heroH1        = s.about_page_hero_h1  || 'Our Story';
  const rootedLabel   = s.about_page_rooted_label || 'Rooted in Nature';
  const sectionHeading = s.about_page_section_heading || 'Where the misty mountains of Kalasa meet the warmth of Malnad hospitality.';
  const p1            = s.about_page_p1 || 'Vruksha Valley was established with a singular vision: to preserve the quiet dignity of the Western Ghats while offering a sanctuary for those seeking a pause from the modern world.';
  const p2            = s.about_page_p2 || "Our estate is more than just a resort; it is a working coffee plantation where every trail, every tree, and every sunrise tells the story of our family's deep connection to this land.";
  const sideImg       = s.about_page_side_img || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071';
  const sustainH      = s.about_page_sustain_h || 'Sustainable Luxury.';
  const sustainDesc   = s.about_page_sustain_desc || 'We believe in “Low Impact, High Experience.” From our signature A-Frame cottages designed to blend into the canopy to our farm-to-table dining, every detail at Vruksha Valley is crafted to honor the environment.';
  const bullet1       = s.about_page_bullet_1 || '800m from the majestic Soormane Falls.';
  const bullet2       = s.about_page_bullet_2 || 'Gateway to Netravati Peak, Maidadi, Horanadu Annapoorneshwari Temple, Kudremukh & Kyatanamakki.';
  const bullet3       = s.about_page_bullet_3 || 'Authentic Malnad Cuisine & Coffee Estate tours.';
  const ctaH          = s.about_page_cta_h   || 'Experience the Silence.';
  const ctaSub        = s.about_page_cta_sub || 'Your journey into the heart of the Western Ghats begins here.';

  const whatsappNum = s.contact_whatsapp || '918217764481';
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=Hi%20Vruksha%20Valley%2C%20I'd%20like%20to%20plan%20my%20retreat.%20Please%20share%20more%20details%20about%20the%20cottages.`;

  return (
    <main className="bg-[#FDFBF7] min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A2F1F]/40 z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImg}
            alt="Vruksha Valley Landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <h1 className="text-[#FDFBF7] text-5xl md:text-8xl font-serif leading-tight drop-shadow-2xl">
            {heroH1}
          </h1>
          <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-[#C5A059] text-xs md:text-sm uppercase tracking-[0.6em] font-serif font-bold">
            {rootedLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-[#0A2F1F] font-serif leading-snug">
            {sectionHeading}
          </h2>
          <div className="space-y-6 text-[#0A2F1F]/80 font-serif leading-relaxed text-lg italic max-w-2xl mx-auto">
            <p>{p1}</p>
            <p>{p2}</p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-4/5 rounded-sm overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={sideImg}
              alt="Nature at Vruksha Valley"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl md:text-5xl text-[#0A2F1F] font-serif">{sustainH}</h3>
            <p className="text-[#0A2F1F]/70 text-lg leading-relaxed font-serif">
              {sustainDesc}
            </p>
            <ul className="space-y-4 text-[#0A2F1F] font-serif italic">
              {bullet1 && (
                <li className="flex items-center gap-4">
                  <span className="w-8 h-px bg-[#C5A059] shrink-0"></span> {bullet1}
                </li>
              )}
              {bullet2 && (
                <li className="flex items-center gap-4">
                  <span className="w-8 h-px bg-[#C5A059] shrink-0"></span> {bullet2}
                </li>
              )}
              {bullet3 && (
                <li className="flex items-center gap-4">
                  <span className="w-8 h-px bg-[#C5A059] shrink-0"></span> {bullet3}
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A2F1F] text-[#FDFBF7] text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif">{ctaH}</h2>
          <p className="opacity-80 text-lg font-serif italic">{ctaSub}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-[#C5A059] text-[#051610] uppercase tracking-widest font-bold font-serif hover:bg-white transition-all inline-block"
          >
            Book Your Retreat
          </a>
        </div>
      </section>
    </main>
  );
}
