import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  showArrow?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Button Design System
 *
 * Centralized button component with consistent styling:
 * - Font: Callout/Emphasized (16px, weight 500)
 * - Padding: 12px 16px (top-bottom, left-right)
 * - Border: 2px solid
 * - Border Radius: 12px
 * - Hover: Scale(1.05) effect on all variants
 *
 * Variants:
 * - PRIMARY: Solid button with system-grey100 text
 * - SECONDARY: Subtle background with label-primary text
 * - OUTLINE: Transparent background with label-primary text
 * - GRADIENT: Gradient background with white text
 */

const buttonVariants = {
  primary: "bg-accent-blue-main hover:bg-accent-blue-light border-accent-blue-main hover:border-accent-blue-light",
  secondary: "bg-fills-secondary hover:bg-fills-primary border-strokes-primary hover:border-strokes-secondary",
  outline: "bg-transparent hover:bg-fills-tertiary border-accent-blue-main hover:border-accent-blue-light",
  gradient: "" // Special handling for gradient
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  showArrow = false,
  disabled = false,
  className = "",
  type = 'button'
}: ButtonProps) {
  // Determine text color based on variant
  const textColorClass = variant === 'primary'
    ? 'text-system-grey100'
    : variant === 'gradient'
    ? 'text-label-inverted'
    : 'text-label-primary';

  // Special handling for gradient variant
  if (variant === 'gradient') {
    const gradientStyle = {
      fontFamily: 'var(--font-inter)',
      background: 'linear-gradient(94.28deg, var(--accent-blue-main) 3.12%, var(--accent-purple-main) 95.84%)',
      borderRadius: '12px',
      padding: '12px 16px',
      border: 'none'
    };

    const content = (
      <>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </>
    );

    const gradientClasses = `flex items-center justify-center gap-2 text-callout-emphasized ${textColorClass} transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${className}`.trim();

    if (href && !disabled) {
      return (
        <Link href={href} className={gradientClasses} style={gradientStyle}>
          {content}
        </Link>
      );
    }

    return (
      <button
        type={type}
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
  const baseClasses = "flex items-center justify-center gap-2 rounded-[12px] text-callout-emphasized border-2 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClasses = buttonVariants[variant];
  const paddingClasses = "px-4 py-3"; // 16px left-right, 12px top-bottom

  const allClasses = `${baseClasses} ${variantClasses} ${textColorClass} ${paddingClasses} ${className}`.trim();

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
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={allClasses}
    >
      {content}
    </button>
  );
}
