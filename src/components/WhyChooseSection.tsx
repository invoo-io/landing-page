"use client";

import Image from "next/image";
import Button from "./ui/Button";
import { getImagePath } from "@/lib/utils";

export default function WhyChooseSection() {
  const features = [
    {
      image: getImagePath("/clock.png"),
      title: "Save time",
      description: "Create and send invoices in 30 seconds: no Excel, no Word."
    },
    {
      image: getImagePath("/paper.png"),
      title: "Always compliant",
      description: "Automatic VeriFActu compliance, QR included, no stress with AEAT."
    },
    {
      image: getImagePath("/personbook.png"),
      title: "Gestoría-friendly",
      description: "Share invoices and expenses directly with your gestoría. No more retyping."
    }
  ];

  return (
    <section className="py-[156px] max-md:py-10 px-6 bg-bg-inverted">
      {/* Title */}
      <h2 className="text-large-title-emphasized text-center text-label-inverted max-w-4xl mx-auto mb-16" style={{ fontSize: '48px' }}>
        Why freelancers and gestoría should choose Invoo
      </h2>

      {/* Features Grid */}
      <div className="grid gap-16 max-w-5xl mx-auto mb-16" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-bg-secondary rounded-3xl p-8">
            {/* Image */}
            <div className="mb-6">
              <Image
                src={feature.image}
                alt={feature.title}
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Title */}
            <h3 className="text-title2-emphasized text-label-primary mb-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-body text-label-secondary max-w-xs">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
        {/* Gestoría button with gradient border */}
        <div style={{
          background: 'linear-gradient(94.28deg, var(--accent-blue-main) 3.12%, var(--accent-purple-main) 95.84%)',
          borderRadius: '12px',
          padding: '2px',
          display: 'inline-flex'
        }}>
          <Button variant="outline" showArrow className="!bg-bg-inverted !border-0 !text-label-inverted" href="/gestorias">
            Gestoría
          </Button>
        </div>

        {/* Freelancer button with solid gradient background */}
        <Button variant="gradient" showArrow href="/freelancers">
          Freelancer
        </Button>
      </div>
    </section>
  );
}