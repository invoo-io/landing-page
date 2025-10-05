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
  imageWidth?: number;
  imageHeight?: number;
  offsetImage?: boolean;
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
  showImagePlaceholder = false,
  imageWidth = 800,
  imageHeight = 700,
  offsetImage = true
}: BuildForGestoriasSectionProps) {
  const textContent = (
    <div className="max-w-full" style={{ width: '500px' }}>
      <h2 className="text-large-title-emphasized text-white mb-6" style={{ fontSize: '48px' }}>
        {title}
      </h2>

      <p className="text-callout mb-8" style={{ color: '#9F9F9FB2' }}>
        {paragraph}
      </p>

      {/* Features List */}
      <div className="flex flex-col gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check size={20} className="text-green-500" />
            <span className="text-callout text-white">
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
      marginRight: offsetImage ? (imagePosition === 'right' ? '-300px' : '300px') : '0',
    }}>
      <Image
        src={imageSrc}
        alt={imageAlt || ''}
        width={imageWidth}
        height={imageHeight}
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
      padding: '40px 0'
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