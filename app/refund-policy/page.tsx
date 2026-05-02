export default function RefundPolicy() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto font-serif text-[#0A2F1F]">
        <header className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-5xl font-normal mb-3 md:mb-4">Refund & Cancellation</h1>
          <div className="w-12 md:w-16 h-[1.5px] bg-[#C5A059]"></div>
        </header>
        
        <div className="space-y-8 md:space-y-10 opacity-90 leading-relaxed text-sm md:text-lg italic">
          <section>
            <h2 className="text-sm md:text-2xl mb-3 md:mb-4 font-bold not-italic uppercase tracking-widest">Cancellation Policy</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cancellations made 15 days or more before check-in: 100% refund.</li>
              <li>Cancellations made 7-14 days before check-in: 50% refund.</li>
              <li>Cancellations made less than 7 days before check-in: No refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm md:text-2xl mb-3 md:mb-4 font-bold not-italic uppercase tracking-widest">Processing Refunds</h2>
            <p>Approved refunds will be processed within 7-10 working days to the original payment method used during the booking.</p>
          </section>

          <section>
            <h2 className="text-sm md:text-2xl mb-3 md:mb-4 font-bold not-italic uppercase tracking-widest">No-Show Policy</h2>
            <p>In case of a no-show, the entire booking amount will be forfeited, and no refund or rescheduling will be provided.</p>
          </section>
        </div>
      </div>
    </main>
  );
}