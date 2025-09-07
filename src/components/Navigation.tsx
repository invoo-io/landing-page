"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Globe } from "lucide-react";
import Button from "./ui/Button";

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    "Web Development",
    "Mobile Apps",
    "Cloud Solutions",
    "AI Integration",
    "Consulting",
  ];

  const resources = [
    "Documentation",
    "API Reference",
    "Blog",
    "Case Studies",
    "Support",
  ];

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="w-full bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="w-full ">
        <div
          className="flex items-center justify-between h-20"
          style={{
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                alt="invoo"
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Center Navigation - with better spacing */}
          <div className="hidden lg:flex items-center gap-12">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-sm font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl py-2">
                  {services.map((service) => (
                    <Link
                      key={service}
                      href="#"
                      className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-sm font-medium">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "resources" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl py-2">
                  {resources.map((resource) => (
                    <Link
                      key={resource}
                      href="#"
                      className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {resource}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="#pricing"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Pricing
            </Link>

            <Link
              href="#about"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              About Us
            </Link>
          </div>

          {/* Right Side Actions - with better spacing */}
          <div className="flex items-center gap-8">
            {/* Language Selector */}
            <button className="flex items-center text-white/70 hover:text-white transition-colors p-2">
              <Globe className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Button 
              href="#waitlist" 
              variant="gradient"
              showArrow={true}
            >
              Join the waiting list
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-white/70 hover:text-white p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
