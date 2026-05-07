import type { Metadata } from 'next';
import RoomCarousel from "@/components/RoomCarousel";
import Navbar from "@/components/Navbar";
import { createClient } from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: "Photo Gallery | Cottages, Pool & Nature at Vruksha Valley Kalasa",
  description: "Explore photos of Vruksha Valley's luxury cottages, swimming pool, dining space, and the lush Western Ghats surroundings in Kalasa, Chikmagalur.",
  keywords: [
    "Vruksha Valley photo gallery", "Kalasa resort photos", "Chikmagalur cottage pictures",
    "luxury cottage images Karnataka", "Western Ghats resort gallery",
    "Parijatha cottage", "Prakruthi heritage stay", "Myst Wood forest retreat",
    "Kadamba nature cottage", "Mouna sanctuary", "resort swimming pool Kalasa",
    "Malnad dining experience", "resort in Kalasa", "resort near Soormane Falls",
    "Chikmagalur luxury stay", "coffee estate homestay Kalasa"
  ],
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: "Photo Gallery | Vruksha Valley Luxury Resort Kalasa",
    description: "See our luxury cottages, swimming pool, and the misty Western Ghats landscape at Vruksha Valley Resort, Kalasa.",
    url: 'https://vrukshavalley.com/gallery',
    images: [{ url: '/vrukshavalley-view.webp', width: 1200, height: 630, alt: 'Vruksha Valley Resort Gallery Kalasa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Photo Gallery | Vruksha Valley Resort Kalasa",
    description: "Luxury cottages, swimming pool, and Western Ghats scenery at Vruksha Valley.",
    images: ['/vrukshavalley-view.webp'],
  },
};

type Category = { id: string; title: string; images: string[]; order_index: number };

export default async function GalleryPage() {
  const supabase = await createClient();
  const { data: categories } = await supabase
    .from('gallery_categories')
    .select('*')
    .order('order_index');

  return (
    <section className="bg-[#FDFBF7] pt-32 pb-20 w-full min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl text-[#0A2F1F] font-serif font-normal mb-4">
            Our Gallery
          </h1>
          <div className="w-20 h-[2px] bg-[#C5A059] mx-auto"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(categories || []).map((cat: Category, index: number) => (
            <div key={index} className="flex flex-col space-y-4 group">
              <div className="relative rounded-sm overflow-hidden shadow-md bg-[#0A2F1F]">
                <RoomCarousel images={cat.images} name={cat.title} />
              </div>
              <div className="text-center pt-2">
                <h2 className="text-[#0A2F1F] text-xs tracking-[4px] uppercase font-bold">
                  {cat.title}
                </h2>
                <div className="w-10 h-[1px] bg-[#C5A059] mx-auto mt-2 opacity-50 group-hover:w-20 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
