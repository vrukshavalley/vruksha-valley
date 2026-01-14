import Navbar from "@/components/Navbar";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  const cottages = [
    { 
      name: "A-Frame Cottage", 
      type: "Signature Stay", 
      img: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2070"
    },
    { 
      name: "Luxury Wood House", 
      type: "Nature Immersion", 
      img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1000" 
    },
    { 
      name: "Valley View Suite", 
      type: "Scenic Retreat", 
      img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070" 
    },
    { 
      name: "Plantation Villa", 
      type: "Heritage Stay", 
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070" 
    },
    { 
      name: "Cloud Bed Cottage", 
      type: "High Altitude", 
      img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070" 
    },
    { 
      name: "Family Estate House", 
      type: "Group Getaway", 
      img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070"
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" /> 
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" 
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#FDFBF7] text-xs md:text-sm tracking-[0.4em] uppercase mb-4 drop-shadow-lg opacity-90">
            Welcome to Vruksha Valley
          </p>
          <h1 className="text-[#FDFBF7] text-3xl md:text-7xl font-serif leading-tight drop-shadow-2xl">
            A place to pause and remember <br className="hidden md:block" /> 
            what matters the most.
          </h1>
        </div>
      </section>

      {/* 2. ADDED: ABOUT US SECTION */}
      <section id="about" className="py-16 md:py-24 bg-[#FDFBF7] text-[#0A2F1F]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-[#C5A059] text-xs md:text-sm uppercase tracking-[0.6em] font-serif font-bold">
              Our Story
            </p>
            <h2 className="text-3xl md:text-6xl font-serif leading-tight">
              A Sanctuary in the <br />
              <span className="text-[#C5A059] italic font-medium">Heart of Nature.</span>
            </h2>
          </div>
          <div className="space-y-6 text-[#0A2F1F]/80 font-serif leading-relaxed text-lg italic">
            <p>
              Vruksha Valley was born from a simple desire: to create a space where the modern world fades away and the rhythm of the Western Ghats takes over.
            </p>
            <p>
              Located in the misty heights of Kalasa, our resort is more than a destination; it is a tribute to the ancient coffee estates and the quiet dignity of the mountains.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE LIVING SPACES */}
      <section id="cottages" className="py-12 md:py-20 bg-[#0A2F1F] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-6xl leading-tight font-serif mb-4">
              The Living Spaces
            </h2>
            <div className="w-20 h-[2px] bg-[#C5A059] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cottages.map((cottage, idx) => (
              <div key={idx} className="group relative overflow-hidden aspect-[4/5]">
                <img 
                  src={cottage.img} 
                  alt={cottage.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Fixed the dark gradient to match your brand emerald */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051610] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6">
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
      <Footer />
    </main>
  );
}