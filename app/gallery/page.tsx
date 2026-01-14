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
    <main style={{ padding: "80px 20px", maxWidth: "1300px", margin: "0 auto" }}>
      <header style={{ textAlign: "center", marginBottom: "70px" }}>
        <h1 style={{ 
          fontSize: "3.5rem", 
          color: "#064e3b", 
          fontWeight: "400", 
          marginBottom: "15px" 
        }}>
          Our Gallery
        </h1>
        <div style={{ width: "80px", height: "2px", backgroundColor: "#059669", margin: "0 auto" }}></div>
      </header>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", 
        gap: "40px" 
      }}>
        {categories.map((cat, index) => (
          <div key={index} style={{ 
            position: "relative", 
            height: "450px", 
            borderRadius: "4px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
          }}>
            <img 
              src={`https://loremflickr.com/800/1000/${cat.keyword}?random=${index}`} 
              alt={cat.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
            
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(6, 78, 59, 0.85), transparent)", 
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <h2 style={{ 
                color: "#FDFBF7",
                fontSize: "1.5rem", 
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontWeight: "300",
                borderBottom: "1px solid rgba(253, 251, 247, 0.3)",
                paddingBottom: "10px"
              }}>
                {cat.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}