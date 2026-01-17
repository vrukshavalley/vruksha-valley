import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

const blogData: any = {
  "soormane-falls-guide": {
    title: "The Soormane Falls Experience",
    subtitle: "A private sanctuary 800m from Vruksha Valley",
    seoTitle: "Soormane Falls Guide | Closest Stay Vruksha Valley Kalasa",
    seoDescription: "A complete guide to Soormane Falls. Located just 800m from Vruksha Valley Resort, discover this hidden waterfall in Kalasa.",
    category: "Nature",
    image: "/gallery/vruksha-pool/vruksha-pool-1.webp",
    content: [
      "Tucked away in the dense greenery of Kalasa, Soormane Falls is a hidden gem that remains largely untouched by mass tourism. For guests staying at Vruksha Valley, it's not just a destination; it's practically our backyard, located a short 800-meter walk from the resort.",
      "The trail to the falls takes you through our coffee estate, where the air is thick with the scent of damp earth and fresh beans. Unlike more commercial waterfalls in the Western Ghats, Soormane offers a level of privacy that is rare.",
      "We recommend visiting in the early morning. As the mist lifts off the valley, the first rays of sun pierce through the canopy, creating a golden shimmer on the water. It is the perfect place for a morning meditation or a refreshing dip before breakfast."
    ]
  },
  "kalasa-trekking-guide": {
    title: "Trekking Netravati Peak",
    subtitle: "Witnessing the legendary sea of clouds",
    seoTitle: "Netravati Peak Trekking Guide | Basecamp at Vruksha Valley",
    seoDescription: "Plan your Netravati Peak trek from Kalasa. Witness the sea of clouds and recover in luxury at Vruksha Valley Resort.",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070",
    content: [
      "Netravati Peak is often called the crown jewel of the Kudremukh range. For trekking enthusiasts, it is a bucket-list experience that combines challenging terrain with some of the most breathtaking views in South India.",
      "The trek is famous for the 'sea of clouds' phenomenon. If you start your journey from Vruksha Valley at dawn, you reach the summit just as the valley below is blanketed in a thick, white mist.",
      "The path is a mix of lush shola forests and rolling grasslands. At Vruksha Valley, we help our guests organize permits and experienced local guides to ensure the journey is as safe as it is spectacular."
    ]
  },
  "malnad-itinerary": {
    title: "The Ultimate 2-Day Itinerary",
    subtitle: "Temples, Waterfalls, and Coffee Trails",
    seoTitle: "2-Day Kalasa Itinerary | Best Things to Do in Malnad",
    seoDescription: "Explore Horanadu Temple, Soormane Falls, and Kyatanamakki in 2 days while staying at Vruksha Valley Kalasa.",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071",
    content: [
      "Day 1: Spiritual Beginnings. Start your morning with a visit to the Horanadu Annapoorneshwari Temple, a short drive from our resort. After receiving blessings, head to the Kyatanamakki hills for a thrilling 4x4 Jeep safari.",
      "Day 2: The Estate Life. Spend your morning on a guided tour of the Vruksha Valley coffee estate. Learn the art of coffee cultivation before heading to Soormane Falls for a midday swim.",
      "This itinerary is designed to give you a true 'pause.' At Vruksha Valley, we don't just provide a room; we provide the gateway to the authentic Malnad lifestyle."
    ]
  }
};

// Updated Metadata generator for Next.js 15
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug];
  return {
    title: post?.seoTitle || "Vruksha Valley Journal",
    description: post?.seoDescription || "Stories from the heart of the Western Ghats.",
    openGraph: {
      images: [post?.image || "/logo.png"],
    },
  };
}

// Updated Page Component for Next.js 15
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await the params to get the slug
  const post = blogData[slug];

  if (!post) return (
    <main className="bg-[#0A2F1F] min-h-screen pt-32 text-center text-white">
      <Navbar />
      <h1 className="text-3xl font-serif">Story not found.</h1>
      <Link href="/blog" className="mt-4 inline-block text-[#C5A059] border-b border-[#C5A059]">Return to Journal</Link>
    </main>
  );

  return (
    <main className="bg-[#FDFBF7] min-h-screen">
      <Navbar />
      
      <header className="pt-40 pb-16 px-6 max-w-4xl mx-auto text-center">
        <p className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold mb-4">{post.category}</p>
        <h1 className="text-4xl md:text-7xl font-serif text-[#0A2F1F] leading-tight mb-4">{post.title}</h1>
        <p className="text-lg md:text-xl font-serif italic text-[#0A2F1F]/60">{post.subtitle}</p>
      </header>

      <div className="px-6 max-w-6xl mx-auto mb-20">
        <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>
      </div>

      <article className="px-6 max-w-3xl mx-auto pb-32">
        <div className="space-y-8 text-[#0A2F1F]/90 font-serif text-lg md:text-xl leading-relaxed italic">
          {post.content.map((paragraph: string, i: number) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-24 p-12 bg-[#0A2F1F] text-[#FDFBF7] text-center rounded-sm shadow-2xl">
          <h3 className="text-3xl font-serif mb-6">Ready to write your own story?</h3>
          <Link 
            href="https://wa.me/918217764481" 
            className="inline-block px-12 py-4 bg-[#C5A059] text-[#0A2F1F] uppercase tracking-[0.4em] font-bold text-xs hover:bg-white transition-all duration-500"
          >
            Book Your Stay
          </Link>
        </div>
      </article>
    </main>
  );
}