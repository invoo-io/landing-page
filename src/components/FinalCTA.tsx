import { getTranslations } from "next-intl/server";

export default async function FinalCTA() {
  const t = await getTranslations("finalCta");

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="orb-pink w-[600px] h-[600px] -bottom-48 -right-48 opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            {t("title")}
          </h2>
          <button className="gradient-button text-lg px-10 py-4 font-medium">
            {t("button")}
          </button>
        </div>
      </div>
    </section>
  );
}