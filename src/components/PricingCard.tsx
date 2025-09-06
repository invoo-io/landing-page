import { getTranslations } from "next-intl/server";
import { Check } from "lucide-react";

export default async function PricingCard() {
  const t = await getTranslations("pricing");

  const features = [
    "Unlimited invoices",
    "Automatic compliance checks",
    "Multiple payment methods",
    "Client portal access",
    "Export to PDF/CSV",
    "Tax reports",
    "24/7 support",
    "API access"
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
          {t("title")}
        </h2>

        <div className="max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-30" />
            
            <div className="relative bg-black border border-white/10 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">{t("plan")}</h3>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-5xl font-bold">{t("price")}</span>
                  <span className="text-white/60">{t("period")}</span>
                </div>
                <p className="text-sm text-white/60 mt-2">{t("subtitle")}</p>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-sm text-white/60 font-medium">{t("features")}</p>
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-green-400" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full gradient-button py-3 rounded-full font-medium">
                Start Free Trial
              </button>

              <p className="text-center text-sm text-white/60 mt-4">
                {t("trial")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}