import React from "react";

export default function AboutContent() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 mb-40">
      <div className="max-w-4xl w-full flex flex-col gap-10 text-left">
        {/* Built from real experience section */}
        <div className="mb-8">
          <h2 className="text-title1-emphasized mb-6" style={{ color: '#EFEFF5' }}>
            Born from real experience
          </h2>
          <p className="text-title3" style={{ color: 'rgba(239, 239, 245, 0.8)', fontSize: '20px', lineHeight: '36px' }}>
            When moving to Spain, we quickly discovered how complex life can be for freelancers — from endless invoices and expenses to navigating taxes. Talking with autónomos revealed the same frustrations. At the same time, gestorías shared how outdated tools slow them down. Then came VeriFactu: a regulatory shift and the perfect moment to build something better. That&apos;s how Invoo was born — a platform designed to empower both freelancers and gestorías, saving time, money, and stress.
          </p>
        </div>

        {/* Our vision section */}
        <div className="mb-8">
          <h3 className="text-title1-emphasized mb-6" style={{ color: '#EFEFF5' }}>
            Our vision
          </h3>
          <p className="text-title3" style={{ color: 'rgba(239, 239, 245, 0.8)', fontSize: '20px', lineHeight: '36px' }}>
            We believe invoicing should be simple, compliant, and collaborative. Our mission is to connect freelancers, clients, and gestorías in one seamless flow — where professional invoices, VeriFactu compliance, and gestoría dashboards work together without friction.
          </p>
        </div>

        {/* Why Invoo section */}
        <div className="mb-8">
          <h3 className="text-title1-emphasized mb-8" style={{ color: '#EFEFF5' }}>
            Why Invoo
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">🚀</span>
              <p className="text-title3" style={{ color: 'rgba(239, 239, 245, 0.8)', fontSize: '20px', lineHeight: '36px' }}>
                Modern tools built for Spain&apos;s freelancers
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">🧾</span>
              <p className="text-title3" style={{ color: 'rgba(239, 239, 245, 0.8)', fontSize: '20px', lineHeight: '36px' }}>
                Automatic Verifactu compliance with every invoice
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">🤝</span>
              <p className="text-title3" style={{ color: 'rgba(239, 239, 245, 0.8)', fontSize: '20px', lineHeight: '36px' }}>
                Gestoría-friendly design — no retyping, no chasing, no stress
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">💡</span>
              <p className="text-title3" style={{ color: 'rgba(239, 239, 245, 0.8)', fontSize: '20px', lineHeight: '36px' }}>
                Focused on saving time, not adding complexity
              </p>
            </div>
          </div>
        </div>

        {/* We're just getting started section */}
        <div className="pt-8">
          <h3 className="text-title1-emphasized mb-6" style={{ color: '#EFEFF5' }}>
            We&apos;re just getting started
          </h3>
          <p className="text-title3" style={{ color: 'rgba(239, 239, 245, 0.8)', fontSize: '20px', lineHeight: '36px' }}>
          Invoo is preparing for launch soon. We&apos;re working closely with early freelancers and gestorías to refine the platform before opening it to everyone. The company will be formally incorporated ahead of launch, with operations set up to serve freelancers across Spain
          </p>
        </div>
      </div>
    </section>
  );
}