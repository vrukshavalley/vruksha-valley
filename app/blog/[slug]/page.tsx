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
    seoKeywords: ["Soormane Falls guide", "Soormane waterfall Kalasa", "hidden waterfall Chikmagalur", "resort near Soormane Falls", "Western Ghats waterfall trek", "Kalasa nature walk", "Vruksha Valley falls"],
    category: "Nature",
    image: "/gallery/vruksha-pool/vruksha-pool-1.webp",
    content: [
      "Tucked away in the dense greenery of Kalasa, Soormane Falls is a hidden gem that remains largely untouched by mass tourism. For guests staying at Vruksha Valley, it's not just a destination; it's practically our backyard, located a short 800-meter walk from the resort.",
      "The trail to the falls takes you through the Vruksha Valley coffee estate, where the air is thick with the scent of damp earth and fresh beans. Unlike more commercial waterfalls in the Western Ghats, Soormane offers a level of privacy that is rare — no ticket counters, no crowds, no noise. Just the sound of water finding its way through ancient rocks.",
      "Soormane Falls drops approximately 25 feet into a natural pool surrounded by dense shola forest. The water is crystal clear year-round, fed by the high-altitude streams of the Western Ghats. During the monsoon season (June to September), the falls swell dramatically, and the surrounding forest transforms into a vivid green canopy that is breathtaking to witness.",
      "We recommend visiting in the early morning. As the mist lifts off the Kalasa valley, the first rays of sun pierce through the canopy, creating a golden shimmer on the water. It is the perfect place for a morning meditation or a refreshing dip before breakfast back at Vruksha Valley.",
      "The walk from Vruksha Valley to Soormane Falls is itself an experience. The 800-metre trail passes through our working coffee plantation, where you can see coffee cherries ripening on the bush and learn about the harvest process from our estate workers. Vruksha Valley guests often describe this walk as one of the most grounding experiences of their stay.",
      "Unlike Jog Falls or Abbey Falls, Soormane is known only to those who seek it out. There are no vendors, no concrete pathways, and no selfie crowds. Vruksha Valley was built here intentionally — to give guests exclusive, unhurried access to one of the most serene waterfalls in Chikmagalur district.",
      "Best time to visit: October to February for pleasant weather and clear trails. June to September for the full monsoon spectacle. Avoid afternoons as the trail can get slippery after rain. Vruksha Valley provides rubber slippers and a guide for the walk upon request.",
      "After your visit to Soormane Falls, return to Vruksha Valley for a hot breakfast of traditional Malnad cuisine — steamed idlis, coconut chutney, and freshly brewed estate coffee. There is no better way to begin a morning in the Western Ghats."
    ]
  },
  "kalasa-trekking-guide": {
    title: "Trekking Netravati Peak",
    subtitle: "Witnessing the legendary sea of clouds",
    seoTitle: "Netravati Peak Trekking Guide | Basecamp at Vruksha Valley",
    seoDescription: "Plan your Netravati Peak trek from Kalasa. Witness the sea of clouds and recover in luxury at Vruksha Valley Resort.",
    seoKeywords: ["Netravati peak trek", "Netravati peak guide", "sea of clouds Kalasa", "Kudremukh trekking", "Western Ghats trekking guide", "Kalasa trekking basecamp", "Chikmagalur adventure trek", "shola forest trek Karnataka"],
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070",
    content: [
      "Netravati Peak is often called the crown jewel of the Kudremukh range. Standing at approximately 1,516 metres above sea level, it is a bucket-list experience for trekking enthusiasts — combining challenging terrain with some of the most breathtaking views in South India. Vruksha Valley in Kalasa serves as the ideal basecamp for this legendary trek.",
      "The trek is famous for the 'sea of clouds' phenomenon. If you start your journey from Vruksha Valley at dawn — around 5:00 AM — you reach the summit just as the valley below is blanketed in a thick, white mist. The clouds sit below your feet like a vast ocean, and the silence at that altitude is something that stays with you long after you return.",
      "The trail to Netravati Peak passes through dense shola forests — ancient, moss-covered trees draped in ferns and orchids. This ecosystem is unique to the Western Ghats and is home to Malabar giant squirrels, hornbills, and if you are lucky, the elusive leopard. Vruksha Valley guests are taken through the forest by experienced local guides who know every inch of the trail.",
      "The trek is rated moderate to difficult and takes approximately 5 to 6 hours round trip. The path includes steep ascents through grasslands, slippery shola sections, and rocky ridgelines. Vruksha Valley recommends a reasonable level of fitness and sturdy trekking shoes. We provide trekking poles on request.",
      "Permits are required to enter the Kudremukh National Park, within which Netravati Peak falls. Vruksha Valley handles all permit arrangements for our guests in advance, so there is no paperwork hassle on the morning of the trek. We also arrange packed breakfasts and water bottles for the climb.",
      "The best season for the Netravati Peak trek from Vruksha Valley is October to February. The skies are clear, the trails are dry, and the views extend all the way to the Arabian Sea on a clear day. Monsoon trekking (June to September) is possible but trails become extremely slippery and leeches are common.",
      "After the trek, return to Vruksha Valley for a well-earned rest. Our cottages are designed for recovery — with warm Malnad meals, hot showers, and the sound of the Western Ghats wind through the coffee estate. Many guests say the evening after the Netravati trek, sitting on the Vruksha Valley veranda with a cup of estate coffee, is the highlight of their entire trip.",
      "Whether you are a seasoned trekker or embarking on your first serious mountain trail, Vruksha Valley makes the Netravati Peak experience safe, memorable, and deeply immersive. Contact Vruksha Valley to plan your trek dates and we will take care of the rest."
    ]
  },
  "malnad-itinerary": {
    title: "The Ultimate 2-Day Itinerary",
    subtitle: "Temples, Waterfalls, and Coffee Trails",
    seoTitle: "2-Day Kalasa Itinerary | Best Things to Do in Malnad",
    seoDescription: "Explore Horanadu Temple, Soormane Falls, and Kyatanamakki in 2 days while staying at Vruksha Valley Kalasa.",
    seoKeywords: ["Kalasa 2 day itinerary", "things to do in Kalasa", "Horanadu temple visit", "Kyatanamakki jeep safari guide", "Malnad travel itinerary", "Chikmagalur weekend trip", "coffee estate tour Kalasa", "best places near Kalasa Karnataka"],
    category: "Travel",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071",
    content: [
      "Kalasa is one of the most underrated destinations in Karnataka. Nestled in the Chikmagalur district at the foothills of the Western Ghats, it offers a rare combination of spiritual significance, adventure, and natural beauty — all within a short drive of each other. Staying at Vruksha Valley, you are perfectly placed to experience all of it in just two days.",
      "Day 1 Morning — Horanadu Annapoorneshwari Temple. Begin your first morning with a visit to the Horanadu Annapoorneshwari Temple, located approximately 15km from Vruksha Valley. This ancient temple sits on an island formed by the Bhadra river and is one of the most revered Shakti temples in Karnataka. The morning aarti, with the sound of bells and chanting echoing across the river, is a deeply moving experience. Vruksha Valley can arrange an early morning drop and pick up.",
      "Day 1 Afternoon — Kyatanamakki Jeep Safari. After lunch at Vruksha Valley, head to the Kyatanamakki hilltop for a 4x4 Jeep safari. The trail winds through dense forest, and the hilltop offers a panoramic view of the entire Malnad landscape — rolling green hills, coffee estates, and distant peaks. The safari takes approximately 2 hours and is suitable for all age groups. Vruksha Valley coordinates bookings with trusted local operators.",
      "Day 1 Evening — Estate Walk and Sunset. Return to Vruksha Valley in time for a guided walk through the coffee estate. Watch the sun set over the Western Ghats from our estate, with a cup of freshly brewed Vruksha Valley estate coffee in hand. Dinner is served at the resort — authentic Malnad cuisine featuring rice, sambar, curry, and seasonal vegetables grown on site.",
      "Day 2 Morning — Soormane Falls. Wake up early and walk to Soormane Falls, just 800 metres from Vruksha Valley. The morning mist, the sound of the falls, and the cool forest air make this one of the most refreshing experiences in Kalasa. Take a dip in the natural pool and spend at least an hour absorbing the quiet. Vruksha Valley provides towels and slippers for the walk.",
      "Day 2 Late Morning — Coffee Estate Tour. After breakfast, join a guided tour of the Vruksha Valley coffee estate. Learn how coffee is grown, processed, and brewed — from cherry to cup. The Vruksha Valley estate grows Arabica and Robusta varieties, and guests can purchase freshly roasted beans to take home.",
      "Day 2 Afternoon — Maidadi Viewpoint or Kudremukh Drive. For those with energy to spare, Vruksha Valley recommends a drive to the Maidadi viewpoint or a scenic drive through the Kudremukh National Park buffer zone. Both offer exceptional views of the Ghats and are best experienced on a clear afternoon.",
      "This 2-day Kalasa itinerary is designed around the pace of Vruksha Valley — unhurried, immersive, and rooted in the land. We don't just provide a room; we provide the gateway to the authentic Malnad lifestyle. Contact Vruksha Valley to plan your visit and we will customise every detail for you."
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug];
  return {
    title: post?.seoTitle || "Vruksha Valley Journal",
    description: post?.seoDescription || "Stories from the heart of the Western Ghats.",
    keywords: post?.seoKeywords || [],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post?.seoTitle || "Vruksha Valley Journal",
      description: post?.seoDescription || "Stories from the heart of the Western Ghats.",
      url: `https://vrukshavalley.com/blog/${slug}`,
      images: [{ url: post?.image || "/logo.png", width: 1200, height: 630, alt: post?.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.seoTitle || "Vruksha Valley Journal",
      description: post?.seoDescription || "Stories from the heart of the Western Ghats.",
      images: [post?.image || "/logo.png"],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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
          <h3 className="text-3xl font-serif mb-4">Ready to write your own story?</h3>
          <p className="text-[#FDFBF7]/70 font-serif italic mb-8">Book your stay at Vruksha Valley Resort in Kalasa, Chikmagalur.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/918217764481"
              className="inline-block px-12 py-4 bg-[#C5A059] text-[#0A2F1F] uppercase tracking-[0.4em] font-bold text-xs hover:bg-white transition-all duration-500"
            >
              Book Your Stay
            </Link>
            <Link
              href="/contact"
              className="inline-block px-12 py-4 border border-[#C5A059] text-[#C5A059] uppercase tracking-[0.4em] font-bold text-xs hover:bg-[#C5A059] hover:text-[#0A2F1F] transition-all duration-500"
            >
              Send an Inquiry
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
