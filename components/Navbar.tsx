"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      // Changed from bg-white to our new deep emerald color
      isScrolled ? "bg-emerald-950/95 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-8"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="relative h-12 w-48 transition-all duration-500">
          <img 
            src="/logo.png" 
            alt="Vruksha Valley Logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        <div className={`hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.3em] font-medium ${
          isScrolled ? "text-cream-100/90" : "text-white"
        }`}>
          <Link href="#cottages" className="hover:text-gold-500 transition">Cottages</Link>
          <Link href="#experience" className="hover:text-gold-500 transition">Experience</Link>
          <Link href="#gallery" className="hover:text-gold-500 transition">Gallery</Link>
        </div>

        <button className={`px-8 py-3 text-[10px] uppercase tracking-widest transition-all duration-500 rounded-sm border ${
          isScrolled 
          ? "border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-emerald-950" 
          : "border-white text-white hover:bg-white hover:text-emerald-950"
        }`}>
          Book Now
        </button>
      </div>
    </nav>
  );
}