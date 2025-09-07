import Image from "next/image";

export default function HeroImageSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image as absolute element */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/heroimagesection.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Container with semi-transparent background */}
      <div 
        className="relative max-w-4xl mx-auto z-10"
        style={{
          backgroundColor: 'rgba(18, 18, 18, 0.96)',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Dashboard Image */}
        <div className="relative w-full">
          <Image
            src="/productdashboard.png"
            alt="Invoo Dashboard"
            width={1200}
            height={700}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}