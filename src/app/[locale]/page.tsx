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
import GradientText from "@/components/ui/GradientText";
import { getImagePath } from "@/lib/utils";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation locale={locale} />
      <HeroSection
        title={
          <>
            <span className="text-label-inverted">Create and send</span>{" "}
            <GradientText>Compliant</GradientText>
            <br />
            <GradientText>Invoices</GradientText>{" "}
            <span className="text-label-inverted">in 30 seconds.</span>
          </>
        }
        paragraph="Invoo helps freelancers and gestorías work faster together: VeriFActu-ready, professional PDFs, instant sharing, and automatic tax summaries."
        buttonText="Join the waiting list"
        buttonHref="#waitlist"
      />
      <HeroImageSection dashboardImage="/Home.png" backgroundImage="/Bck-Main.png" />
      <WhyChooseSection />
      <InvoicingSection />
      <MoreThanInvoiceSection />
      <BuildForGestoriasSection 
        title="Built for gestorías"
        paragraph="Invoo is not just for freelancers. Gestorías get real-time access to client invoices and expenses, without chasing or retrying. Free, secure, and always VeriFActu compliant."
        features={[
          "Real-time multi-client data",
          "Bulk CSV export",
          "Quarterly tax summaries"
        ]}
        buttonText="Learn More"
        // imageSrc={getImagePath("/productdashboard.png")}
        imageSrc={getImagePath("/Gestoria.png")}
        imageAlt="Gestorías Dashboard"
        imagePosition="right"
      />
      <PricingSection />
      <FocusSection />
      <Footer locale={locale} />
    </div>
  );
}
