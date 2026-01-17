"use client"; 
import React, { useState } from "react";
import { MapPin, Phone, Instagram, Clock, CheckCircle, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("SUBMITTING");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "5f51ff18-48af-441c-8119-c45792b643da"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  }

  return (
    <main className="pt-24 md:pt-32 pb-20 bg-[#FDFBF7] text-[#0A2F1F]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[#C5A059] text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold mb-4">Get in Touch</p>
          <h1 className="text-3xl md:text-7xl font-serif mb-6 leading-tight px-2">
            We are here to <br/> <span className="text-[#C5A059] italic">guide you.</span>
          </h1>
          <p className="text-base md:text-lg font-serif italic text-[#0A2F1F]/70 px-4">
            Planning a trek or looking for a relaxing stay? Reach out to us for bookings, 
            itineraries, or just a friendly chat about the mountains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          <div className="bg-[#0A2F1F] text-[#FDFBF7] p-8 md:p-16 rounded-sm shadow-2xl space-y-8">
            <div className="flex items-start gap-4 md:gap-6">
              <MapPin className="text-[#C5A059] shrink-0" size={24} />
              <div>
                <h3 className="uppercase tracking-widest text-[10px] font-bold mb-2 text-[#C5A059]">The Resort Address</h3>
                <p className="text-lg md:text-xl font-serif leading-snug">Soormane Falls Road, Guddemakki, <br className="hidden md:block"/> Kalasa, Karnataka 577124</p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <Phone className="text-[#C5A059] shrink-0" size={24} />
              <div>
                <h3 className="uppercase tracking-widest text-[10px] font-bold mb-2 text-[#C5A059]">Reservations</h3>
                <p className="text-lg md:text-xl font-serif">+91 82177 64481</p>
                <p className="text-lg md:text-xl font-serif">+91 63643 64481</p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <MessageCircle className="text-[#C5A059] shrink-0" size={24} />
              <div>
                <h3 className="uppercase tracking-widest text-[10px] font-bold mb-2 text-[#C5A059]">WhatsApp Chat</h3>
                <a href="https://wa.me/918217764481" target="_blank" className="text-lg md:text-xl font-serif hover:text-[#C5A059] border-b border-[#C5A059]/30">Click to chat with us</a>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6 pt-4">
              <Clock className="text-[#C5A059] shrink-0" size={24} />
              <div>
                <h3 className="uppercase tracking-widest text-[10px] font-bold mb-2 text-[#C5A059]">Best Time to Call</h3>
                <p className="text-lg md:text-xl font-serif">8:00 AM — 10:00 PM IST</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-16 border border-[#0A2F1F]/5 shadow-sm min-h-[520px] flex flex-col justify-center">
            {status === "SUCCESS" ? (
              <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <CheckCircle className="mx-auto text-[#C5A059]" size={64} />
                <h2 className="text-3xl font-serif">Message Received</h2>
                <p className="text-[#0A2F1F]/60 font-serif italic">Thank you for reaching out. Our team at Vruksha Valley will get back to you shortly.</p>
                <button onClick={() => setStatus("IDLE")} className="text-[#C5A059] uppercase tracking-widest text-[10px] font-bold border-b border-[#C5A059] pb-1">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-serif mb-8">Send an Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="from_name" value="Vruksha Valley Website" />
                  
                  <div className="space-y-1 border-b border-[#0A2F1F]/10 pb-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#0A2F1F]/50">Full Name</label>
                    <input name="name" required type="text" placeholder="John Doe" className="w-full bg-transparent outline-none font-serif text-base md:text-lg" />
                  </div>

                  <div className="space-y-1 border-b border-[#0A2F1F]/10 pb-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#0A2F1F]/50">Phone Number</label>
                    <input name="phone" required type="tel" placeholder="+91 00000 00000" className="w-full bg-transparent outline-none font-serif text-base md:text-lg" />
                  </div>

                  <div className="space-y-1 border-b border-[#0A2F1F]/10 pb-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#0A2F1F]/50">Your Message</label>
                    <textarea name="message" required rows={4} placeholder="Tell us about your planned visit..." className="w-full bg-transparent outline-none font-serif text-base md:text-lg resize-none" />
                  </div>

                  <button 
                    disabled={status === "SUBMITTING"}
                    className="w-full py-5 bg-[#C5A059] text-[#0A2F1F] uppercase tracking-[0.4em] font-bold text-[10px] hover:bg-[#0A2F1F] hover:text-[#FDFBF7] transition-all duration-500 disabled:opacity-50"
                  >
                    {status === "SUBMITTING" ? "Sending..." : "Submit Inquiry"}
                  </button>
                  
                  {status === "ERROR" && (
                    <p className="text-red-600 text-[10px] text-center uppercase tracking-widest">Something went wrong. Please try again.</p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}