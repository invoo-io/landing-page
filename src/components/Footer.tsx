import { getTranslations } from "next-intl/server";
import { Twitter, Linkedin, Github } from "lucide-react";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-xl font-semibold">INVOO</span>
            </div>
            <p className="text-sm text-white/60">
              {t("company")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Home</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition">Product</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition">Features</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition">For Freelancers</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition">For Gestorías</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-white/60">
            © 2024 Invoo. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition">
              <Twitter size={18} className="text-white/60" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition">
              <Linkedin size={18} className="text-white/60" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition">
              <Github size={18} className="text-white/60" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}