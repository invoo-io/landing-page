import { setRequestLocale } from "next-intl/server";
import Navigation from "@/components/Navigation";
import PrivacyContent from "@/components/PrivacyContent";
import Footer from "@/components/Footer";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-black">
      <Navigation locale={locale} />
      <PrivacyContent />
      <Footer />
    </div>
  );
}