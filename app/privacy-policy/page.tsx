export default function PrivacyPolicy() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto font-serif text-[#0A2F1F]">
        <header className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-5xl font-normal mb-3 md:mb-4">Privacy Policy</h1>
          <div className="w-12 md:w-16 h-[1.5px] bg-[#C5A059]"></div>
        </header>
        
        <div className="space-y-8 md:space-y-10 opacity-90 leading-relaxed text-sm md:text-lg italic">
          <section>
            <h2 className="text-sm md:text-2xl mb-3 md:mb-4 font-bold not-italic uppercase tracking-widest">Information Collection</h2>
            <p>At Vruksha Valley, we collect personal information such as your name, contact details, and ID proof solely for booking and security purposes as per local regulations in Karnataka.</p>
          </section>

          <section>
            <h2 className="text-sm md:text-2xl mb-3 md:mb-4 font-bold not-italic uppercase tracking-widest">Data Usage</h2>
            <p>Your information is used to manage your reservations via our partner StayFlexi and to provide a personalized experience during your stay in Kalasa. We do not sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-sm md:text-2xl mb-3 md:mb-4 font-bold not-italic uppercase tracking-widest">Security</h2>
            <p>We implement industry-standard security measures to protect your personal information from unauthorized access or disclosure.</p>
          </section>
        </div>
      </div>
    </main>
  );
}