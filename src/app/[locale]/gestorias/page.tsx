import { setRequestLocale } from "next-intl/server";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HeroImageSection from "@/components/HeroImageSection";
import BuildForGestoriasSection from "@/components/BuildForGestoriasSection";
import FocusSection from "@/components/FocusSection";
import Footer from "@/components/Footer";
import GradientText from "@/components/ui/GradientText";

export default async function GestoriasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-black">
      <Navigation locale={locale} />
      <HeroSection 
        title={
          <>
            <span style={{color: '#EFEFF5'}}>Less paperwork, </span>
            
            <GradientText>more advising</GradientText>
          </>
        }
        paragraph="Invoo gives gestoría real-time access to client invoices and expenses, always VeriFactu compliant, always free"
        buttonText="Get Started"
        buttonHref="#contact"
      />
      <HeroImageSection />
      <BuildForGestoriasSection 
        title="Always up to date"
        paragraph="No more chasing clients for invoices. See every invoice and expense the moment it's created."
        features={[
          "Instant invoice + expense sync",
          "VeriFActu QR included automatically",
          "Alerts when new activity appears"
        ]}
        buttonText="Join the waiting list"
      />
      <BuildForGestoriasSection 
        title="Data you can actually use"
        paragraph="Download clean CSVs or XMLs ready for your accounting software, no retyping required"
        features={[
          "One-click CSV export",
          "Quarterly or monthly batch downloads",
          "XML exports aligned with AEAT standards"
        ]}
        buttonText="Join the waiting list"
        imagePosition="left"
        showImagePlaceholder={true}
      />
      <BuildForGestoriasSection 
        title="Tax periods in seconds"
        paragraph="Pre-calculated Modelo 130 and 303 summaries per client help you prepare declarations faster"
        features={[
          "Auto-generated summaries.",
          "Clear breakdowns of bases and IVA",
          "Easy to review and validate"
        ]}
        buttonText="Join the waiting list"
        imagePosition="right"
        showImagePlaceholder={true}
      />
      <BuildForGestoriasSection 
        title="Zero cost, zero risk"
        paragraph="Invoo is free for gestorías. Clients pay their subscription, you get the tools, no barriers to adoption"
        features={[
          "Free dashboard access",
          "Unlimited clients",
          "Built for collaboration, not replacement"
        ]}
        buttonText="Join the waiting list"
        imagePosition="left"
        showImagePlaceholder={true}
      />
      <FocusSection />
      <Footer />
    </div>
  );
}