import { setRequestLocale } from "next-intl/server";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HeroImageSection from "@/components/HeroImageSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import InvoicingSection from "@/components/InvoicingSection";
import MoreThanInvoiceSection from "@/components/MoreThanInvoiceSection";
import BuildForGestoriasSection from "@/components/BuildForGestoriasSection";
import PricingSection from "@/components/PricingSection";
import FocusSection from "@/components/FocusSection";
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
      <HeroImageSection />
      <WhyChooseSection />
      <InvoicingSection />
      <MoreThanInvoiceSection />
      <BuildForGestoriasSection />
      <PricingSection />
      <FocusSection />
      <Footer />
    </div>
  );
}
