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
            <span style={{color: '#EFEFF5'}}>Invoicing </span>
            
            <GradientText>without the stress</GradientText>
          </>
        }
        paragraph="Professional invoices, automatic VeriFactu compliance, and instant delivery to AEAT, your client, and your gestoría"
        buttonText="Get Started"
        buttonHref="#contact"
      />
      <HeroImageSection />
      <BuildForGestoriasSection 
        title="Create professional invoices in seconds"
        paragraph="Skip the templates and Excel hacks. Invoo generates polished PDFs that are always correctly numbered and ready to send."
        features={[
          "Autofilled client data",
          "Professional PDF templates",
          "Automatic numbering"
        ]}
        buttonText="Join the waiting list"
      />
      <BuildForGestoriasSection 
        title="Compliance, handled for you"
        paragraph="Every invoice includes the official VeriFActu QR and is submitted to AEAT in the background, so you never worry about errors or fines."
        features={[
          "Automatic QR generation",
          "Secure AEAT submission",
          "Full audit trail with status checks"
        ]}
        buttonText="Join the waiting list"
        imagePosition="left"
        showImagePlaceholder={true}
      />
      <BuildForGestoriasSection 
        title="Your finances in one simple view"
        paragraph="From daily expenses to quarterly models, Invoo centralizes everything so you can see the big picture without switching tools."
        features={[
          "Snap and log expenses",
          "Automatic monthly summaries",
          "Pre-calculated Modelo 130/303"
        ]}
        buttonText="Join the waiting list"
        imagePosition="right"
        showImagePlaceholder={true}
      />
      <BuildForGestoriasSection 
        title="Share effortlessly with your gestoría"
        paragraph="No more chasing or forwarding PDFs. Your gestoría sees invoices and expenses in real time, at no cost to them."
        features={[
          "Direct access for your gestoría",
          "No email chains or retyping",
          "Free for gestorías"
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