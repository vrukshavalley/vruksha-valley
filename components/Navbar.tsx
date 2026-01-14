"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || isMenuOpen ? "bg-[#0A2F1F] py-4 shadow-xl" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link href="/" className="z-50">
          <img src="/logo.png" alt="Vruksha Valley" className="h-10 md:h-16" />
        </Link>

        <div className="hidden md:flex space-x-12 text-[11px] uppercase tracking-[0.3em] font-serif font-bold text-[#F8F5F0]">
          <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
          <Link href="#about" className="hover:text-[#D4AF37]">About</Link>
          <Link href="/gallery" className="hover:text-[#D4AF37]">Gallery</Link>
          <Link href="#contact" className="hover:text-[#D4AF37]">Contact Us</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 md:px-8 md:py-3 text-[10px] uppercase tracking-[0.2em] font-bold font-serif bg-[#D4AF37] text-[#051610] hover:bg-white transition-all">
            Book Now
          </button>

          <button className="md:hidden text-[#F8F5F0] z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-[#0A2F1F] flex flex-col items-center justify-center transition-transform duration-500 md:hidden ${
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="flex flex-col space-y-8 text-center text-xl font-serif text-[#F8F5F0]">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}