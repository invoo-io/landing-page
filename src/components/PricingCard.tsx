"use client";

import { Check } from "lucide-react";
import Button from "./ui/Button";

interface PricingCardProps {
  title: string;
  description?: string;
  price: string;
  period?: string;
  badge?: string;
  badgeColor?: string;
  buttonText: string;
  buttonVariant?: "primary" | "gradient" | "outline";
  buttonHref?: string;
  buttonOnClick?: () => void;
  features: string[];
  isHighlighted?: boolean;
  subtitle?: string | React.ReactNode;
}

export default function PricingCard({
  title,
  description,
  price,
  period,
  badge,
  badgeColor = "#22C55E",
  buttonText,
  buttonVariant = "gradient",
  buttonHref,
  buttonOnClick,
  features,
  isHighlighted = false,
  subtitle,
}: PricingCardProps) {
  return (
    <div
      className="relative h-full flex flex-col rounded-3xl p-8"
      style={{
        background: isHighlighted ? 'rgba(37, 125, 255, 0.05)' : 'transparent',
        border: isHighlighted ? '2px solid #257DFF' : '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="flex-1">
        <h3 className="text-title1-emphasized text-white mb-3">
          {title}
        </h3>

        {description && (
          <p className="text-footnote text-white/60 mb-6">
            {description}
          </p>
        )}

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-large-title-emphasized text-white" style={{ fontSize: '48px', fontWeight: 700 }}>
              {price}
            </span>
            {period && (
              <span className="text-callout text-white/60">
                {period}
              </span>
            )}
            {badge && (
              <span className="text-footnote-emphasized ml-2" style={{ color: badgeColor }}>
                {badge}
              </span>
            )}
          </div>

          {subtitle && (
            <div className="text-footnote text-white/50 mt-2">
              {subtitle}
            </div>
          )}
        </div>

        <div className="mb-8">
          <Button
            href={buttonHref}
            onClick={buttonOnClick}
            variant={buttonVariant}
            className="w-full justify-center"
          >
            {buttonText}
          </Button>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-footnote text-white/90">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}