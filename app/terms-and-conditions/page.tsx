export default function TermsConditions() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto font-serif text-[#0A2F1F]">
        <header className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-5xl font-normal mb-3 md:mb-4">Terms & Conditions</h1>
          <div className="w-12 md:w-16 h-[1.5px] bg-[#C5A059]"></div>
        </header>
        
        <div className="space-y-8 md:space-y-10 opacity-90 leading-relaxed text-sm md:text-lg italic">
          <section>
            <h2 className="text-sm md:text-2xl mb-3 md:mb-4 font-bold not-italic uppercase tracking-widest">Check-in & Check-out</h2>
            <p>Standard Check-in time is 12:00 PM and Check-out is 11:00 AM. Early check-in or late check-out is subject to availability and may incur additional charges.</p>
          </section>

          <section>
            <h2 className="text-sm md:text-2xl mb-3 md:mb-4 font-bold not-italic uppercase tracking-widest">Guest Conduct</h2>
            <p>Vruksha Valley is a nature retreat. We request guests to maintain the peace and avoid loud music after 10:00 PM. Any damage to estate property will be charged to the guest.</p>
          </section>

          <section>
            <h2 className="text-sm md:text-2xl mb-3 md:mb-4 font-bold not-italic uppercase tracking-widest">Identification</h2>
            <p>A valid government-issued ID (Aadhar, Passport, or Driving License) is mandatory for all guests at the time of check-in.</p>
          </section>
        </div>
      </div>
    </main>
  );
}