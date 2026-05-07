"use client";

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

type Review = { id: string; author: string; role: string; content: string; order_index: number };

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    createClient().from('testimonials').select('*').order('order_index').then(({ data }) => {
      if (data?.length) setReviews(data);
    });
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  if (reviews.length === 0) return null;

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
                    &ldquo;{review.content}&rdquo;
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
