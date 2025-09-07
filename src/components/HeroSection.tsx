import Button from "./ui/Button";

export default function HeroSection() {
  const gradientStyle = {
    background: 'linear-gradient(90deg, #257DFF 0%, #EE7AC4 93.27%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  };

  return (
    <section className="min-h-screen flex items-center justify-center" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="hero-heading" style={{ marginBottom: '3rem' }}>
          <span style={{color: '#EFEFF5'}}>Create and send</span>{" "}
          <span style={gradientStyle}>Compliant</span>
          <br />
          <span style={gradientStyle}>Invoices</span>{" "}
          <span style={{color: '#EFEFF5'}}>in 30 seconds.</span>
        </h1>
        
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          marginBottom: '3rem',
          maxWidth: '48rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: '#EFEFF5'
        }}>
          Invoo helps freelancers and gestorías work faster together: VeriFActu-ready, professional PDFs, instant sharing, and automatic tax summaries.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button 
            href="#waitlist" 
            variant="gradient"
            showArrow={true}
          >
            Join the waiting list
          </Button>
        </div>
      </div>
    </section>
  );
}