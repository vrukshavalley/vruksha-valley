export default function PrivacyPolicy() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto font-serif text-[#0A2F1F]">
        <h1 className="text-4xl md:text-6xl mb-8">Privacy Policy</h1>
        <div className="w-20 h-[2px] bg-[#C5A059] mb-12"></div>
        
        <div className="space-y-8 opacity-90 leading-relaxed text-lg italic">
          <section>
            <h2 className="text-2xl mb-4 font-bold not-italic">Information Collection</h2>
            <p>At Vruksha Valley, we collect personal information such as your name, contact details, and ID proof solely for booking and security purposes as per local regulations in Karnataka.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-bold not-italic">Data Usage</h2>
            <p>Your information is used to manage your reservations via our partner StayFlexi and to provide a personalized experience during your stay in Kalasa. We do not sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-bold not-italic">Security</h2>
            <p>We implement industry-standard security measures to protect your personal information from unauthorized access or disclosure.</p>
          </section>
        </div>
      </div>
    </main>
  );
}