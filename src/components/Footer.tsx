import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, X } from "lucide-react";
import { getImagePath } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-white px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-4 gap-16 mb-20">
          {/* Logo and description column */}
          <div>
            <div className="mb-6">
              <Image
                src={getImagePath("/Logo.png")}
                alt="Invoo"
                width={130}
                height={60}
              />
            </div>
            <p className="text-footnote" style={{ color: '#9F9F9FB2' }}>
              The gestoría-friendly invoicing platform that connects freelancers, clients, and tax compliance in one seamless flow
            </p>
          </div>

          {/* Invoo column */}
          <div>
            <h3 className="text-headline mb-6">
              Invoo
            </h3>
            <ul className="list-none p-0 flex flex-col gap-4">
              <li><a href="#" className="text-footnote no-underline" style={{ color: '#9F9F9FB2' }}>About Us</a></li>
              <li><Link href="/en/terms" className="text-footnote no-underline" style={{ color: '#9F9F9FB2' }}>Terms of Use</Link></li>
              <li><Link href="/en/privacy" className="text-footnote no-underline" style={{ color: '#9F9F9FB2' }}>Privacy Policy</Link></li>
              <li><Link href="/en/verifactu" className="text-footnote no-underline" style={{ color: '#9F9F9FB2' }}>VeriFActu Compliance</Link></li>
              <li><Link href="/en/contact" className="text-footnote no-underline" style={{ color: '#9F9F9FB2' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-headline mb-6">
              Services
            </h3>
            <ul className="list-none p-0 flex flex-col gap-4">
              <li><a href="#" className="text-footnote no-underline" style={{ color: '#9F9F9FB2' }}>For Freelancers</a></li>
              <li><a href="#" className="text-footnote no-underline" style={{ color: '#9F9F9FB2' }}>For Gestoría</a></li>
              <li><a href="#" className="text-footnote no-underline" style={{ color: '#9F9F9FB2' }}>Pricing</a></li>
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="text-headline mb-6">
              Resources
            </h3>
            <ul className="list-none p-0 flex flex-col gap-4">
              <li><a href="#" className="text-footnote no-underline" style={{ color: '#9F9F9FB2' }}>FAQs</a></li>
              <li><a href="https://invoo.substack.com/" target="_blank" rel="noopener noreferrer" className="text-footnote no-underline" style={{ color: '#9F9F9FB2' }}>Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-center pt-8 border-t border-white/20">
          <p className="text-footnote" style={{ color: '#9F9F9FB2' }}>
            © 2025 Invoo.es. Todos los derechos reservados. Hecho con amor para autónomos españoles
          </p>

          {/* Social icons */}
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/invooes" target="_blank" rel="noopener noreferrer" style={{ color: '#9F9F9FB2' }}>
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/InvooES" target="_blank" rel="noopener noreferrer" style={{ color: '#9F9F9FB2' }}>
              <X size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578360993110" target="_blank" rel="noopener noreferrer" style={{ color: '#9F9F9FB2' }}>
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}