"use client";
import { motion } from "framer-motion";

// This tells the component what data to expect
interface RoomProps {
  name: string;
  type: string;
  image: string;
  description: string;
}

export default function RoomCard({ name, type, image, description }: RoomProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-[450px] overflow-hidden rounded-sm">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        
        {/* Bottom Text Overlay */}
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-xs uppercase tracking-[0.3em] mb-2 opacity-80">{type}</p>
          <h3 className="text-3xl font-serif tracking-wide">{name}</h3>
        </div>
      </div>
      
      {/* Description below image */}
      <div className="mt-6">
        <p className="text-gray-500 text-sm leading-relaxed font-light max-w-xs">
          {description}
        </p>
        <div className="mt-4 w-10 h-[1px] bg-amber-600 transition-all group-hover:w-20" />
      </div>
    </motion.div>
  );
}