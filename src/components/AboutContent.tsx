import React from "react";

export default function AboutContent() {
  const headingStyles = {
    color: '#EFEFF5',
    fontWeight: 600,
    fontSize: '28px',
    lineHeight: '34px',
    letterSpacing: '0.38px',
    marginBottom: '24px'
  };

  const paragraphStyles = {
    color: 'rgba(239, 239, 245, 0.8)',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '36px',
    letterSpacing: '-0.43px'
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6" 
      style={{ marginBottom: '150px' }}>
      <div className="max-w-4xl w-full flex flex-col gap-10" style={{ textAlign: 'left' }}>
        {/* Built from real experience section */}
        <div className="" style={{ marginBottom: '30px' }}>
          <h2 style={headingStyles} className="">
            Born from real experience
          </h2>
          <p style={paragraphStyles}>
            When moving to Spain, we quickly discovered how complex life can be for freelancers — from endless invoices and expenses to navigating taxes. Talking with autónomos revealed the same frustrations. At the same time, gestorías shared how outdated tools slow them down. Then came VeriFactu: a regulatory shift and the perfect moment to build something better. That&apos;s how Invoo was born — a platform designed to empower both freelancers and gestorías, saving time, money, and stress.
          </p>
        </div>

        {/* Our vision section */}
        <div className="" style={{ marginBottom: '30px' }}>
          <h3 style={headingStyles} className="mb-6">
            Our vision
          </h3>
          <p style={paragraphStyles}>
            We believe invoicing should be simple, compliant, and collaborative. Our mission is to connect freelancers, clients, and gestorías in one seamless flow — where professional invoices, VeriFactu compliance, and gestoría dashboards work together without friction.
          </p>
        </div>

        {/* Why Invoo section */}
        <div className="" style={{ marginBottom: '30px' }}>
          <h3 style={headingStyles} className="mb-8">
            Why Invoo
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">🚀</span>
              <p style={paragraphStyles}>
                Modern tools built for Spain&apos;s freelancers
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">🧾</span>
              <p style={paragraphStyles}>
                Automatic Verifactu compliance with every invoice
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">🤝</span>
              <p style={paragraphStyles}>
                Gestoría-friendly design — no retyping, no chasing, no stress
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">💡</span>
              <p style={paragraphStyles}>
                Focused on saving time, not adding complexity
              </p>
            </div>
          </div>
        </div>

        {/* We're just getting started section */}
        <div className="pt-8">
          <h3 style={headingStyles} className="mb-6">
            We&apos;re just getting started
          </h3>
          <p style={paragraphStyles}>
          Invoo is preparing for launch soon. We’re working closely with early freelancers and gestorías to refine the platform before opening it to everyone. The company will be formally incorporated ahead of launch, with operations set up to serve freelancers across Spain
          </p>
        </div>
      </div>
    </section>
  );
}