export default function RefundPolicy() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto font-serif text-[#0A2F1F]">
        <h1 className="text-4xl md:text-6xl mb-8">Refund & Cancellation</h1>
        <div className="w-20 h-[2px] bg-[#C5A059] mb-12"></div>
        
        <div className="space-y-8 opacity-90 leading-relaxed text-lg italic">
          <section>
            <h2 className="text-2xl mb-4 font-bold not-italic">Cancellation Policy</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cancellations made 15 days or more before check-in: 100% refund.</li>
              <li>Cancellations made 7-14 days before check-in: 50% refund.</li>
              <li>Cancellations made less than 7 days before check-in: No refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-bold not-italic">Processing Refunds</h2>
            <p>Approved refunds will be processed within 7-10 working days to the original payment method used during the booking.</p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 font-bold not-italic">No-Show Policy</h2>
            <p>In case of a no-show, the entire booking amount will be forfeited, and no refund or rescheduling will be provided.</p>
          </section>
        </div>
      </div>
    </main>
  );
}