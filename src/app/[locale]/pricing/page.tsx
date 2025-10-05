import { setRequestLocale } from "next-intl/server";
import Navigation from "@/components/Navigation";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation locale={locale} />
      <PricingSection />
      <Footer locale={locale} />
    </div>
  );
}