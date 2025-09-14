"use client";

import React from "react";
import Button from "./ui/Button";
import { DrawerComponent } from "./DrawerComponent";

interface HeroSectionProps {
  title: React.ReactNode;
  paragraph: string;
  buttonText?: string;
  buttonHref?: string;
  buttonOnClick?: () => void;
}

export default function HeroSection({ 
  title, 
  paragraph, 
  buttonText, 
  buttonHref,
  buttonOnClick 
}: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="hero-heading" style={{ marginBottom: '3rem' }}>
          {title}
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
          {paragraph}
        </p>
        
        {buttonText && (buttonHref || buttonOnClick) && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {buttonText === "Join the waiting list" ? (
              <DrawerComponent
                triggerText="Join the waiting list"
                title=""
                description=""
              />
            ) : (
              <Button
                href={buttonHref}
                onClick={buttonOnClick}
                variant="gradient"
                showArrow={true}
              >
                {buttonText}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}