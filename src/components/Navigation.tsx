import { getTranslations } from "next-intl/server";

export default async function Navigation({
  locale,
}: {
  locale: string;
}) {
  const t = await getTranslations("nav");

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <span className="text-xl font-semibold">INVOO</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white/70 hover:text-white transition-colors">
              {t("services")}
            </a>
            <a href="#resources" className="text-white/70 hover:text-white transition-colors">
              {t("resources")}
            </a>
            <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
              {t("pricing")}
            </a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">
              {t("about")}
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#login" className="text-white/70 hover:text-white transition-colors hidden md:block">
              {t("login")}
            </a>
            <button className="gradient-button px-6 py-2">
              {t("getStarted")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}