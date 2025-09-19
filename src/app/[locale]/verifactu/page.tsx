import { setRequestLocale } from "next-intl/server";
import Navigation from "@/components/Navigation";
import VerifactuContent from "@/components/VerifactuContent";
import Footer from "@/components/Footer";

export default async function VerifactuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-black">
      <Navigation locale={locale} />
      <VerifactuContent />
      <Footer />
    </div>
  );
}