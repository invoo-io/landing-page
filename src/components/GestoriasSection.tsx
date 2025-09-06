import { getTranslations } from "next-intl/server";
import { Building2, Users, FileText, TrendingUp } from "lucide-react";

export default async function GestoriasSection() {
  const t = await getTranslations("gestorias");

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
          {t("title")}
        </h2>
        <p className="text-xl text-white/60 text-center mb-16 max-w-2xl mx-auto">
          {t("desc")}
        </p>

        <div className="dashboard-mockup max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-semibold">Dashboard</div>
              <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm">
                <option>All Clients</option>
                <option>Active</option>
                <option>Pending</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="stat-card">
              <div className="flex items-center justify-between mb-2">
                <Building2 size={20} className="text-blue-400" />
                <span className="text-xs text-green-400">+12%</span>
              </div>
              <div className="text-2xl font-bold">87</div>
              <div className="text-xs text-white/60">Total Clients</div>
            </div>
            <div className="stat-card">
              <div className="flex items-center justify-between mb-2">
                <FileText size={20} className="text-purple-400" />
                <span className="text-xs text-green-400">+8%</span>
              </div>
              <div className="text-2xl font-bold">342</div>
              <div className="text-xs text-white/60">Invoices</div>
            </div>
            <div className="stat-card">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp size={20} className="text-green-400" />
                <span className="text-xs text-green-400">+15%</span>
              </div>
              <div className="text-2xl font-bold">€234K</div>
              <div className="text-xs text-white/60">Revenue</div>
            </div>
            <div className="stat-card">
              <div className="flex items-center justify-between mb-2">
                <Users size={20} className="text-orange-400" />
                <span className="text-xs text-yellow-400">+5%</span>
              </div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-xs text-white/60">Compliance</div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="grid grid-cols-12 gap-4 text-sm text-white/60 mb-4 pb-4 border-b border-white/10">
              <div className="col-span-3">Client</div>
              <div className="col-span-2">Country</div>
              <div className="col-span-2">Invoices</div>
              <div className="col-span-2">Revenue</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1">Actions</div>
            </div>

            <div className="space-y-3">
              {[
                { name: "TechCorp Solutions", country: "🇪🇸 Spain", invoices: 45, revenue: "€28,450", status: "Active" },
                { name: "Digital Agency Pro", country: "🇫🇷 France", invoices: 32, revenue: "€19,200", status: "Active" },
                { name: "Marketing Masters", country: "🇩🇪 Germany", invoices: 28, revenue: "€22,100", status: "Pending" },
                { name: "Design Studio Plus", country: "🇮🇹 Italy", invoices: 51, revenue: "€34,500", status: "Active" },
                { name: "Consulting Group", country: "🇬🇧 UK", invoices: 39, revenue: "€41,200", status: "Active" },
              ].map((client, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 text-sm py-2 hover:bg-white/5 rounded-lg transition">
                  <div className="col-span-3 font-medium">{client.name}</div>
                  <div className="col-span-2">{client.country}</div>
                  <div className="col-span-2">{client.invoices}</div>
                  <div className="col-span-2 font-medium">{client.revenue}</div>
                  <div className="col-span-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      client.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {client.status}
                    </span>
                  </div>
                  <div className="col-span-1 text-white/40">•••</div>
                </div>
              ))}
            </div>
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