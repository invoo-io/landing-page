import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutContent from "@/components/AboutContent";
import FocusSection from "@/components/FocusSection";
import Footer from "@/components/Footer";
import GradientText from "@/components/ui/GradientText";
import { getImagePath } from "@/lib/utils";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about.header" });

  return (
    <div className="min-h-screen bg-bg-primary relative overflow-hidden">
      <div className="relative z-10">
        <Navigation locale={locale} />
        <Image
          src={getImagePath("/aboutusimage2.png")}
          alt="Decorative gradient shape"
          width={964}
          height={1349}
          style={{
            position: "absolute",
            top: 100,
            left: 0,
            maxHeight: "1000px",
            width: "auto",
            opacity: 1,
            zIndex: 20,
          }}
        />
        <HeroSection
          title={
            <>
              <span style={{ color: "#EFEFF5" }}>
                {locale === "en" ? "Helping freelancers and gestorías " : "Ayudando a autónomos y gestorías a "}
              </span>
              <GradientText>{locale === "en" ? "work better together" : "trabajar mejor juntos"}</GradientText>
            </>
          }
          paragraph={t("description")}
        />
        <AboutContent />
        <FocusSection />
        <Footer locale={locale} />
      </div>
    </div>
  );
}
