import { setRequestLocale } from "next-intl/server";
import Navigation from "@/components/Navigation";
import TermsContent from "@/components/TermsContent";
import Footer from "@/components/Footer";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-black">
      <Navigation locale={locale} />
      <TermsContent />
      <Footer locale={locale} />
    </div>
  );
}