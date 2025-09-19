import Image from "next/image";
import BuildForGestoriasButton from "./BuildForGestoriasButton";
import { Check } from "lucide-react";

interface BuildForGestoriasSectionProps {
  title: string;
  paragraph: string;
  features: string[];
  buttonText: string;
  buttonOnClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  showImagePlaceholder?: boolean;
}

export default function BuildForGestoriasSection({
  title,
  paragraph,
  features,
  buttonText,
  buttonOnClick,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  showImagePlaceholder = false
}: BuildForGestoriasSectionProps) {
  const textContent = (
    <div style={{
      width: '500px',
      maxWidth: '100%',
     
    }}>
      <h2 style={{
        fontSize: '48px',
        fontWeight: 600,
        color: 'white',
        marginBottom: '24px',
        lineHeight: '1.2'
      }}>
        {title}
      </h2>
      
      <p style={{
        fontSize: '16px',
        color: '#9F9F9FB2',
        lineHeight: '1.6',
        marginBottom: '32px'
      }}>
        {paragraph}
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

      <BuildForGestoriasButton text={buttonText} onClick={buttonOnClick} />
    </div>
  );

  const imageContent = imageSrc ? (
    <div style={{
      width: 'auto',
      // maxWidth: '100%',
      height: 'auto',
      marginRight: imagePosition === 'right' ? '-300px' : '300px',
    }}>
      <Image
        src={imageSrc}
        alt={imageAlt || ''}
        width={800}
        height={700}
        style={{
          objectFit: 'contain',
          
        }}
        priority
      />
    </div>
  ) : showImagePlaceholder ? (
    <div style={{
      width: '400px',
      maxWidth: '100%',
      height: '350px',
      borderRadius: '24px',
      backgroundColor: 'transparent'
    }} />
  ) : null;

  return (
    <section style={{ 
      position: 'relative',
      // height: '634px',
      backgroundColor: 'black',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 0'
    }}>
      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        // maxWidth: '1200px',
        width: '100%',
        padding: '0 24px',
        flexDirection: imagePosition === 'left' ? 'row-reverse' : 'row',
        flexWrap: 'wrap'
      }}>
        {textContent}
        {imageContent}
      </div>
    </section>
  );
}