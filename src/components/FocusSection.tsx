import Image from "next/image";
import FocusButton from "./FocusButton";

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
          src="/focussectionbgimg.jpg"
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '800px'
      }}>
        <h2 style={{
          fontWeight: 600,
          fontSize: '48px',
          lineHeight: '56px',
          color: 'white',
          marginBottom: '24px'
        }}>
          Focus on your work. We&apos;ll handle the paperwork.
        </h2>
        
        <p style={{
          fontSize: '16px',
          color: '#9F9F9FB2',
          lineHeight: '1.6',
          marginBottom: '48px'
        }}>
          Join other freelancers who are getting ready for VeriFActu with a tool designed for Spain&apos;s autónomos
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FocusButton />
        </div>
      </div>
    </section>
  );
}