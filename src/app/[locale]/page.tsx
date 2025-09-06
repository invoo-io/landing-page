import { setRequestLocale } from "next-intl/server";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import SimpleProcess from "@/components/SimpleProcess";
import FeaturesGrid from "@/components/FeaturesGrid";
import GestoriasSection from "@/components/GestoriasSection";
import PricingCard from "@/components/PricingCard";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-black">
      <Navigation locale={locale} />
      <HeroSection />
      <ValueProps />
      <SimpleProcess />
      <FeaturesGrid />
      <GestoriasSection />
      <PricingCard />
      <FinalCTA />
      <Footer />
    </div>
  );
}
