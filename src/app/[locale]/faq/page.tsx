import { setRequestLocale } from "next-intl/server";
import Navigation from "@/components/Navigation";
import FAQContent from "@/components/FAQContent";
import FocusSection from "@/components/FocusSection";
import Footer from "@/components/Footer";

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-black">
      <Navigation locale={locale} />
      <FAQContent />
      <FocusSection />
      <Footer locale={locale} />
    </div>
  );
}