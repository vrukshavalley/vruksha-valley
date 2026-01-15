import React from 'react';

export default function GalleryPage() {
  const categories = [
    { title: "Dormitory Bhadra", keyword: "cottage,interior" },
    { title: "Parijatha 1", keyword: "nature,cabin" },
    { title: "Myst Wood", keyword: "forest,resort" },
    { title: "Swimming Pool", keyword: "luxury,pool" },
    { title: "Dining Area", keyword: "resort,restaurant" },
    { title: "Reception", keyword: "luxury,lobby" },
  ];

  return (
    <section className="bg-[#FDFBF7] pt-32 pb-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl text-[#0A2F1F] font-serif font-normal mb-4">
            Our Gallery
          </h1>
          <div className="w-20 h-[2px] bg-[#C5A059] mx-auto"></div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-sm group">
              <img 
                src={`https://loremflickr.com/800/1000/${cat.keyword}?random=${index}`} 
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1F]/90 via-transparent to-transparent flex items-end justify-center pb-8">
                <h2 className="text-[#FDFBF7] text-xl tracking-[4px] uppercase font-light border-b border-[#FDFBF7]/30 pb-2">
                  {cat.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}