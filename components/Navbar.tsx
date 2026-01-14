"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "918217764481";
  const message = encodeURIComponent("Hello, I am interested in booking a stay at Vruksha Valley. Could you please share the details?");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#0A2F1F] shadow-xl py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Vruksha Valley" 
            className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        <div className="hidden md:flex space-x-12 text-[11px] uppercase tracking-[0.3em] font-serif font-bold text-[#F8F5F0]">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors duration-300">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#D4AF37] transition-colors duration-300">
            About
          </Link>
<Link href="/gallery" className="hover:text-[#D4AF37] transition-colors duration-300">
    Gallery
</Link>
          <Link href="#contact" className="hover:text-[#D4AF37] transition-colors duration-300">
            Contact Us
          </Link>
        </div>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-bold font-serif border transition-all duration-300 cursor-pointer
            ${isScrolled 
              ? "bg-[#D4AF37] text-[#051610] border-[#D4AF37] hover:bg-white hover:text-[#051610] hover:border-white" 
              : "bg-transparent text-white border-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#051610]"
            }
        `}>
          Book Now
        </a>
      </div>
    </nav>
  );
}