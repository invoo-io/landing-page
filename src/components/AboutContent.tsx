import React from "react";

export default function AboutContent() {
  const headingStyles = {
    color: '#EFEFF5',
    fontWeight: 600,
    fontSize: '28px',
    lineHeight: '34px',
    letterSpacing: '0.38px'
  };

  const paragraphStyles = {
    color: 'rgba(239, 239, 245, 0.8)',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '36px',
    letterSpacing: '-0.43px'
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-4xl w-full flex flex-col gap-10" style={{ textAlign: 'left' }}>
        {/* Built from real experience section */}
        <div className="mb-16">
          <h2 style={headingStyles} className="mb-6">
            Built from real experience
          </h2>
          <p style={paragraphStyles}>
            After moving to Spain, we quickly discovered how complex the can be for freelancers or from endless invoices and expenses to 
            confusing taxes. Talking with autonomos revealed the same frustrations: at the same time, gestorias shared how overwhelming it 
            was to chase client paperwork daily and manually enter data into their systems. This gap between both freelancers and gestorias, 
            saving time, money and stress.
          </p>
        </div>

        {/* Our vision section */}
        <div className="mb-16">
          <h3 style={headingStyles} className="mb-6">
            Our vision
          </h3>
          <p style={paragraphStyles}>
            Invoo Invoicing should be simple, compliant, and collaborative. Our mission is to build a platform that eliminates the pain points for 
            freelancers. Now, autonomos and professional invoices. We'll add expense management, AI agents, whether you work from Barcelona or Berlin.
          </p>
        </div>

        {/* Why Invoo section */}
        <div className="mb-16">
          <h3 style={headingStyles} className="mb-8">
            Why Invoo
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">🚀</span>
              <p style={paragraphStyles}>
                Custom tools built for Spanish freelancers
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">📄</span>
              <p style={paragraphStyles}>
                Automatic verifactu compliance with every invoice
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">💛</span>
              <p style={paragraphStyles}>
                Spanish language and cutting red tape
              </p>
            </div>
          </div>
        </div>

        {/* We're just getting started section */}
        <div className="pt-8">
          <h3 style={headingStyles} className="mb-6">
            We're just getting started
          </h3>
          <p style={paragraphStyles}>
            Join us early and shape the platform that will transform how Spanish freelancers and gestorias work together. 
            Be part of the change from day one.
          </p>
        </div>
      </div>
    </section>
  );
}