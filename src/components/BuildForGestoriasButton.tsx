"use client";

import { ArrowRight } from "lucide-react";
import { DrawerComponent } from "./DrawerComponent";

interface BuildForGestoriasButtonProps {
  text: string;
  onClick?: () => void;
}

export default function BuildForGestoriasButton({ text, onClick }: BuildForGestoriasButtonProps) {
  // If it's a "Learn More" or "Join the waiting list" button, use the drawer
  if (text === "Learn More" || text === "Join the waiting list") {
    return (
      <div style={{ marginTop: '32px' }}>
        <DrawerComponent
          triggerText={text}
          title=""
          description=""
        />
      </div>
    );
  }

  // Otherwise, use regular button
  return (
    <button
      onClick={onClick}
      style={{
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
        marginTop: '32px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {text}
      <ArrowRight size={18} />
    </button>
  );
}