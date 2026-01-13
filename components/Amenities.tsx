"use client";
import React from "react";
import { TreePine, Coffee, Flame, Map, Wind, Waves } from "lucide-react";

// This list now stores the "Component" itself, not a rendered tag
const amenityList = [
  { icon: TreePine, title: "Estate Walk", desc: "Guided tours through our lush coffee plantations." },
  { icon: Waves, title: "Soormane Falls", desc: "Just 800m away. Experience the roar of nature." },
  { icon: Flame, title: "Campfire", desc: "Warm evenings under the starlit Kalasa sky." },
  { icon: Coffee, title: "Malnad Cuisine", desc: "Authentic local flavors served fresh daily." },
  { icon: Map, title: "Guided Trek", desc: "Explore the hidden trails of the Western Ghats." },
  { icon: Wind, title: "Pure Serenity", desc: "Zero noise pollution. Only the sound of the wild." },
];

export default function Amenities() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block">Our Offerings</span>
          <h2 className="text-4xl font-serif text-emerald-950">Curated Experiences</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12">
          {amenityList.map((item, index) => {
            // We pull the icon out as a Component variable (Capital 'I')
            const IconComponent = item.icon;
            
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="text-gold-500 mb-6 transition-transform duration-500 group-hover:scale-110">
                  {/* Now we just render it like a normal tag! No more cloneElement errors. */}
                  <IconComponent size={40} strokeWidth={1} />
                </div>
                <h3 className="text-emerald-950 font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}