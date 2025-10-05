"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import PricingCard from "./PricingCard";
import GradientText from "./ui/GradientText";

export default function PricingSection() {
  const t = useTranslations("pricing");
  const [activeTab, setActiveTab] = useState<"freelancer" | "gestoria">("freelancer");
  const [isAnnual, setIsAnnual] = useState(false);

  // Split title at the period to apply gradient
  const titleParts = t("header.title").split(". ");

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
          <GradientText>{titleParts[0]}</GradientText>
          <span className="text-label-inverted">. {titleParts[1]}</span>
        </h1>
        <p className="text-headline text-label-inverted-secondary">
          {t("header.description")}
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
          {t("tabs.freelancer")}
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
          {t("tabs.gestoria")}
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
              title={t("freelancer.free.title")}
              description={t("freelancer.free.description")}
              price={t("freelancer.free.price")}
              period={t("freelancer.free.period")}
              subtitle={t("freelancer.free.badge")}
              buttonText={t("freelancer.free.cta")}
              buttonVariant="gradient"
              buttonHref="#waitlist"
              features={t.raw("freelancer.free.features")}
            />

            {/* Pro Plan */}
            <PricingCard
              title={t("freelancer.pro.title")}
              description={t("freelancer.pro.description")}
              price={isAnnual ? t("freelancer.pro.priceAnnual") : t("freelancer.pro.priceMonthly")}
              period={t("freelancer.pro.period")}
              badge={isAnnual ? t("freelancer.pro.badgeAnnual") : t("freelancer.pro.badgeMonthly")}
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
                    {t("freelancer.pro.toggle")} {isAnnual && <span className="text-accent-green-main">{t("freelancer.pro.toggleSave")}</span>}
                  </span>
                </div>
              }
              buttonText={t("freelancer.pro.cta")}
              buttonVariant="gradient"
              buttonHref="#waitlist"
              features={t.raw("freelancer.pro.features")}
              isHighlighted={true}
            />
          </>
        ) : (
          <>
            {/* Gestoria Free Plan */}
            <PricingCard
              title={t("gestoria.free.title")}
              description={t("gestoria.free.description")}
              price={t("gestoria.free.price")}
              period={t("gestoria.free.period")}
              subtitle={t("gestoria.free.badge")}
              buttonText={t("gestoria.free.cta")}
              buttonVariant="gradient"
              buttonHref="#contact"
              features={t.raw("gestoria.free.features")}
            />

            {/* Enterprise Plan */}
            <PricingCard
              title={t("gestoria.enterprise.title")}
              description={t("gestoria.enterprise.description")}
              price={t("gestoria.enterprise.price")}
              subtitle={t("gestoria.enterprise.badge")}
              buttonText={t("gestoria.enterprise.cta")}
              buttonVariant="gradient"
              buttonHref="#contact"
              features={t.raw("gestoria.enterprise.features")}
              isHighlighted={true}
            />
          </>
        )}
      </div>
    </section>
  );
}