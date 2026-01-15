export default function TermsConditions() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto font-serif text-[#0A2F1F]">
        <h1 className="text-4xl md:text-6xl mb-8">Terms & Conditions</h1>
        <div className="w-20 h-[2px] bg-[#C5A059] mb-12"></div>
        
        <div className="space-y-8 opacity-90 leading-relaxed text-lg italic">
          <section>
            <h2 className="text-2xl mb-4 font-bold not-italic">Check-in & Check-out</h2>
            <p>Standard Check-in time is 12:00 PM and Check-out is 11:00 AM. Early check-in or late check-out is subject to availability and may incur additional charges.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-bold not-italic">Guest Conduct</h2>
            <p>Vruksha Valley is a nature retreat. We request guests to maintain the peace and avoid loud music after 10:00 PM. Any damage to estate property will be charged to the guest.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-bold not-italic">Identification</h2>
            <p>A valid government-issued ID (Aadhar, Passport, or Driving License) is mandatory for all guests at the time of check-in.</p>
          </section>
        </div>
      </div>
    </main>
  );
}