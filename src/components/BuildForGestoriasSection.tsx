import Image from "next/image";
import BuildForGestoriasButton from "./BuildForGestoriasButton";
import { Check } from "lucide-react";

export default function BuildForGestoriasSection() {
  const features = [
    "Real-time multi-client data",
    "Bulk CSV export",
    "Quarterly tax summaries"
  ];

  return (
    <section style={{ 
      position: 'relative',
      height: '634px',
      backgroundColor: 'black',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '80px',
        maxWidth: '1200px',
        width: '100%',
        padding: '0 24px'
      }}>
        {/* Left Column - Text Content */}
        <div style={{
          flex: '0 0 450px',
          paddingLeft: '40px'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 600,
            color: 'white',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Built for gestorías
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: '#9F9F9FB2',
            lineHeight: '1.6',
            marginBottom: '32px'
          }}>
            Invoo is not just for freelancers. Gestorías get real-time access to client invoices and expenses, without chasing or retrying. Free, secure, and always VeriFActu compliant.
          </p>

          {/* Features List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Check size={20} style={{ color: '#22C55E' }} />
                <span style={{
                  fontSize: '16px',
                  color: 'white'
                }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <BuildForGestoriasButton />
        </div>

        {/* Right Column - Dashboard Image */}
        <div style={{
          position: 'absolute',
          right: '-20%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '800px',
          height: '500px'
        }}>
          <Image
            src="/productdashboard.png"
            alt="Gestorías Dashboard"
            width={800}
            height={500}
            style={{ 
              objectFit: 'contain',
              width: '100%',
              height: '100%'
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
}