import { getTranslations } from "next-intl/server";
import { Home, Users, FileText, MoreVertical } from "lucide-react";

export default async function HeroSection() {
  const t = await getTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="orb-blue w-[600px] h-[600px] top-[-200px] right-[-100px]" />
      <div className="orb-pink w-[600px] h-[600px] bottom-[-200px] left-[-100px]" />

      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
            {t("title")}{" "}
            <span className="gradient-text inline-block">{t("titleHighlight")}</span>
            <br />
            {t("titleEnd")}
          </h1>
          <p className="text-xl md:text-2xl text-white/50 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
          <button className="gradient-button text-lg px-10 py-4">
            {t("cta")}
          </button>
        </div>

        <div className="dashboard-mockup max-w-6xl mx-auto shadow-2xl">
          <div className="flex h-[600px]">
            <div className="w-20 bg-black/60 border-r border-white/5 flex flex-col items-center py-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5D5FEF] to-[#843FE8] flex items-center justify-center mb-8">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <div className="space-y-4">
                <button className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/15 transition-all">
                  <Home size={22} className="text-white" />
                </button>
                <button className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
                  <Users size={22} className="text-white/50" />
                </button>
                <button className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
                  <FileText size={22} className="text-white/50" />
                </button>
              </div>
            </div>

            <div className="flex-1 p-10 bg-gradient-to-br from-transparent to-black/20">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-4xl font-bold mb-2">Enviar factura</h2>
                  <p className="text-white/40 text-lg">Dashboard</p>
                </div>
                <button className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
                  <MoreVertical size={24} className="text-white/40" />
                </button>
              </div>

              <div className="text-6xl font-bold text-center mb-10 tracking-tight">
                €45,506.45
              </div>

              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="stat-card">
                  <div className="text-4xl font-bold mb-2">24</div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">Invoices</div>
                </div>
                <div className="stat-card">
                  <div className="text-4xl font-bold mb-2">12</div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">Clients</div>
                </div>
                <div className="stat-card">
                  <div className="text-4xl font-bold mb-2">22</div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">Pending</div>
                </div>
              </div>

              <div className="bg-black/30 rounded-2xl p-6 backdrop-blur-md border border-white/5">
                <div className="grid grid-cols-12 gap-4 text-xs text-white/40 uppercase tracking-wider mb-4 pb-4 border-b border-white/5">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-3">Company</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-2">Due</div>
                  <div className="col-span-2">Amount</div>
                  <div className="col-span-2">Status</div>
                </div>

                <div className="space-y-2">
                  {[
                    { id: "001", company: "Acme Corp", date: "Nov 01", due: "Nov 15", amount: "€2,450", status: "Paid" },
                    { id: "002", company: "Tech Solutions", date: "Nov 02", due: "Nov 16", amount: "€3,200", status: "Pending" },
                    { id: "003", company: "Design Studio", date: "Nov 03", due: "Nov 17", amount: "€1,850", status: "Paid" },
                    { id: "004", company: "Marketing Pro", date: "Nov 04", due: "Nov 18", amount: "€4,100", status: "Overdue" },
                  ].map((invoice) => (
                    <div key={invoice.id} className="grid grid-cols-12 gap-4 text-sm py-3 px-2 hover:bg-white/5 rounded-lg transition-all">
                      <div className="col-span-1 text-white/50">{invoice.id}</div>
                      <div className="col-span-3 font-medium text-white/90">{invoice.company}</div>
                      <div className="col-span-2 text-white/50">{invoice.date}</div>
                      <div className="col-span-2 text-white/50">{invoice.due}</div>
                      <div className="col-span-2 font-semibold text-white/90">{invoice.amount}</div>
                      <div className="col-span-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          invoice.status === "Paid" ? "bg-green-500/20 text-green-400" :
                          invoice.status === "Pending" ? "bg-yellow-500/20 text-yellow-400" :
                          "bg-red-500/20 text-red-400"
                        }`}>
                          {invoice.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}