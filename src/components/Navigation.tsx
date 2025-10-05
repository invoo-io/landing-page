"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationDrawerButton from "./NavigationDrawerButton";
import { getImagePath, getBasePath } from "@/lib/utils";

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  const services = [
    { name: "Freelancers", href: getBasePath(`/${locale}/freelancers`) },
    { name: "Gestorías", href: getBasePath(`/${locale}/gestorias`) }
  ];

  const resources = [
    { name: "FAQ", href: getBasePath(`/${locale}/faq`) }
  ];

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="w-full bg-black/80 backdrop-blur-xl border-b border-white/5 relative" style={{ zIndex: 100 }}>
        <div className="w-full">
          <div
            className="flex items-center justify-between h-20"
            style={{
              paddingRight: "20px",
              paddingLeft: "20px",
            }}
          >
            {/* Logo */}
            <div className="flex items-center z-50">
              <Link href={getBasePath("/")} className="flex items-center">
                <Image
                  src={getImagePath("/Logo.png")}
                  alt="invoo"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Center Navigation - Desktop */}
            <div className="hidden lg:flex items-center gap-12">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-subheadline-emphasized">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === "services" && (
                  <div
                    className="absolute top-full left-0 mt-2 min-w-[200px] before:absolute before:inset-x-0 before:-top-2 before:h-2 py-2 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(20, 20, 20, 0.98)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.5)',
                      animation: 'slideDown 0.2s ease-out'
                    }}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="relative block px-6 py-3 text-footnote-emphasized text-white/90 hover:text-white hover:bg-white/8 transition-all no-underline"
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
                <button className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-subheadline-emphasized">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === "resources" && (
                  <div
                    className="absolute top-full left-0 mt-2 min-w-[200px] before:absolute before:inset-x-0 before:-top-2 before:h-2 py-2 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(20, 20, 20, 0.98)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.5)',
                      animation: 'slideDown 0.2s ease-out'
                    }}
                  >
                    {resources.map((resource) => (
                      <Link
                        key={resource.name}
                        href={resource.href}
                        className="relative block px-6 py-3 text-footnote-emphasized text-white/90 hover:text-white hover:bg-white/8 transition-all no-underline"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                        }}
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <Link
                href={getBasePath(`/${locale}/pricing`)}
                className="text-white/70 hover:text-white transition-colors text-subheadline-emphasized"
              >
                Pricing
              </Link>

              <Link
                href={getBasePath(`/${locale}/about`)}
                className="text-white/70 hover:text-white transition-colors text-subheadline-emphasized"
              >
                About Us
              </Link>

              <Link
                href={getBasePath(`/${locale}/contact`)}
                className="text-white/70 hover:text-white transition-colors text-subheadline-emphasized"
              >
                Contact
              </Link>
            </div>

            {/* Right Side Actions - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Language Selector */}
              <button className="flex items-center text-white/70 hover:text-white transition-colors p-2">
                <Globe className="w-5 h-5" />
              </button>

              {/* CTA Button */}
              <NavigationDrawerButton />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden z-50">
              <motion.button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white/70 hover:text-white p-2 relative"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring",
                damping: 30,
                stiffness: 300
              }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-[400px] bg-[#0a0a0a] border-l border-white/10 z-50 lg:hidden overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="relative border-b border-white/5 p-6">
                <div className="flex justify-center">
                  <Image
                    src={getImagePath("/Logo.png")}
                    alt="invoo"
                    width={100}
                    height={28}
                    className="h-7 w-auto"
                  />
                </div>
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Drawer Content */}
              <div className="p-6">
                <motion.div
                  className="flex flex-col gap-3"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.05 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                >
                  {/* Services Section */}
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 50 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => setMobileActiveDropdown(mobileActiveDropdown === "services" ? null : "services")}
                      className="relative w-full text-white hover:bg-white/5 rounded-lg transition-colors px-6 py-4 flex items-center justify-center"
                    >
                      <span className="text-callout-emphasized">Services</span>
                      <motion.div
                        style={{
                          position: 'absolute',
                          right: '24px'
                        }}
                        animate={{ rotate: mobileActiveDropdown === "services" ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 text-white/50" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {mobileActiveDropdown === "services" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div style={{ padding: '12px 0' }}>
                            {services.map((service, index) => (
                              <motion.div
                                key={service.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                style={{ marginBottom: index < services.length - 1 ? '8px' : '0' }}
                              >
                                <Link
                                  href={service.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all text-subheadline text-center px-5 py-3 mx-4"
                                >
                                  {service.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Resources Section */}
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 50 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => setMobileActiveDropdown(mobileActiveDropdown === "resources" ? null : "resources")}
                      className="relative w-full text-white hover:bg-white/5 rounded-lg transition-colors px-6 py-4 flex items-center justify-center"
                    >
                      <span className="text-callout-emphasized">Resources</span>
                      <motion.div
                        style={{
                          position: 'absolute',
                          right: '24px'
                        }}
                        animate={{ rotate: mobileActiveDropdown === "resources" ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 text-white/50" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {mobileActiveDropdown === "resources" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div style={{ padding: '12px 0' }}>
                            {resources.map((resource, index) => (
                              <motion.div
                                key={resource.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                style={{ marginBottom: index < resources.length - 1 ? '8px' : '0' }}
                              >
                                <Link
                                  href={resource.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all text-subheadline text-center px-5 py-3 mx-4"
                                >
                                  {resource.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Direct Links */}
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 50 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={getBasePath(`/${locale}/pricing`)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full text-white hover:bg-white/5 rounded-lg transition-colors block px-6 py-4 text-center text-callout-emphasized"
                    >
                      Pricing
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 50 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={getBasePath(`/${locale}/about`)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full text-white hover:bg-white/5 rounded-lg transition-colors block px-6 py-4 text-center text-callout-emphasized"
                    >
                      About Us
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 50 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={getBasePath(`/${locale}/contact`)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full text-white hover:bg-white/5 rounded-lg transition-colors block px-6 py-4 text-center text-callout-emphasized"
                    >
                      Contact
                    </Link>
                  </motion.div>

                  {/* Divider */}
                  <div className="my-6 border-t border-white/5" />

                  {/* Language Button */}
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 50 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      className="w-full text-white hover:bg-white/5 rounded-lg transition-colors px-6 py-4 flex items-center justify-center gap-3"
                    >
                      <Globe className="w-5 h-5 text-white/50" />
                      <span className="text-callout-emphasized">Language</span>
                    </button>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 50 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="pt-6 flex justify-center"
                  >
                    <NavigationDrawerButton />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}