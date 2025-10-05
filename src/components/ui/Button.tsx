import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  disabled?: boolean;
  className?: string;
}

/**
 * Button Design System
 * 
 * Our buttons follow these design patterns:
 * 
 * PRIMARY: Traditional solid blue button
 * - Background: bg-blue-500 with hover:bg-blue-600
 * - Text: White with font-semibold
 * - Shape: Fully rounded (rounded-full)
 * - Border: Matching blue border for definition
 * - Shadow: Subtle blue shadow on hover
 * 
 * GRADIENT: Modern gradient button (main CTA style)
 * - Background: Linear gradient from blue to purple
 * - Text: White with font-semibold
 * - Shape: Rounded corners (12px)
 * - Fixed dimensions: 193px × 47px
 * - Used for main call-to-action buttons
 * 
 * This ensures consistency across the entire application
 * and matches our brand design language.
 */

const buttonVariants = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white border border-blue-500 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25",
  secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30",
  outline: "bg-transparent hover:bg-blue-50 text-blue-500 border border-blue-500 hover:border-blue-600 hover:text-blue-600",
  gradient: "text-white hover:shadow-lg" // Special handling for gradient in component
};

const buttonSizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-2.5 text-sm", 
  lg: "px-8 py-3 text-base",
  gradient: "" // Special handling for gradient size
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  disabled = false,
  className = ""
}: ButtonProps) {
  // Special handling for gradient variant
  if (variant === 'gradient') {
    const gradientStyle = {
      fontFamily: 'var(--font-inter)',
      background: 'linear-gradient(94.28deg, #257DFF 3.12%, #925AFF 95.84%)',
      width: '193px',
      height: '47px',
      borderRadius: '12px',
      padding: '12px 16px',
      gap: '8px'
    };

    const content = (
      <>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </>
    );

    const gradientClasses = `flex items-center justify-center text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${className}`.trim();

    if (href && !disabled) {
      return (
        <Link href={href} className={gradientClasses} style={gradientStyle}>
          {content}
        </Link>
      );
    }

    return (
      <button 
        onClick={onClick} 
        disabled={disabled}
        className={gradientClasses}
        style={gradientStyle}
      >
        {content}
      </button>
    );
  }

  // Standard button variants
  const baseClasses = "flex items-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];
  
  const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={allClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={allClasses}
    >
      {content}
    </button>
  );
}

// Export utility classes for manual use when needed
export const primaryButtonClasses = "flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-500 hover:border-blue-600";