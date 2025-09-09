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
  subtitle?: string;
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
      style={{
        background: isHighlighted ? 'rgba(37, 125, 255, 0.05)' : 'transparent',
        border: isHighlighted ? '2px solid #257DFF' : '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '40px 32px',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontSize: '32px',
          fontWeight: 600,
          color: 'white',
          marginBottom: '12px'
        }}>
          {title}
        </h3>
        
        {description && (
          <p style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.6)',
            marginBottom: '24px',
            lineHeight: '1.5'
          }}>
            {description}
          </p>
        )}

        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{
              fontSize: '48px',
              fontWeight: 700,
              color: 'white'
            }}>
              {price}
            </span>
            {period && (
              <span style={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                {period}
              </span>
            )}
            {badge && (
              <span style={{
                fontSize: '14px',
                color: badgeColor,
                fontWeight: 600,
                marginLeft: '8px'
              }}>
                {badge}
              </span>
            )}
          </div>
          
          {subtitle && (
            <p style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.5)',
              marginTop: '8px'
            }}>
              {subtitle}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '32px' }}>
          <Button
            href={buttonHref}
            onClick={buttonOnClick}
            variant={buttonVariant}
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '14px 24px'
            }}
          >
            {buttonText}
          </Button>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '24px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <Check size={20} style={{ 
                  color: '#22C55E',
                  flexShrink: 0,
                  marginTop: '2px'
                }} />
                <span style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.5'
                }}>
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