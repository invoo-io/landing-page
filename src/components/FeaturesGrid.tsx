import { getTranslations } from "next-intl/server";
import { Receipt, Calculator, BarChart3, Download } from "lucide-react";

export default async function FeaturesGrid() {
  const t = await getTranslations("features");

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="orb-blue w-[400px] h-[400px] top-20 -left-48 opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="glass-card p-10 flex items-center space-x-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/15 to-blue-600/15 flex items-center justify-center flex-shrink-0 group-hover:from-purple-500/25 group-hover:to-blue-600/25 transition-all">
              <Receipt size={32} className="text-purple-400" />
            </div>
            <span className="text-xl font-semibold">{t("expense")}</span>
          </div>

          <div className="glass-card p-10 flex items-center space-x-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/15 to-emerald-600/15 flex items-center justify-center flex-shrink-0 group-hover:from-green-500/25 group-hover:to-emerald-600/25 transition-all">
              <Calculator size={32} className="text-green-400" />
            </div>
            <span className="text-xl font-semibold">{t("tax")}</span>
          </div>

          <div className="glass-card p-10 flex items-center space-x-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-600/15 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/25 group-hover:to-cyan-600/25 transition-all">
              <BarChart3 size={32} className="text-blue-400" />
            </div>
            <span className="text-xl font-semibold">{t("dashboard")}</span>
          </div>

          <div className="glass-card p-10 flex items-center space-x-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/15 to-red-600/15 flex items-center justify-center flex-shrink-0 group-hover:from-orange-500/25 group-hover:to-red-600/25 transition-all">
              <Download size={32} className="text-orange-400" />
            </div>
            <span className="text-xl font-semibold">{t("exports")}</span>
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