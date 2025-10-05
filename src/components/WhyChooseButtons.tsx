"use client";

import { ArrowRight } from "lucide-react";

export default function WhyChooseButtons() {
  return (
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
        padding: '1px',
        display: 'inline-flex'
      }}>
        <button
          style={{
            fontFamily: 'var(--font-inter)',
            padding: '0 24px',
            height: '45px',
            maxHeight: '47px',
            borderRadius: '11px',
            backgroundColor: 'var(--background-inverted)',
            color: 'var(--label-inverted)',
            fontWeight: 600,
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            border: 'none',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--background-inverted) 85%, transparent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--background-inverted)';
          }}
        >
          Gestoría
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Freelancer button with solid gradient background */}
      <button
        style={{
          fontFamily: 'var(--font-inter)',
          padding: '0 24px',
          height: '47px',
          maxHeight: '47px',
          borderRadius: '12px',
          background: 'linear-gradient(94.28deg, var(--accent-blue-main) 3.12%, var(--accent-purple-main) 95.84%)',
          border: 'none',
          color: 'var(--label-inverted)',
          fontWeight: 600,
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Freelancer
        <ArrowRight size={18} />
      </button>
    </div>
  );
}