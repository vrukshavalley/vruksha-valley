import React from 'react';
import RoomCarousel from "@/components/RoomCarousel";
import Navbar from "@/components/Navbar";

export default function GalleryPage() {
  const categories = [
    { 
      title: "Parijatha", 
      images: [
        "/gallery/vruksha-parijatha/vruksha-parijatha-1.webp",
        "/gallery/vruksha-parijatha/vruksha-parijatha-2.webp",
        "/gallery/vruksha-parijatha/vruksha-parijatha-3.webp"
      ] 
    },
    { 
      title: "Prakruthi",
      images: [
        "/gallery/vruksha-prakruthi/vruksha-prakruthi-1.webp",
        "/gallery/vruksha-prakruthi/vruksha-prakruthi-2.webp",
        "/gallery/vruksha-prakruthi/vruksha-prakruthi-3.webp",
        "/gallery/vruksha-prakruthi/vruksha-prakruthi-4.webp",
        "/gallery/vruksha-prakruthi/vruksha-prakruthi-5.webp",
        "/gallery/vruksha-prakruthi/vruksha-prakruthi-6.webp"
      ] 
    },
    { 
      title: "Myst Wood", 
      images: [
        "/gallery/vruksha-mystwood/vruksha-mystwood-1.webp",
        "/gallery/vruksha-mystwood/vruksha-mystwood-2.webp",
        "/gallery/vruksha-mystwood/vruksha-mystwood-3.webp",
        "/gallery/vruksha-mystwood/vruksha-mystwood-4.webp"
      ] 
    },
    { 
      title: "Kadamba", 
      images: [
        "/gallery/vruksha-kadamba/vruksha-kadamba-1.webp",
        "/gallery/vruksha-kadamba/vruksha-kadamba-2.webp"
      ] 
    },
    { 
      title: "Mouna", 
      images: [
        "/gallery/vruksha-mouna/vruksha-mouna-1.webp",
        "/gallery/vruksha-mouna/vruksha-mouna-2.webp",
        "/gallery/vruksha-mouna/vruksha-mouna-3.webp",
        "/gallery/vruksha-mouna/vruksha-mouna-4.webp"
      ] 
    },
    { 
      title: "Dormitory", 
      images: [
        "/gallery/vruksha-dormitory/vruksha-dormitory-1.webp",
        "/gallery/vruksha-dormitory/vruksha-dormitory-2.webp",
        "/gallery/vruksha-dormitory/vruksha-dormitory-3.webp"
      ]
    },
    { 
      title: "Swimming Pool", 
      images: [
        "/gallery/vruksha-pool/vruksha-pool-1.webp",
        "/gallery/vruksha-pool/vruksha-pool-2.webp",
        "/gallery/vruksha-pool/vruksha-pool-3.webp"
      ] 
    },
    { 
      title: "Dining Space", 
      images: [
        "/gallery/vruksha-diningspace/vruksha-diningspace-1.webp",
        "/gallery/vruksha-diningspace/vruksha-diningspace-2.webp",
        "/gallery/vruksha-diningspace/vruksha-diningspace-3.webp"
      ] 
    },
    { 
      title: "Indoor Games", 
      images: [
        "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2070",
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070"
      ] 
    },
  ];

  return (
    <section className="bg-[#FDFBF7] pt-32 pb-20 w-full min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl text-[#0A2F1F] font-serif font-normal mb-4">
            Our Gallery
          </h1>
          <div className="w-20 h-[2px] bg-[#C5A059] mx-auto"></div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col space-y-4 group">
              <div className="relative rounded-sm overflow-hidden shadow-md bg-[#0A2F1F]">
                <RoomCarousel images={cat.images} name={cat.title} />
              </div>
              
              <div className="text-center pt-2">
                <h2 className="text-[#0A2F1F] text-xs tracking-[4px] uppercase font-bold">
                  {cat.title}
                </h2>
                <div className="w-10 h-[1px] bg-[#C5A059] mx-auto mt-2 opacity-50 group-hover:w-20 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}