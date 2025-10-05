import { setRequestLocale } from "next-intl/server";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import FocusSection from "@/components/FocusSection";
import Footer from "@/components/Footer";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-black">
      <Navigation locale={locale} />
      <ContactForm />
      <FocusSection />
      <Footer locale={locale} />
    </div>
  );
}