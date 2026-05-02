"use client";

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { id: 1, text: "The silence here is profound. Watching the mist roll over the Kalasa peaks from our A-frame was the reset I didn't know I needed.", author: "Arjun Mehta", role: "Tech Lead, Bangalore" },
  { id: 2, text: "A rare find. The proximity to Soormane Falls combined with the luxury of the wood house makes this the finest stay in Malnad.", author: "Priya Rao", role: "Nature Photographer" },
  { id: 3, text: "Finally, a place that understands the luxury of space. We spent hours just 'pausing' and listening to the estate sounds.", author: "Vikram Singh", role: "Entrepreneur" },
  { id: 4, text: "The Malnad cuisine was exceptional. Waking up to the smell of fresh coffee and damp earth is a memory I will cherish forever.", author: "Sneha Kapoor", role: "Food Blogger" },
  { id: 5, text: "Perfect for families. The kids loved the estate walk, and we loved the absolute privacy of the Plantation Villa.", author: "Rahul Nair", role: "Architect" },
  { id: 6, text: "I have traveled across the Western Ghats, but the hospitality at Vruksha Valley is in a league of its own.", author: "Ananya Desai", role: "Travel Writer" }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex === reviews.length - 1 ? 0 : prevIndex + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-[#0A2F1F] text-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-6xl leading-tight font-serif mb-4">
            Guest Stories
          </h2>
          <div className="w-20 h-[2px] bg-[#C5A059] mx-auto"></div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-full flex-shrink-0 px-4 md:px-12">
                <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
                  <div className="flex gap-1 text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#C5A059" stroke="none" />
                    ))}
                  </div>
                  <p className="font-serif italic text-lg md:text-2xl leading-relaxed opacity-90 max-w-2xl">
                    "{review.text}"
                  </p>
                  <div className="border-t border-[#C5A059]/30 pt-6 w-32">
                    <p className="text-[#C5A059] text-xs uppercase tracking-widest font-bold">
                      {review.author}
                    </p>
                    <p className="text-white/50 text-[10px] uppercase tracking-widest mt-2">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  index === currentIndex ? "w-8 bg-[#C5A059]" : "w-2 bg-[#C5A059]/30"
                }`}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
  <a 
    href="https://search.google.com/local/reviews?placeid=ChIJi1lSVntJuzsRXdKS12L6Mx0" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block px-10 py-4 border border-[#C5A059] text-[#C5A059] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] hover:text-[#0A2F1F] transition-all duration-500 rounded-sm"
  >
    Read Verified Reviews on Google
  </a>
</div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;