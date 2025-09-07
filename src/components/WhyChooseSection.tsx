import Image from "next/image";
import WhyChooseButtons from "./WhyChooseButtons";

export default function WhyChooseSection() {
  const features = [
    {
      image: "/clock.png",
      title: "Save time",
      description: "Create and send invoices in 30 seconds: no Excel, no Word."
    },
    {
      image: "/paper.png",
      title: "Always compliant",
      description: "Automatic VeriFActu compliance, QR included, no stress with AEAT."
    },
    {
      image: "/personbook.png",
      title: "Gestoría-friendly",
      description: "Share invoices and expenses directly with your gestoría. No more retyping."
    }
  ];

  return (
    <section style={{ 
      padding: '96px 24px', 
      backgroundColor: 'black' 
    }}>
      {/* Title */}
      <h2 style={{
        fontWeight: 600,
        fontSize: '48px',
        lineHeight: '56px',
        letterSpacing: '0.4px',
        textAlign: 'center',
        color: 'white',
        maxWidth: '900px',
        margin: '0 auto',
        marginBottom: '64px'
      }}>
        Why freelancers and gestoría should choose Invoo
      </h2>

      {/* Features Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '64px',
        maxWidth: '1000px',
        margin: '0 auto',
        marginBottom: '64px'
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            {/* Image */}
            <div style={{ marginBottom: '24px' }}>
              <Image
                src={feature.image}
                alt={feature.title}
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            {/* Title */}
            <h3 style={{ 
              fontSize: '22px', 
              fontWeight: 600,
              color: 'white',
              marginBottom: '12px'
            }}>
              {feature.title}
            </h3>
            
            {/* Description */}
            <p style={{ 
              fontSize: '17px',
              color: '#9F9F9FB2',
              lineHeight: '1.5',
              maxWidth: '280px'
            }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <WhyChooseButtons />
    </section>
  );
}