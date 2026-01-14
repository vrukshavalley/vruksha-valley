import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto", backgroundColor: "#FDFBF7", color: "#064e3b" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", fontFamily: "'Playfair Display', serif" }}>Privacy Policy</h1>
      <div style={{ width: "60px", height: "2px", backgroundColor: "#059669", marginBottom: "40px" }}></div>
      
      <section style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
        <p>Your privacy is important to us. This policy outlines how Vruksha Valley Resort collects and manages your data...</p>
        <h3 style={{ marginTop: "30px" }}>1. Data Collection</h3>
        <p>We collect information provided during booking to ensure a seamless stay in the Western Ghats.</p>
        {/* Add rest of your specific policy text here */}
      </section>
    </main>
  );
}