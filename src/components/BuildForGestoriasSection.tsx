"use client";

import Image from "next/image";
import Button from "./ui/Button";
import { DrawerComponent } from "./DrawerComponent";
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
  maxImageWidth?: number;
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
  offsetImage = true,
  maxImageWidth
}: BuildForGestoriasSectionProps) {
  const textContent = (
    <div className="max-w-full max-md:text-center" style={{ width: '500px' }}>
      <h2 className="text-large-title-emphasized text-label-primary mb-6" style={{ fontSize: '48px' }}>
        {title}
      </h2>

      <p className="text-callout text-label-secondary mb-8">
        {paragraph}
      </p>

      {/* Features List */}
      <div className="flex flex-col gap-4 mb-8 max-md:mx-auto max-md:w-fit">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check size={20} className="text-accent-green-main" />
            <span className="text-callout text-label-inverted">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="max-md:flex max-md:justify-center">
        {(buttonText === "Learn More" || buttonText === "Join the waiting list") ? (
          <DrawerComponent
            triggerText={buttonText}
          />
        ) : (
          <Button variant="gradient" showArrow onClick={buttonOnClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );

  const imageContent = imageSrc ? (
    <div style={{
      width: 'auto',
      maxWidth: maxImageWidth ? `${maxImageWidth}px` : undefined,
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
    <section className="py-[156px] max-md:py-10" style={{
      position: 'relative',
      // height: '634px',
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