import Image from "next/image";
import MoreThanInvoiceButton from "./MoreThanInvoiceButton";
import { getImagePath } from "@/lib/utils";

export default function MoreThanInvoiceSection() {
  const features = [
    {
      title: "Track your expenses",
      description: "Snap a photo of your receipts and let Invoo organize them automatically"
    },
    {
      title: "Quarterly tax ready",
      description: "We prepare pre-calculated summaries for Modelo 130 and 303, so you file faster"
    },
    {
      title: "Gestoría dashboard",
      description: "Give your gestoría real-time access to your invoices and expenses, no more email chains"
    },
    {
      title: "One-click exports",
      description: "Download invoices and expenses in clean CSV format, ready for any accounting software"
    }
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
      {/* Background Image - aligned to left and vertically centered */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '634.034423828125px',
        height: '867px'
      }}>
        <Image
          src={getImagePath("/morethaninvoicebgimg.png")}
          alt="Background"
          width={634}
          height={867}
          style={{ 
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
          priority
        />
      </div>

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: '0 24px',
        maxWidth: '1000px'
      }}>
        {/* 2x2 Grid of Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          marginBottom: '0'
        }}>
          {features.map((feature, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: '#161616',
                borderRadius: '12px',
                padding: '32px',
                minHeight: '150px',
                textAlign: 'center'
              }}
            >
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: 'white',
                marginBottom: '12px'
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#9F9F9FB2',
                lineHeight: '1.5'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <MoreThanInvoiceButton />
      </div>
    </section>
  );
}