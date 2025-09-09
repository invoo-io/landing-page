"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";
import GradientText from "./ui/GradientText";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"freelancer" | "gestoria">("freelancer");
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section style={{
      minHeight: '100vh',
      padding: '80px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '64px',
        maxWidth: '800px'
      }}>
        <h1 style={{
          fontSize: '64px',
          fontWeight: 600,
          marginBottom: '24px',
          lineHeight: '1.1'
        }}>
          <GradientText>Simple pricing</GradientText>
          <span style={{ color: 'white' }}>. No surprises</span>
        </h1>
        <p style={{
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.6)',
          lineHeight: '1.5'
        }}>
          Choose the plan that fits your needs. Switch anytime. Cancel anytime
        </p>
      </div>

      {/* Tab Switcher */}
      <div style={{
        display: 'flex',
        gap: '40px',
        marginBottom: '64px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative'
      }}>
        <button
          onClick={() => setActiveTab("freelancer")}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === "freelancer" ? 'white' : 'rgba(255, 255, 255, 0.5)',
            fontSize: '16px',
            fontWeight: 500,
            padding: '12px 4px',
            cursor: 'pointer',
            position: 'relative',
            transition: 'color 0.3s ease'
          }}
        >
          Freelancer
          {activeTab === "freelancer" && (
            <div style={{
              position: 'absolute',
              bottom: '-1px',
              left: 0,
              right: 0,
              height: '2px',
              background: '#257DFF',
              borderRadius: '2px'
            }} />
          )}
        </button>
        <button
          onClick={() => setActiveTab("gestoria")}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === "gestoria" ? 'white' : 'rgba(255, 255, 255, 0.5)',
            fontSize: '16px',
            fontWeight: 500,
            padding: '12px 4px',
            cursor: 'pointer',
            position: 'relative',
            transition: 'color 0.3s ease'
          }}
        >
          Gestoria
          {activeTab === "gestoria" && (
            <div style={{
              position: 'absolute',
              bottom: '-1px',
              left: 0,
              right: 0,
              height: '2px',
              background: '#257DFF',
              borderRadius: '2px'
            }} />
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
              price={isAnnual ? "€8.25" : "€10"}
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
                      backgroundColor: isAnnual ? '#22C55E' : 'rgba(255, 255, 255, 0.2)',
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
                        backgroundColor: 'white',
                        transition: '0.4s',
                        borderRadius: '50%'
                      }} />
                    </span>
                  </label>
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
                    Annual {isAnnual && <span style={{ color: '#22C55E' }}>Save 2 months!</span>}
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