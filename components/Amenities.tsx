import React from 'react';
import { Trees, Waves, Flame, Coffee, Map, Wind, Wifi, Thermometer, Car } from 'lucide-react';

const Amenities = () => {
  return (
    <section className="py-12 bg-[#F8F5F0] text-[#0A2F1F]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-5xl font-serif tracking-wide border-[#D4AF37] inline-block pb-4 text-[#0A2F1F] mb-16">
          <div style={{ textAlign: "center", marginBottom: "0px" }}>
  <h2 style={{ 
    fontSize: "3.5rem", 
    color: "#064e3b",
    fontWeight: "400",
    marginBottom: "15px",
    fontFamily: "'Playfair Display', serif" 
  }}>
    Beyond The Stay
  </h2>
  <div style={{ 
    width: "80px", 
    height: "2px", 
    backgroundColor: "#059669", 
    margin: "0 auto" 
  }}></div>
</div>
        </h2>

        <div className="grid md:grid-cols-3 gap-16">
           <div className="space-y-4 flex flex-col items-center">
            <Trees className="w-12 h-12 text-[#D4AF37] stroke-[1px]" />
            <h3 className="text-xl font-serif font-bold text-[#0A2F1F]">Estate Walk</h3>
            <p className="text-[#0A2F1F]/80 text-sm leading-relaxed max-w-xs">
              Guided tours through our lush coffee plantations.
            </p>
          </div>
           <div className="space-y-4 flex flex-col items-center">
            <Waves className="w-12 h-12 text-[#D4AF37] stroke-[1px]" />
            <h3 className="text-xl font-serif font-bold text-[#0A2F1F]">Soormane Falls</h3>
            <p className="text-[#0A2F1F]/80 text-sm leading-relaxed max-w-xs">
              Just 800m away. Experience the roar of nature.
            </p>
          </div>
           <div className="space-y-4 flex flex-col items-center">
            <Flame className="w-12 h-12 text-[#D4AF37] stroke-[1px]" />
            <h3 className="text-xl font-serif font-bold text-[#0A2F1F]">Campfire</h3>
            <p className="text-[#0A2F1F]/80 text-sm leading-relaxed max-w-xs">
              Warm evenings under the starlit Kalasa sky.
            </p>
          </div>
           <div className="space-y-4 flex flex-col items-center">
            <Coffee className="w-12 h-12 text-[#D4AF37] stroke-[1px]" />
            <h3 className="text-xl font-serif font-bold text-[#0A2F1F]">Malnad Cuisine</h3>
            <p className="text-[#0A2F1F]/80 text-sm leading-relaxed max-w-xs">
              Authentic local flavors served fresh daily.
            </p>
          </div>
           <div className="space-y-4 flex flex-col items-center">
            <Map className="w-12 h-12 text-[#D4AF37] stroke-[1px]" />
            <h3 className="text-xl font-serif font-bold text-[#0A2F1F]">Guided Trek</h3>
            <p className="text-[#0A2F1F]/80 text-sm leading-relaxed max-w-xs">
              Explore the hidden trails of the Western Ghats.
            </p>
          </div>
           <div className="space-y-4 flex flex-col items-center">
            <Wind className="w-12 h-12 text-[#D4AF37] stroke-[1px]" />
            <h3 className="text-xl font-serif font-bold text-[#0A2F1F]">Pure Serenity</h3>
            <p className="text-[#0A2F1F]/80 text-sm leading-relaxed max-w-xs">
              Zero noise pollution. Only the sound of the wild.
            </p>
          </div>
          <div className="space-y-4 flex flex-col items-center">
  <Wifi className="w-12 h-12 text-[#D4AF37] stroke-[1px]" />
  <h3 className="text-xl font-serif font-bold text-[#0A2F1F]">High-Speed Wi-Fi</h3>
  <p className="text-[#0A2F1F]/80 text-sm leading-relaxed max-w-xs">Stay connected with the world, even in the heart of the valley.</p>
</div>

<div className="space-y-4 flex flex-col items-center">
  <Thermometer className="w-12 h-12 text-[#D4AF37] stroke-[1px]" />
  <h3 className="text-xl font-serif font-bold text-[#0A2F1F]">24/7 Hot Water</h3>
  <p className="text-[#0A2F1F]/80 text-sm leading-relaxed max-w-xs">Deep forest luxury with all the modern comforts you expect.</p>
</div>

<div className="space-y-4 flex flex-col items-center">
  <Car className="w-12 h-12 text-[#D4AF37] stroke-[1px]" />
  <h3 className="text-xl font-serif font-bold text-[#0A2F1F]">Secure Parking</h3>
  <p className="text-[#0A2F1F]/80 text-sm leading-relaxed max-w-xs">Private, on-site parking for all our guests within the estate.</p>
</div>
        </div>

      </div>
    </section>
  );
};

export default Amenities;