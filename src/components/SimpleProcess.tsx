import { getTranslations } from "next-intl/server";

export default async function SimpleProcess() {
  const t = await getTranslations("process");

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">{t("step1.title")}</h3>
            <p className="text-white/60 text-sm">
              {t("step1.desc")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">{t("step2.title")}</h3>
            <p className="text-white/60 text-sm">
              {t("step2.desc")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">{t("step3.title")}</h3>
            <p className="text-white/60 text-sm">
              {t("step3.desc")}
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="gradient-button px-8 py-3">
            {t("getStarted")}
          </button>
        </div>
      </div>
    </section>
  );
}