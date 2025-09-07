import PricingButton from "./PricingButton";

export default function PricingSection() {
  return (
    <section style={{ 
      padding: '96px 24px',
      backgroundColor: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Title */}
      <h2 style={{
        fontWeight: 600,
        fontSize: '48px',
        lineHeight: '56px',
        letterSpacing: '0.4px',
        textAlign: 'center',
        color: 'white',
        marginBottom: '64px'
      }}>
        Fair and simple pricing
      </h2>

      {/* Pricing Cards Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '700px',
        width: '100%'
      }}>
        {/* Freelancers Card - with gradient border */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(91.5deg, #257DFE 0.81%, #925AFF 98.89%)',
          borderRadius: '12px',
          padding: '1px'
        }}>
          <div style={{
            background: '#161616',
            borderRadius: '12px',
            padding: '32px 48px',
            textAlign: 'center'
          }}>
          
          <h3 style={{
            fontSize: '20px',
            fontWeight: 600,
            color: 'white',
            marginBottom: '12px'
          }}>
            Freelancers
          </h3>
          
          <p style={{
            fontSize: '32px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '16px'
          }}>
            €9.90 / month
          </p>
          
          <p style={{
            fontSize: '14px',
            color: '#9F9F9FB2',
            lineHeight: '1.5'
          }}>
            Everything you need: invoicing, expenses, VeriFActu compliance, tax summaries.
          </p>
          </div>
        </div>

        {/* Gestorías Card - simple background */}
        <div style={{
          backgroundColor: '#161616',
          borderRadius: '16px',
          padding: '32px 48px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 600,
            color: 'white',
            marginBottom: '12px'
          }}>
            Gestorías
          </h3>
          
          <p style={{
            fontSize: '32px',
            fontWeight: 700,
            background: 'linear-gradient(91.5deg, #257DFE 0.81%, #925AFF 98.89%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px'
          }}>
            Free
          </p>
          
          <p style={{
            fontSize: '14px',
            color: '#9F9F9FB2',
            lineHeight: '1.5'
          }}>
            Dashboard with real-time client data, CSV exports, and quarterly summaries.
          </p>
        </div>
      </div>

      {/* Button */}
      <PricingButton />
    </section>
  );
}