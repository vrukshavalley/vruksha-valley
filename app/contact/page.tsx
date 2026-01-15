import { MapPin, Phone, Instagram, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 bg-[#FDFBF7] text-[#0A2F1F]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#C5A059] text-xs uppercase tracking-[0.5em] font-bold mb-4">Get in Touch</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">We are here to <br/> <span className="text-[#C5A059] italic">guide you.</span></h1>
          <p className="text-lg font-serif italic text-[#0A2F1F]/70">
            Planning a trek or looking for a relaxing stay? Reach out to us for bookings, 
            itineraries, or just a friendly chat about the mountains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <div className="bg-[#0A2F1F] text-[#FDFBF7] p-10 md:p-16 rounded-sm shadow-2xl space-y-10">
            <div className="flex items-start gap-6">
              <MapPin className="text-[#C5A059] shrink-0" size={28} />
              <div>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-2 text-[#C5A059]">The Resort Address</h3>
                <p className="text-xl font-serif">Soormane Falls Road, Guddemakki, <br/> Kalasa, Karnataka 577124</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Phone className="text-[#C5A059] shrink-0" size={28} />
              <div>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-2 text-[#C5A059]">Reservations</h3>
                <p className="text-xl font-serif">+91 82177 64481</p>
                <p className="text-xl font-serif">+91 63643 64481</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Instagram className="text-[#C5A059] shrink-0" size={28} />
              <div>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-2 text-[#C5A059]">Follow Our Story</h3>
                <a href="https://instagram.com/vrukshavalley" target="_blank" className="text-xl font-serif hover:text-[#C5A059] transition-all">@vrukshavalley</a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Clock className="text-[#C5A059] shrink-0" size={28} />
              <div>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-2 text-[#C5A059]">Best Time to Call</h3>
                <p className="text-xl font-serif">8:00 AM — 10:00 PM IST</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 border border-[#0A2F1F]/5 shadow-sm">
            <h2 className="text-3xl font-serif mb-8">Send an Inquiry</h2>
            <form className="space-y-6">
              <div className="space-y-1 border-b border-[#0A2F1F]/10 pb-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#0A2F1F]/50">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-transparent outline-none font-serif text-lg" />
              </div>
              <div className="space-y-1 border-b border-[#0A2F1F]/10 pb-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#0A2F1F]/50">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full bg-transparent outline-none font-serif text-lg" />
              </div>
              <div className="space-y-1 border-b border-[#0A2F1F]/10 pb-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#0A2F1F]/50">Your Message</label>
                <textarea rows={4} placeholder="Tell us about your planned visit..." className="w-full bg-transparent outline-none font-serif text-lg resize-none" />
              </div>
              <button className="w-full py-5 bg-[#D4AF37] text-[#0A2F1F] uppercase tracking-[0.4em] font-bold text-[10px] hover:bg-[#0A2F1F] hover:text-[#FDFBF7] transition-all duration-500">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}