import { motion } from "framer-motion";
import { BookOpen, Layers, Sparkles, Globe } from "lucide-react";

const stats = [
  { value: "112", label: "Páginas", desc: "O maior álbum já produzido", icon: BookOpen },
  { value: "980", label: "Figurinhas", desc: "Coleção completa mais extensa", icon: Layers },
  { value: "7", label: "Por Pacote", desc: "Maior chance de cromadas", icon: Sparkles },
  { value: "48", label: "Seleções", desc: "Todas as equipes classificadas", icon: Globe },
];

const highlights = [
  { title: "48 Seleções", desc: "Primeira Copa do Mundo com 48 equipes classificadas, a maior da história." },
  { title: "112 Páginas", desc: "O álbum mais extenso já produzido pela Panini, com conteúdo exclusivo." },
  { title: "3 Países-Sede", desc: "Edição inédita com jogos nos Estados Unidos, Canadá e México." },
];

const ProductFeatures = () => {
  return (
    <section className="py-16 px-4 bg-muted/40 relative overflow-hidden">
      {/* Football-themed background icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Trophy */}
        <svg className="absolute top-8 left-[8%] w-16 h-16 text-primary/[0.06]" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14v2h-1v2a5 5 0 01-3.18 4.66A3.5 3.5 0 0112 15.5a3.5 3.5 0 01-2.82-3.84A5 5 0 016 7V5H5V3zm3 2v2a3 3 0 003 3h2a3 3 0 003-3V5H8zM9 17h6v2H9v-2zm-1 4h8v1H8v-1z"/></svg>
        {/* Soccer ball */}
        <svg className="absolute top-20 right-[10%] w-14 h-14 text-primary/[0.07]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2l3 7h-6l3-7zm-10 10l7-3v6l-7-3zm20 0l-7-3v6l7-3zm-10 10l-3-7h6l-3 7z"/></svg>
        {/* Boot/Cleat */}
        <svg className="absolute bottom-12 left-[12%] w-16 h-16 text-primary/[0.06]" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17h2v-3l4-4 3 1 5-3 4 2v1h1v3l-1 1v2H3v-2l1-1v-1H3v1zm5-5l-2 2v2h14v-1l1-1v-1l-3-1.5-5 3-3-1L8 12z"/></svg>
        {/* Another trophy */}
        <svg className="absolute bottom-24 right-[6%] w-12 h-12 text-primary/[0.05] rotate-12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14v2h-1v2a5 5 0 01-3.18 4.66A3.5 3.5 0 0112 15.5a3.5 3.5 0 01-2.82-3.84A5 5 0 016 7V5H5V3zm3 2v2a3 3 0 003 3h2a3 3 0 003-3V5H8zM9 17h6v2H9v-2zm-1 4h8v1H8v-1z"/></svg>
        {/* Ball */}
        <svg className="absolute top-1/2 left-[3%] w-10 h-10 text-primary/[0.05]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2l3 7h-6l3-7zm-10 10l7-3v6l-7-3zm20 0l-7-3v6l7-3zm-10 10l-3-7h6l-3 7z"/></svg>
        {/* Boot */}
        <svg className="absolute top-10 left-1/2 w-10 h-10 text-primary/[0.04] -rotate-12" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17h2v-3l4-4 3 1 5-3 4 2v1h1v3l-1 1v2H3v-2l1-1v-1H3v1zm5-5l-2 2v2h14v-1l1-1v-1l-3-1.5-5 3-3-1L8 12z"/></svg>
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-2 tracking-tight">
          Sobre o Álbum
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-12 max-w-lg mx-auto leading-relaxed">
          A edição mais completa já produzida, com mais de 700 figurinhas colecionáveis.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/20 transition-colors"
              style={{ boxShadow: "var(--shadow-card)" }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-3 border border-primary/10 shadow-sm">
                <stat.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-3xl font-display text-foreground tracking-tight">{stat.value}</p>
              <p className="text-sm font-semibold mt-1">{stat.label}</p>
              <p className="text-[11px] text-muted-foreground mt-1 leading-tight">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-7 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="text-xl font-display mb-5 tracking-tight">Edição Histórica</h3>
          <div className="space-y-4">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-4 items-start">
                <div className="w-1 h-full min-h-[40px] rounded-full bg-primary/30 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{h.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;