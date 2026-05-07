"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Settings = Record<string, string>;

const DEFAULTS: Settings = {
  contact_phone_1: "+91 82177 64481",
  contact_phone_2: "+91 63643 64481",
  contact_email: "vrukshavalley@gmail.com",
  contact_address: "Soormane Falls Road, Guddemakki, Kalasa, Karnataka - 577124",
  social_instagram: "https://www.instagram.com/vrukshavalley/",
  social_youtube: "https://youtube.com/@vrukshavalley",
  social_facebook: "https://facebook.com",
  footer_tagline: "A place to pause and remember what matters the most.",
};

export default function Footer() {
  const [s, setS] = useState<Settings>(DEFAULTS);

  useEffect(() => {
    createClient().from('site_settings').select('key,value').then(({ data }) => {
      if (data?.length) {
        const map: Settings = {};
        data.forEach(r => { map[r.key] = r.value || ''; });
        setS(prev => ({ ...prev, ...map }));
      }
    });
  }, []);

  const exploreUrl = "https://www.google.com/maps/search/?api=1&query=Vruksha+Valley+Resort+Kalasa";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Vruksha+Valley+Resort+Kalasa";

  return (
    <footer id="contact" className="bg-[#051610] text-white border-t border-[#C5A059]/20 pt-16 pb-10 font-serif">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div className="space-y-6">
          <img src="/logo.png" alt="Vruksha Valley" className="h-12" />
          <p className="text-white/80 text-sm leading-relaxed">{s.footer_tagline}</p>
          <div className="flex space-x-5">
            {[
              { Icon: Instagram, href: s.social_instagram },
              { Icon: Facebook, href: s.social_facebook },
              { Icon: Youtube, href: s.social_youtube },
            ].map(({ Icon, href }, idx) => (
              <a key={idx} href={href} target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#C5A059] transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[#C5A059] uppercase tracking-widest text-xs mb-8 font-bold">Policies</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li><Link href="/privacy-policy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-[#C5A059] transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/refund-policy" className="hover:text-[#C5A059] transition-colors">Refund & Cancellation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#C5A059] uppercase tracking-widest text-xs mb-8 font-bold">Contact</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-[#C5A059] mt-1 shrink-0" />
              <span>{s.contact_phone_1}<br />{s.contact_phone_2}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#C5A059] shrink-0" />
              <a href={`mailto:${s.contact_email}`} className="hover:text-[#C5A059]">{s.contact_email}</a>
            </li>
            <li className="flex items-start gap-3 leading-relaxed">
              <MapPin size={16} className="text-[#C5A059] mt-1 shrink-0" />
              <span>{s.contact_address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#C5A059] uppercase tracking-widest text-xs mb-8 font-bold">Locate Us</h4>
          <div className="w-full h-40 rounded-lg overflow-hidden border border-[#C5A059]/30 bg-white/5 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.204961555776!2d75.3712814!3d13.2422071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3497b5652598b%3A0x1d33fa62d794d25d!2sVruksha+Valley!5e0!3m2!1sen!2sin!4v1705322400000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              className="grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
            ></iframe>
            <a href={exploreUrl} target="_blank" rel="noopener noreferrer"
               className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xs font-bold uppercase tracking-widest border border-white px-3 py-1">View Location Info</span>
            </a>
          </div>
          <p className="mt-3 text-right">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer"
               className="text-[10px] uppercase tracking-widest text-[#FDFBF7] hover:text-[#C5A059] transition-all duration-300 flex items-center justify-end gap-1 font-bold">
              Get Directions →
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-50">
        <p>© 2026 Vruksha Valley Resort. All Rights Reserved.</p>
        <p>Crafted by Vivin Pinto</p>
      </div>
    </footer>
  );
}
