"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The silence here is profound. Watching the mist roll over the Kalasa peaks from our A-frame was the reset I didn't know I needed.",
    author: "Arjun Mehta",
    role: "Tech Lead, Bangalore"
  },
  {
    quote: "A rare find. The proximity to Soormane Falls combined with the luxury of the wood house makes this the finest stay in Malnad.",
    author: "Priya Rao",
    role: "Nature Photographer"
  },
  {
    quote: "Finally, a place that understands the luxury of space. We spent hours just 'pausing' and listening to the estate sounds.",
    author: "Vikram Singh",
    role: "Entrepreneur"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-cream-100 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <Quote className="text-gold-500 mx-auto mb-6 opacity-40" size={40} strokeWidth={1} />
          <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 italic">Guest Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col text-center md:text-left"
            >
              <p className="text-emerald-900/80 font-light italic leading-relaxed mb-8 text-lg">
                "{item.quote}"
              </p>
              <div>
                <h4 className="text-emerald-950 font-semibold tracking-widest text-xs uppercase mb-1">
                  {item.author}
                </h4>
                <p className="text-gold-500 text-[10px] uppercase tracking-[0.2em]">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}