import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, X } from "lucide-react";
import { getImagePath, getBasePath } from "@/lib/utils";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="bg-system-grey800 text-label-inverted px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-4 gap-16 mb-20">
          {/* Logo and description column */}
          <div>
            <div className="mb-6">
              <Image
                src={getImagePath("/Logo.svg")}
                alt="Invoo"
                width={130}
                height={60}
              />
            </div>
            <p className="text-callout text-label-inverted-secondary">
              The gestoría-friendly invoicing platform that connects freelancers, clients, and tax compliance in one seamless flow
            </p>
          </div>

          {/* Invoo column */}
          <div>
            <h3 className="text-headline text-label-inverted mb-6">
              Invoo
            </h3>
            <ul className="list-none p-0 flex flex-col gap-4">
              <li><Link href={getBasePath(`/${locale}/about`)} className="text-callout no-underline text-label-inverted-secondary hover:text-label-inverted transition-colors">About Us</Link></li>
              <li><Link href={getBasePath(`/${locale}/terms`)} className="text-callout no-underline text-label-inverted-secondary hover:text-label-inverted transition-colors">Terms of Use</Link></li>
              <li><Link href={getBasePath(`/${locale}/privacy`)} className="text-callout no-underline text-label-inverted-secondary hover:text-label-inverted transition-colors">Privacy Policy</Link></li>
              <li><Link href={getBasePath(`/${locale}/contact`)} className="text-callout no-underline text-label-inverted-secondary hover:text-label-inverted transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-headline text-label-inverted mb-6">
              Services
            </h3>
            <ul className="list-none p-0 flex flex-col gap-4">
              <li><Link href={getBasePath(`/${locale}/freelancers`)} className="text-callout no-underline text-label-inverted-secondary hover:text-label-inverted transition-colors">For Freelancers</Link></li>
              <li><Link href={getBasePath(`/${locale}/gestorias`)} className="text-callout no-underline text-label-inverted-secondary hover:text-label-inverted transition-colors">For Gestoría</Link></li>
              <li><Link href={getBasePath(`/${locale}/pricing`)} className="text-callout no-underline text-label-inverted-secondary hover:text-label-inverted transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="text-headline text-label-inverted mb-6">
              Resources
            </h3>
            <ul className="list-none p-0 flex flex-col gap-4">
              <li><Link href={getBasePath(`/${locale}/faq`)} className="text-callout no-underline text-label-inverted-secondary hover:text-label-inverted transition-colors">FAQs</Link></li>
              <li><a href="https://invoo.substack.com/" target="_blank" rel="noopener noreferrer" className="text-callout no-underline text-label-inverted-secondary hover:text-label-inverted transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-center pt-8 border-t border-strokes-primary">
          <p className="text-footnote text-label-inverted-secondary">
            © 2025 Invoo.es. Todos los derechos reservados. Hecho con amor para autónomos españoles
          </p>

          {/* Social icons */}
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/invooes" target="_blank" rel="noopener noreferrer" className="text-label-inverted-secondary hover:text-label-inverted transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/InvooES" target="_blank" rel="noopener noreferrer" className="text-label-inverted-secondary hover:text-label-inverted transition-colors">
              <X size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578360993110" target="_blank" rel="noopener noreferrer" className="text-label-inverted-secondary hover:text-label-inverted transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}