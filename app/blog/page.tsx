import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    slug: "soormane-falls-guide",
    title: "The Soormane Falls Experience",
    excerpt: "Discover the hidden waterfall located just 800m from Vruksha Valley.",
    image: "/gallery/vruksha-pool/vruksha-pool-1.webp",
    category: "Nature"
  },
  {
    slug: "kalasa-trekking-guide",
    title: "Trekking Netravati Peak",
    excerpt: "A complete guide to witnessing the legendary sea of clouds.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070",
    category: "Adventure"
  },
  {
    slug: "malnad-itinerary",
    title: "The Ultimate 2-Day Itinerary",
    excerpt: "Experience the best of Kalasa, from ancient temples to sunset hills.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071",
    category: "Travel"
  }
];

export default function BlogList() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen">
      <Navbar />
      <header className="pt-32 pb-16 px-6 text-center bg-[#0A2F1F]">
        <p className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold mb-4">The Vruksha Journal</p>
        <h1 className="text-4xl md:text-6xl font-serif text-[#FDFBF7]">Stories from the Valley</h1>
        <div className="w-20 h-[2px] bg-[#C5A059] mx-auto mt-8"></div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  {blogPosts.map((post) => (
    <Link 
      key={post.slug} 
      href={`/blog/${post.slug}`} 
      className="group flex flex-col space-y-6"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl bg-[#0A2F1F]">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4 bg-[#C5A059] text-[#0A2F1F] text-[10px] px-3 py-1 uppercase font-bold tracking-widest">
          {post.category}
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="text-2xl font-serif text-[#0A2F1F] group-hover:text-[#C5A059] transition-colors">
          {post.title}
        </h2>
        <p className="text-[#0A2F1F]/70 font-serif italic text-sm leading-relaxed">
          {post.excerpt}
        </p>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A059] border-b border-[#C5A059]/30 pb-1">
          Read Story
        </span>
      </div>
    </Link>
  ))}
</div>
      </section>
    </main>
  );
}