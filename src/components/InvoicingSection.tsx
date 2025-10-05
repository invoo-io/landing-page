import InvoicingButton from "./InvoicingButton";

export default function InvoicingSection() {
  const steps = [
    {
      number: "1",
      title: "Create",
      description: "Enter amount and client, Invoo builds your professional, VeriFActu-ready invoice instantly."
    },
    {
      number: "2",
      title: "Deliver",
      description: "We send it automatically to AEAT (VeriFActu), your gestoría, and your client."
    },
    {
      number: "3",
      title: "Done",
      description: "All invoices stored and summarized. You just get paid, no extra paperwork."
    }
  ];

  return (
    <section className="py-24 px-6 bg-bg-inverted">
      {/* Title */}
      <h2 className="text-large-title-emphasized text-center text-label-inverted max-w-4xl mx-auto mb-16" style={{ fontSize: '48px' }}>
        Invoicing made simple
      </h2>

      {/* Steps Grid */}
      <div className="grid gap-16 max-w-5xl mx-auto mb-16" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Circle with number */}
            <div className="w-25 h-25 rounded-full border-2 flex items-center justify-center mb-6" style={{ borderColor: 'var(--accent-purple-main)', width: '100px', height: '100px' }}>
              <span className="text-large-title-emphasized text-label-inverted" style={{ fontSize: '36px' }}>
                {step.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-title2-emphasized text-label-inverted mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-body text-label-tertiary max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <InvoicingButton />
    </section>
  );
}