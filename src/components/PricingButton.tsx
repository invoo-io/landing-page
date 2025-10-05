"use client";

import { ArrowRight } from "lucide-react";

export default function PricingButton() {
  return (
    <button
      style={{
        fontFamily: 'var(--font-inter)',
        padding: '0 24px',
        height: '47px',
        maxHeight: '47px',
        borderRadius: '12px',
        background: 'linear-gradient(94.28deg, #257DFF 3.12%, #925AFF 95.84%)',
        border: 'none',
        color: 'white',
        fontWeight: 600,
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        margin: '48px auto 0'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      Pricing
      <ArrowRight size={18} />
    </button>
  );
}