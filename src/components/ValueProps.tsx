import { getTranslations } from "next-intl/server";
import { Clock, Shield, Users } from "lucide-react";

export default async function ValueProps() {
  const t = await getTranslations("valueProps");

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 max-w-4xl mx-auto leading-tight">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
              <Clock size={32} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t("saveTime.title")}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("saveTime.desc")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center">
              <Shield size={32} className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t("compliant.title")}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("compliant.desc")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center">
              <Users size={32} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t("customer.title")}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("customer.desc")}
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-16">
          <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
            {t("demo")}
          </button>
          <button className="gradient-button px-6 py-3">
            {t("getStarted")}
          </button>
        </div>
      </div>
    </section>
  );
}