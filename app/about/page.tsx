import React from 'react';

export default function AboutPage() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen">

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A2F1F]/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070" 
            className="w-full h-full object-cover"
            alt="Vruksha Valley Landscape"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <h1 className="text-[#FDFBF7] text-5xl md:text-8xl font-serif leading-tight drop-shadow-2xl">
            Our Story
          </h1>
          <div className="w-24 h-[2px] bg-[#C5A059] mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-[#C5A059] text-xs md:text-sm uppercase tracking-[0.6em] font-serif font-bold">
            Rooted in Nature
          </p>
          <h2 className="text-3xl md:text-5xl text-[#0A2F1F] font-serif leading-snug">
            Where the misty mountains of Kalasa meet the <span className="italic">warmth of Malnad hospitality.</span>
          </h2>
          <div className="space-y-6 text-[#0A2F1F]/80 font-serif leading-relaxed text-lg italic max-w-2xl mx-auto">
            <p>
              Vruksha Valley was established with a singular vision: to preserve the quiet dignity of the Western Ghats while offering a sanctuary for those seeking a pause from the modern world.
            </p>
            <p>
              Our estate is more than just a resort; it is a working coffee plantation where every trail, every tree, and every sunrise tells the story of our family’s deep connection to this land.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071" 
              alt="Nature at Vruksha Valley" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl md:text-5xl text-[#0A2F1F] font-serif">Sustainable <br/>Luxury.</h3>
            <p className="text-[#0A2F1F]/70 text-lg leading-relaxed font-serif">
              We believe in "Low Impact, High Experience." From our signature A-Frame cottages designed to blend into the canopy to our farm-to-table dining, every detail at Vruksha Valley is crafted to honor the environment.
            </p>
            <ul className="space-y-4 text-[#0A2F1F] font-serif italic">
              <li className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#C5A059]"></span> 800m from the majestic Soormane Falls.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#C5A059]"></span> Gateway to Netravati Peak & Kyatanamakki.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#C5A059]"></span> Authentic Malnad Cuisine & Coffee Estate tours.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A2F1F] text-[#FDFBF7] text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif">Experience the Silence.</h2>
          <p className="opacity-80 text-lg font-serif italic">
            Your journey into the heart of the Western Ghats begins here.
          </p>
          <button className="px-12 py-4 bg-[#C5A059] text-[#051610] uppercase tracking-widest font-bold font-serif hover:bg-white transition-all">
            Book Your Retreat
          </button>
        </div>
      </section>
    </main>
  );
}