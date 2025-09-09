import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
}

export default function GradientText({ children }: GradientTextProps) {
  const gradientStyle = {
    background: 'linear-gradient(90deg, #257DFF 0%, #EE7AC4 93.27%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  };

  return <span style={gradientStyle}>{children}</span>;
}