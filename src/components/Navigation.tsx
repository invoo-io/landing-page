"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Button from "./ui/Button";

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Freelancers", href: `/${locale}/freelancers` },
    { name: "Gestorías", href: `/${locale}/gestorias` }
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
                <div 
                  className="absolute top-full left-0 mt-2 min-w-[200px]"
                  style={{
                    backgroundColor: 'rgba(20, 20, 20, 0.98)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.5)',
                    padding: '8px 0',
                    animation: 'slideDown 0.2s ease-out'
                  }}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="relative block"
                      style={{
                        padding: '12px 24px',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: 'rgba(255, 255, 255, 0.9)',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                      }}
                    >
                      {service.name}
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
                <div 
                  className="absolute top-full left-0 mt-2 min-w-[200px]"
                  style={{
                    backgroundColor: 'rgba(20, 20, 20, 0.98)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.5)',
                    padding: '8px 0',
                    animation: 'slideDown 0.2s ease-out'
                  }}
                >
                  {resources.map((resource) => (
                    <Link
                      key={resource}
                      href="#"
                      className="relative block"
                      style={{
                        padding: '12px 24px',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: 'rgba(255, 255, 255, 0.9)',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                      }}
                    >
                      {resource}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href={`/${locale}/pricing`}
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
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white/70 hover:text-white p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/5">
            <div className="px-4 py-6 space-y-4">
              {/* Services dropdown for mobile */}
              <div>
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                  className="flex items-center justify-between w-full text-white/70 hover:text-white transition-colors text-sm font-medium py-2"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "services" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources dropdown for mobile */}
              <div>
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                  className="flex items-center justify-between w-full text-white/70 hover:text-white transition-colors text-sm font-medium py-2"
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "resources" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {resources.map((resource) => (
                      <Link
                        key={resource}
                        href="#"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {resource}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct links for mobile */}
              <Link
                href={`/${locale}/pricing`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                Pricing
              </Link>

              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                About Us
              </Link>

              {/* Language selector for mobile */}
              <button className="flex items-center gap-2 py-2 text-white/70 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
                <span className="text-sm">Language</span>
              </button>

              {/* CTA Button for mobile */}
              <div className="pt-4">
                <Button 
                  href="#waitlist" 
                  variant="gradient"
                  showArrow={true}
                  className="w-full"
                >
                  Join the waiting list
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
