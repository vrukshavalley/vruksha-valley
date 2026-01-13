import Navbar from "@/components/Navbar";
import RoomCard from "@/components/RoomCard";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

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
        <div className="relative z-20 text-center px-4">
          <p className="text-gold-500 text-xs uppercase tracking-[0.5em] mb-6 font-medium">The Kalasa Collection</p>
          <h1 className="text-white text-5xl md:text-8xl font-serif mb-8 leading-tight">
            Return to <span className="text-gold-500 italic">Center.</span>
          </h1>
          <button className="bg-gold-500 text-emerald-950 px-12 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all duration-500">
            Secure Your Retreat
          </button>
        </div>
      </section>

      <section id="cottages" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {cottages.map((room) => (
            <RoomCard key={room.name} {...room} />
          ))}
        </div>
      </section>

      {/* AMENITIES SECTION */}
      <Amenities />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* FOOTER SECTION */}
      <Footer />
    </main>
  );
}