import InvoicingButton from "./InvoicingButton";

export default function InvoicingSection() {
  const steps = [
    {
      number: "1",
      title: "Create",
      description: "Enter amount and client, Invoo builds your professional, VeriFActu-ready invoice instantly."
    },
    {
      number: "2",
      title: "Deliver",
      description: "We send it automatically to AEAT (VeriFActu), your gestoría, and your client."
    },
    {
      number: "3",
      title: "Done",
      description: "All invoices stored and summarized. You just get paid, no extra paperwork."
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
        Invoicing made simple
      </h2>

      {/* Steps Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '64px',
        maxWidth: '1000px',
        margin: '0 auto',
        marginBottom: '64px'
      }}>
        {steps.map((step, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            {/* Circle with number */}
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: '2px solid #9762FF',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <span style={{
                fontSize: '36px',
                fontWeight: 600,
                color: 'white'
              }}>
                {step.number}
              </span>
            </div>
            
            {/* Title */}
            <h3 style={{ 
              fontSize: '22px', 
              fontWeight: 600,
              color: 'white',
              marginBottom: '12px'
            }}>
              {step.title}
            </h3>
            
            {/* Description */}
            <p style={{ 
              fontSize: '17px',
              color: '#9F9F9FB2',
              lineHeight: '1.5',
              maxWidth: '280px'
            }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <InvoicingButton />
    </section>
  );
}