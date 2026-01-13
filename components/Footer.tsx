"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-cream-100/90 py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Identity */}
        <div className="md:col-span-2">
          <img src="/logo.png" alt="Vruksha Valley" className="h-12 mb-6" />
          <p className="font-serif text-xl text-white mb-4 max-w-sm">
            A place to pause and remember what matters the most.
          </p>
          <div className="flex space-x-6 mt-8">
            <Link href="#" className="hover:text-gold-500 transition"><Instagram size={20}/></Link>
            <Link href="#" className="hover:text-gold-500 transition"><Facebook size={20}/></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold-500 uppercase tracking-widest text-xs mb-6">Explore</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><Link href="#cottages" className="hover:text-white">The Cottages</Link></li>
            <li><Link href="#experience" className="hover:text-white">Experiences</Link></li>
            <li><Link href="#gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="#" className="hover:text-white">Sustainability</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-gold-500 uppercase tracking-widest text-xs mb-6">Contact</h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold-500" /> +91 XXXXX XXXXX
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-gold-500" /> stay@vrukshavalley.com
            </li>
            <li className="flex items-start gap-3 leading-relaxed">
              <MapPin size={16} className="text-gold-500 mt-1 shrink-0" /> 
              Kalasa, Chikmagalur,<br />Karnataka, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Credit Line */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-50">
        <p>© 2026 Vruksha Valley Resort. All Rights Reserved.</p>
        <p>Crafted by your Digital Partner</p>
      </div>
    </footer>
  );
}