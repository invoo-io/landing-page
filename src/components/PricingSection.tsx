"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";
import GradientText from "./ui/GradientText";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"freelancer" | "gestoria">("freelancer");
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-[156px] max-md:py-10 px-6" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl">
        <h1 className="text-large-title-emphasized mb-6" style={{ fontSize: '64px' }}>
          <GradientText>Simple pricing</GradientText>
          <span className="text-label-inverted">. No surprises</span>
        </h1>
        <p className="text-headline text-label-inverted-secondary">
          Choose the plan that fits your needs. Switch anytime. Cancel anytime
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-10 mb-16 border-b border-strokes-primary relative">
        <button
          onClick={() => setActiveTab("freelancer")}
          className="text-callout-emphasized px-1 py-3 cursor-pointer relative transition-colors"
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === "freelancer" ? 'var(--label-inverted)' : 'var(--label-secondary-dark)'
          }}
        >
          Freelancer
          {activeTab === "freelancer" && (
            <div className="absolute -bottom-px left-0 right-0 h-0.5 rounded-sm" style={{ background: 'var(--accent-blue-main)' }} />
          )}
        </button>
        <button
          onClick={() => setActiveTab("gestoria")}
          className="text-callout-emphasized px-1 py-3 cursor-pointer relative transition-colors"
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === "gestoria" ? 'var(--label-inverted)' : 'var(--label-secondary-dark)'
          }}
        >
          Gestoria
          {activeTab === "gestoria" && (
            <div className="absolute -bottom-px left-0 right-0 h-0.5 rounded-sm" style={{ background: 'var(--accent-blue-main)' }} />
          )}
        </button>
      </div>

      {/* Pricing Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '32px',
        maxWidth: '900px',
        width: '100%'
      }}>
        {activeTab === "freelancer" ? (
          <>
            {/* Free Plan */}
            <PricingCard
              title="Free"
              description="For freelancers testing VeriFActu without commitments"
              price="€0"
              period="per month"
              subtitle="Free Forever"
              buttonText="Get started free →"
              buttonVariant="gradient"
              buttonHref="#waitlist"
              features={[
                "Unlimited invoices",
                "10 Mb Expense uploads"
              ]}
            />

            {/* Pro Plan */}
            <PricingCard
              title="Pro"
              description="All the tools to invoice and stay compliant, unlimited and connected with your gestoría"
              price={isAnnual ? "€9.92" : "€11.90"}
              period="per month"
              badge={isAnnual ? "Save 2 months!" : "7 days - Free to try"}
              badgeColor="#22C55E"
              subtitle={
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <label style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '44px',
                    height: '24px'
                  }}>
                    <input
                      type="checkbox"
                      checked={isAnnual}
                      onChange={(e) => setIsAnnual(e.target.checked)}
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: isAnnual ? 'var(--accent-green-main)' : 'var(--fills-tertiary)',
                      transition: '0.4s',
                      borderRadius: '24px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        content: '',
                        height: '18px',
                        width: '18px',
                        left: isAnnual ? '23px' : '3px',
                        bottom: '3px',
                        backgroundColor: 'var(--label-inverted)',
                        transition: '0.4s',
                        borderRadius: '50%'
                      }} />
                    </span>
                  </label>
                  <span className="text-footnote text-label-inverted-secondary">
                    Annual {isAnnual && <span className="text-accent-green-main">Save 2 months!</span>}
                  </span>
                </div>
              }
              buttonText="Get started →"
              buttonVariant="gradient"
              buttonHref="#waitlist"
              features={[
                "Unlimited invoices",
                "Expense tracking (receipts)",
                "VeriFactu QR + AEAT submission",
                "Pre-calculated Modelo 130 & 303",
                "One-click CSV export",
                "Gestoría dashboard access"
              ]}
              isHighlighted={true}
            />
          </>
        ) : (
          <>
            {/* Gestoria Free Plan */}
            <PricingCard
              title="Free"
              description="Give your clients modern invoicing, get real-time access, free forever"
              price="€0"
              period="per month"
              subtitle="Free Forever"
              buttonText="Contact Us →"
              buttonVariant="gradient"
              buttonHref="#contact"
              features={[
                "Unlimited clients",
                "Invoice/expense sync",
                "CSV export",
                "Quarterly summaries",
                "Notifications for new data"
              ]}
            />

            {/* Enterprise Plan */}
            <PricingCard
              title="Enterprise"
              description="Let's build together. Co-develop workflows, and advanced dashboards tailored to your Gestoría"
              price="Flexible Billing"
              subtitle="Custom Plans"
              buttonText="Contact Us →"
              buttonVariant="gradient"
              buttonHref="#contact"
              features={[
                "All in free included",
                "Custom features & integrations",
                "Entire Workflow Coverage",
                "Priority support",
                "API/ERP integrations"
              ]}
              isHighlighted={true}
            />
          </>
        )}
      </div>
    </section>
  );
}