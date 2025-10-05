import Image from "next/image";
import FocusButton from "./FocusButton";
import { getImagePath } from "@/lib/utils";

export default function FocusSection() {
  return (
    <section style={{ 
      position: 'relative',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '96px 24px',
      overflow: 'hidden'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0
      }}>
        <Image
          src={getImagePath("/focussectionbgimg.jpg")}
          alt="Background"
          fill
          style={{ 
            objectFit: 'cover'
          }}
          priority
        />
        {/* Black overlay with opacity */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'var(--system-overlay)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-large-title-emphasized text-label-inverted mb-6" style={{ fontSize: '48px' }}>
          Focus on your work. We&apos;ll handle the paperwork.
        </h2>

        <p className="text-callout mb-12" style={{ color: 'var(--label-secondary-dark)' }}>
          Join other freelancers who are getting ready for VeriFActu with a tool designed for Spain&apos;s autónomos
        </p>

        <div className="flex justify-center">
          <FocusButton />
        </div>
      </div>
    </section>
  );
}