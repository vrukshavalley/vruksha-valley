"use client";

import { useEffect, useState } from 'react';
import { Trees, Waves, Flame, Coffee, Map, Wind, Star, Sun, Mountain, Camera, Heart, Wifi } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind, Waves, Flame, Coffee, Map, Trees, Star, Sun, Mountain, Camera, Heart, Wifi
};

type Amenity = { id: string; icon: string; title: string; description: string; order_index: number };

const Amenities = () => {
  const [list, setList] = useState<Amenity[]>([]);

  useEffect(() => {
    createClient().from('amenities').select('*').order('order_index').then(({ data }) => {
      if (data?.length) setList(data);
    });
  }, []);

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
          {list.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || Star;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <Icon className="w-10 h-10 mb-4 text-[#C5A059] stroke-[1px]" />
                <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-[#0A2F1F]">
                  {item.title}
                </h3>
                <p className="text-[#0A2F1F]/80 text-xs md:text-sm leading-relaxed max-w-[150px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
