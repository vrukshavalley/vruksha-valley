"use client";

import React from 'react';
import { Trees, Waves, Flame, Coffee, Map, Wind, Wifi, Thermometer, Car } from 'lucide-react';

const Amenities = () => {
  const amenitiesList = [
    { icon: Trees, title: "Estate Walk", desc: "Guided tours through our lush coffee plantations." },
    { icon: Waves, title: "Soormane Falls", desc: "Just 800m away. Experience the roar of nature." },
    { icon: Flame, title: "Campfire", desc: "Warm evenings under the starlit Kalasa sky." },
    { icon: Coffee, title: "Malnad Cuisine", desc: "Authentic local flavors served fresh daily." },
    { icon: Map, title: "Guided Trek", desc: "Explore the hidden trails of the Western Ghats." },
    { icon: Wind, title: "Pure Serenity", desc: "Zero noise pollution. Only the sound of the wild." },
    { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Stay connected with the world, even in the heart of the valley." },
    { icon: Thermometer, title: "24/7 Hot Water", desc: "Deep forest luxury with all the modern comforts." },
    { icon: Car, title: "Secure Parking", desc: "Private, on-site parking for all our guests within the estate." }
  ];

  return (

<section className="py-12 md:py-16 bg-[#FDFBF7] text-[#0A2F1F]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-6xl leading-tight font-serif mb-4 text-[#0A2F1F]">
        Beyond The Stay
      </h2>
      <div className="w-20 h-[2px] bg-[#059669] mx-auto"></div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
      {amenitiesList.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <item.icon className="w-10 h-10 mb-4 text-[#C5A059] stroke-[1px]" />

          <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-[#0A2F1F]">
            {item.title}
          </h3>

          <p className="text-[#0A2F1F]/80 text-xs md:text-sm leading-relaxed max-w-[150px]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Amenities;