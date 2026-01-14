import Navbar from "@/components/Navbar";
import RoomCard from "@/components/RoomCard";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function Home() {
  const cottages = [
    {
      name: "A-Frame Cottage",
      type: "Signature Stay",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", 
      description: "Our unique A-shaped wooden cottages, perfect for families."
    },
    {
      name: "Luxury Wood House",
      type: "Nature Immersion",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      description: "Rustic elegance meeting modern comfort deep in the greenery."
    },
    {
      name: "Valley View Suite",
      type: "Scenic Retreat",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      description: "Wake up to misty views of the Kalasa mountains."
    }
  ];

  return (
    <main className="relative min-h-screen bg-cream-100">
      <Navbar />
      
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-emerald-950/60 z-10" /> 
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" 
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
        </div>

<div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-12">
  
  <p className="text-gold-500 text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 font-serif font-bold opacity-90">
    Welcome to Vruksha Valley
  </p>
  
  <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-6 leading-relaxed tracking-wide drop-shadow-md">
    A place to pause and remember <br className="hidden md:block" /> 
    what matters the most.
  </h1>

</div>

      </section>

<section id="about" className="py-24 bg-[#F8F5F0] text-[#051610]">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    
    <div className="space-y-8">
      <p className="text-[#D4AF37] text-xs md:text-sm uppercase tracking-[0.6em] font-serif font-bold">
        Our Story
      </p>
      <h2 className="text-[#051610] text-4xl md:text-5xl font-serif font-bold leading-tight">
        A Sanctuary in the <br />
        <span className="text-[#D4AF37] italic font-medium">Heart of Nature.</span>
      </h2>
      
      <div className="space-y-6 text-emerald-900/80 font-serif leading-relaxed text-lg italic">
        <p>
          Vruksha Valley was born from a simple desire: to create a space where the modern world fades away, and the rhythm of the Western Ghats takes over.
        </p>
        <p>
          Located in the misty heights of Kalasa, our resort is more than a destination. It is a tribute to the ancient coffee estates and the quiet dignity of the mountains.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="cottages" className="py-12 bg-[#0A2F1F] text-[#F8F5F0]">
  <div className="max-w-7xl mx-auto px-6">
    
<div style={{ textAlign: "center", marginBottom: "50px" }}>
  <h2 style={{ 
    fontSize: "3.5rem", 
    color: "#FDFBF7",
    fontWeight: "400",
    marginBottom: "15px",
    fontFamily: "'Playfair Display', serif" 
  }}>
    The Living Spaces
  </h2>
  <div style={{ 
    width: "80px", 
    height: "2px", 
    backgroundColor: "#C5A059",
    margin: "0 auto" 
  }}></div>
</div>
    
    <div className="grid md:grid-cols-3 gap-8">
      
       <div className="group relative overflow-hidden cursor-pointer">
        <div className="aspect-[4/5] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=2070" alt="A-Frame Cottage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
        <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl font-serif text-white mb-2">A-Frame Cottage</h3>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest">Signature Stay</p>
        </div>
      </div>

       <div className="group relative overflow-hidden cursor-pointer">
        <div className="aspect-[4/5] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1000" alt="Luxury Wood House" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
        <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl font-serif text-white mb-2">Luxury Wood House</h3>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest">Nature Immersion</p>
        </div>
      </div>

       <div className="group relative overflow-hidden cursor-pointer">
        <div className="aspect-[4/5] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070" alt="Valley View Suite" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
        <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl font-serif text-white mb-2">Valley View Suite</h3>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest">Scenic Retreat</p>
        </div>
      </div>

       <div className="group relative overflow-hidden cursor-pointer">
        <div className="aspect-[4/5] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070" alt="Plantation Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
        <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl font-serif text-white mb-2">Plantation Villa</h3>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest">Heritage Stay</p>
        </div>
      </div>

       <div className="group relative overflow-hidden cursor-pointer">
        <div className="aspect-[4/5] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070" alt="Cloud Bed Cottage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
        <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl font-serif text-white mb-2">Cloud Bed Cottage</h3>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest">High Altitude</p>
        </div>
      </div>

       <div className="group relative overflow-hidden cursor-pointer">
        <div className="aspect-[4/5] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1613490493576-2f9b58e2528c?q=80&w=2070" alt="Family Estate House" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
        <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl font-serif text-white mb-2">Family Estate House</h3>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest">Group Getaway</p>
        </div>
      </div>

    </div>
  </div>
</section>

      <Amenities />
      <Testimonials />
      <Footer />
    </main>
  );
}