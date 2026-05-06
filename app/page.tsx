import type { Metadata } from 'next';
import Script from "next/script";
import Navbar from "@/components/Navbar";

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
    "resort in Kalasa", "resort near Soormane Falls",
    "Chikmagalur luxury stay", "coffee estate homestay Kalasa"
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
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import RoomCarousel from "@/components/RoomCarousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best resort near Horanadu Temple?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vruksha Valley is one of the closest luxury resorts to Horanadu Annapoorneshwari Temple, located just 15km away. Vruksha Valley in Kalasa, Karnataka is the perfect base for pilgrims."
        }
      },
      {
        "@type": "Question",
        "name": "How far is Vruksha Valley from Soormane Falls?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Soormane Falls is just 800 metres from Vruksha Valley — a short walk through the Vruksha Valley coffee estate."
        }
      },
      {
        "@type": "Question",
        "name": "Is Vruksha Valley good for the Netravati Peak trek?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Vruksha Valley serves as the ideal basecamp for Netravati Peak. Vruksha Valley helps arrange permits and experienced local guides for the trek."
        }
      },
      {
        "@type": "Question",
        "name": "What type of cottages are available at Vruksha Valley?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vruksha Valley offers 6 stay options — Parijatha, Prakruthi, Myst Wood, Kadamba, Mouna, and a Dormitory for groups. Each cottage at Vruksha Valley is designed to blend into the natural surroundings."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best time to visit Vruksha Valley, Kalasa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time to visit Vruksha Valley is October to February for clear skies and trekking. June to September brings lush monsoon greenery around Vruksha Valley."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a stay at Vruksha Valley?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book Vruksha Valley directly by calling or WhatsApp on +91 82177 64481. Vruksha Valley accepts direct bookings with no third-party fees."
        }
      },
      {
        "@type": "Question",
        "name": "Is Vruksha Valley suitable for families and couples?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Vruksha Valley welcomes families, couples, pilgrims visiting Horanadu, and adventure groups. Vruksha Valley has cottages suited for every type of guest."
        }
      },
      {
        "@type": "Question",
        "name": "What activities are available at Vruksha Valley?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Vruksha Valley, guests enjoy Soormane Falls walks, Kyatanamakki Jeep safari, Netravati Peak trekking, Horanadu Temple visits, coffee estate tours, and the Vruksha Valley swimming pool."
        }
      },
      {
        "@type": "Question",
        "name": "What is the check-in and check-out time at Vruksha Valley?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Vruksha Valley, check-in is at 12:00 PM and check-out is at 11:00 AM."
        }
      },
      {
        "@type": "Question",
        "name": "Is food available at Vruksha Valley?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Vruksha Valley serves authentic Malnad and South Indian cuisine, prepared farm-to-table using local produce from the Vruksha Valley estate."
        }
      }
    ]
  };
  const cottages = [
    { 
      name: "Parijatha", 
      type: "Signature Cottage", 
      images: [
        "/rooms/vruksha-parijatha/vruksha-parijatha-1.webp",
        "/rooms/vruksha-parijatha/vruksha-parijatha-2.webp",
        "/rooms/vruksha-parijatha/vruksha-parijatha-3.webp"
      ] 
    },
    { 
      name: "Prakruthi", 
      type: "Heritage Stay", 
      images: [
        "/rooms/vruksha-prakruthi/vruksha-prakruthi-1.webp",
        "/rooms/vruksha-prakruthi/vruksha-prakruthi-2.webp",
        "/rooms/vruksha-prakruthi/vruksha-prakruthi-3.webp",
        "/rooms/vruksha-prakruthi/vruksha-prakruthi-4.webp",
        "/rooms/vruksha-prakruthi/vruksha-prakruthi-5.webp",
      ] 
    },
    { 
      name: "Myst Wood", 
      type: "Forest Retreat", 
      images: [
        "/rooms/vruksha-mystwood/vruksha-mystwood-1.webp",
        "/rooms/vruksha-mystwood/vruksha-mystwood-2.webp",
        "/rooms/vruksha-mystwood/vruksha-mystwood-3.webp"
      ] 
    },
    { 
      name: "Kadamba", 
      type: "Nature Immersion", 
      images: [
        "/rooms/vruksha-kadamba/vruksha-kadamba-1.webp",
        "/rooms/vruksha-kadamba/vruksha-kadamba-2.webp"
      ] 
    },
    { 
      name: "Mouna", 
      type: "Quiet Sanctuary", 
      images: [
        "/rooms/vruksha-mouna/vruksha-mouna-1.webp",
        "/rooms/vruksha-mouna/vruksha-mouna-2.webp",
        "/rooms/vruksha-mouna/vruksha-mouna-3.webp"
      ] 
    },
    { 
      name: "Dormitory", 
      type: "Group Getaway", 
      images: [
        "/rooms/vruksha-dormitory/vruksha-dormitory-1.webp",
        "/rooms/vruksha-dormitory/vruksha-dormitory-2.webp"
      ]
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#FDFBF7]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" /> 
          <Image 
            src="/hero.webp" 
            alt="Aerial view of Vruksha Valley Resort in Kalasa" 
            fill 
            priority
            quality={95}
            className="object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#FDFBF7] text-xs md:text-sm tracking-[0.4em] uppercase mb-4 drop-shadow-lg opacity-90">
            Luxury Nature Resort | Kalasa, Chikmagalur
          </p>
          <h1 className="text-[#FDFBF7] text-3xl md:text-7xl font-serif leading-tight drop-shadow-2xl">
            A place to pause and remember <br className="hidden md:block" />
            what matters the most.
            <span className="sr-only"> — Vruksha Valley, Best Resort in Kalasa, Chikmagalur near Soormane Falls and Horanadu Temple</span>
          </h1>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-[#FDFBF7] text-[#0A2F1F]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-[#C5A059] text-xs md:text-sm uppercase tracking-[0.6em] font-serif font-bold">
              Our Story
            </p>
            <h2 className="text-3xl md:text-6xl font-serif leading-tight">
              A Sanctuary in the <br />
              <span className="text-[#C5A059] italic font-medium">Heart of Nature.</span>
              <span className="sr-only"> — Eco Resort on a Coffee Estate in Kalasa, Western Ghats, Karnataka</span>
            </h2>
          </div>
          <div className="space-y-6 text-[#0A2F1F]/80 font-serif leading-relaxed text-lg italic">
            <p>
              Vruksha Valley was born from a simple desire: to create a space where the modern world fades away and the rhythm of the Western Ghats takes over.
            </p>
            <p>
              Located in the misty heights of Kalasa, our resort is more than a destination; it is a tribute to the ancient coffee estates and the quiet dignity of the mountains.
            </p>
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
            {cottages.map((cottage, idx) => (
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