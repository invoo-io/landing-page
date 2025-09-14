import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutContent from "@/components/AboutContent";
import FocusSection from "@/components/FocusSection";
import Footer from "@/components/Footer";
import GradientText from "@/components/ui/GradientText";
import { getImagePath } from "@/lib/utils";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      <div className="relative z-10">
        <Navigation locale={locale} />
        <Image
        src={getImagePath("/aboutusimage.png")}
        alt="Decorative gradient shape"
        width={964}
        height={1349}
        style={{
          position: 'absolute',
          top: '-110px',
          left: '-200px',
          transform: 'scaleX(-1)',
          opacity: 0.2,
          zIndex: 20
        }}
      />
        <HeroSection 
          title={
            <>
              <span style={{color: '#EFEFF5'}}>Helping freelancers and Gestoría </span>
              <GradientText>work better together</GradientText>
            </>
          }
          paragraph="Invoo is the gestoría-friendly invoicing platform built to simplify compliance, save time, and empower collaboration"
        />
        <AboutContent />
        <FocusSection />
        <Footer />
      </div>
    </div>
  );
}