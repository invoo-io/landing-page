import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { getImagePath } from "@/lib/utils";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#161616',
      padding: '80px 24px 40px',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Main footer content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '64px',
          marginBottom: '80px'
        }}>
          {/* Logo and description column */}
          <div>
            <div style={{
              marginBottom: '24px'
            }}>
              <Image
                src={getImagePath("/Logo.png")}
                alt="Invoo"
                width={130}
                height={60}
              />
            </div>
            <p style={{
              fontSize: '14px',
              color: '#9F9F9FB2',
              lineHeight: '1.6'
            }}>
              The gestoría-friendly invoicing platform that connects freelancers, clients, and tax compliance in one seamless flow
            </p>
          </div>

          {/* Invoo column */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              marginBottom: '24px'
            }}>
              Invoo
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <li><a href="#" style={{ color: '#9F9F9FB2', textDecoration: 'none', fontSize: '14px' }}>About Us</a></li>
              <li><a href="#" style={{ color: '#9F9F9FB2', textDecoration: 'none', fontSize: '14px' }}>Terms of Use</a></li>
              <li><a href="#" style={{ color: '#9F9F9FB2', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: '#9F9F9FB2', textDecoration: 'none', fontSize: '14px' }}>VeriFActu Compliance</a></li>
              <li><a href="#" style={{ color: '#9F9F9FB2', textDecoration: 'none', fontSize: '14px' }}>Contact</a></li>
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              marginBottom: '24px'
            }}>
              Services
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <li><a href="#" style={{ color: '#9F9F9FB2', textDecoration: 'none', fontSize: '14px' }}>For Freelancers</a></li>
              <li><a href="#" style={{ color: '#9F9F9FB2', textDecoration: 'none', fontSize: '14px' }}>For Gestoría</a></li>
              <li><a href="#" style={{ color: '#9F9F9FB2', textDecoration: 'none', fontSize: '14px' }}>Pricing</a></li>
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              marginBottom: '24px'
            }}>
              Resources
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <li><a href="#" style={{ color: '#9F9F9FB2', textDecoration: 'none', fontSize: '14px' }}>FAQs</a></li>
              <li><a href="#" style={{ color: '#9F9F9FB2', textDecoration: 'none', fontSize: '14px' }}>Blog</a></li>
              <li><a href="#" style={{ color: '#9F9F9FB2', textDecoration: 'none', fontSize: '14px' }}>Net Salary Calculator</a></li>
              <li><a href="#" style={{ color: '#9F9F9FB2', textDecoration: 'none', fontSize: '14px' }}>Freelancer Quota Calculator</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '32px',
          borderTop: '1px solid rgba(159, 159, 159, 0.2)'
        }}>
          <p style={{
            fontSize: '13px',
            color: '#9F9F9FB2'
          }}>
            © 2025 Invoo.es. Todos los derechos reservados. Hecho con amor para autónomos españoles
          </p>
          
          {/* Social icons */}
          <div style={{
            display: 'flex',
            gap: '24px'
          }}>
            <a href="#" style={{ color: '#9F9F9FB2' }}>
              <Twitter size={20} />
            </a>
            <a href="#" style={{ color: '#9F9F9FB2' }}>
              <Facebook size={20} />
            </a>
            <a href="#" style={{ color: '#9F9F9FB2' }}>
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}