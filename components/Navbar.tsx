"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = isScrolled || isMenuOpen || pathname !== "/";

  // Pre-filled WhatsApp message link
  const whatsappUrl = "https://wa.me/918217764481?text=Hi%20Vruksha%20Valley%2C%20I'm%20interested%20in%20booking%20a%20stay.%20Could%20you%20please%20share%20the%20availability%3F";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isSolid ? "bg-[#0A2F1F] py-4 shadow-xl" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <div className="flex-1 md:flex-none flex justify-start items-center">
          <button 
            className="md:hidden text-[#F8F5F0] transition-transform active:scale-90" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={28} />
          </button>

          <Link href="/" className="hidden md:block">
            <Image 
              src="/logo.png" 
              alt="Vruksha Valley Luxury Resort Kalasa" 
              width={150} 
              height={64} 
              priority 
              className="h-16 w-auto"
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <Link href="/" className="md:hidden">
            <Image 
              src="/logo.png" 
              alt="Vruksha Valley Logo" 
              width={100} 
              height={40} 
              priority
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex space-x-12 text-[11px] uppercase tracking-[0.3em] font-serif font-bold text-[#F8F5F0]">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About</Link>
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Journal</Link>
            <Link href="/gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link>
          </div>
        </div>

        <div className="flex-1 md:flex-none flex justify-end items-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 md:px-8 md:py-3 text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold font-serif bg-[#D4AF37] text-[#051610] hover:bg-white transition-all whitespace-nowrap inline-block"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className={`fixed inset-0 bg-[#0A2F1F] flex flex-col transition-all duration-500 ease-in-out md:hidden z-[105] ${
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <button onClick={() => setIsMenuOpen(false)} className="text-[#F8F5F0]">
            <X size={32} />
          </button>

          <Image 
            src="/logo.png" 
            alt="Vruksha Valley Logo"
            width={100}
            height={40}
            className="h-10 w-auto opacity-50" 
          />
          <div className="w-8"></div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center space-y-8 relative z-10">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif text-[#F8F5F0] hover:text-[#D4AF37]">Home</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif text-[#F8F5F0] hover:text-[#D4AF37]">About</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif text-[#F8F5F0]">Journal</Link>
          <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif text-[#F8F5F0] hover:text-[#D4AF37]">Gallery</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif text-[#F8F5F0] hover:text-[#D4AF37]">Contact Us</Link>
          <a 
            href={whatsappUrl}
            className="text-3xl font-serif text-[#D4AF37] border-b border-[#D4AF37]"
          >
            Book Now
          </a>
        </div>

        <div className="p-10 border-t border-white/10 bg-black/20 relative z-10">
          <div className="flex justify-center space-x-8 mb-6">
            <a href="https://www.instagram.com/vrukshavalley/" target="_blank" rel="noopener noreferrer"><Instagram className="text-[#C5A059]" size={24} /></a>
            <a href="#"><Facebook className="text-[#C5A059]" size={24} /></a>
            <a href="tel:+918217764481"><Phone className="text-[#C5A059]" size={24} /></a>
          </div>

          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#F8F5F0]/80">
            Kalasa, Karnataka <br /> +91 82177 64481, +91 63643 64481
          </p>
        </div>
      </div>
    </nav>
  );
}