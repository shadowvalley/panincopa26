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
      {/* Football-themed minimalist line-art background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soccer Ball - top right */}
        <svg className="absolute top-6 right-[8%] w-20 h-20 opacity-[0.08]" viewBox="0 0 64 64" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="32" r="30"/>
          <polygon points="32,8 38,20 26,20"/>
          <polygon points="54,24 48,36 42,24"/>
          <polygon points="50,48 38,48 44,36"/>
          <polygon points="32,56 26,44 38,44"/>
          <polygon points="14,48 20,36 26,48"/>
          <polygon points="10,24 22,24 16,36"/>
          <line x1="32" y1="8" x2="42" y2="24"/>
          <line x1="54" y1="24" x2="44" y2="36"/>
          <line x1="50" y1="48" x2="38" y2="44"/>
          <line x1="32" y1="56" x2="26" y2="44"/>
          <line x1="14" y1="48" x2="20" y2="36"/>
          <line x1="10" y1="24" x2="22" y2="24"/>
        </svg>

        {/* Trophy - top left */}
        <svg className="absolute top-10 left-[6%] w-18 h-18 opacity-[0.07]" viewBox="0 0 64 64" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 8h24v4c0 8-4 16-12 20-8-4-12-12-12-20V8z"/>
          <path d="M20 12h-6c-2 0-4 2-4 4v2c0 6 4 10 10 10"/>
          <path d="M44 12h6c2 0 4 2 4 4v2c0 6-4 10-10 10"/>
          <line x1="32" y1="32" x2="32" y2="42"/>
          <rect x="24" y="42" width="16" height="4" rx="1"/>
          <rect x="20" y="46" width="24" height="4" rx="2"/>
          <path d="M28 14l4 8 4-8" opacity="0.5"/>
        </svg>

        {/* Boot/Cleat - bottom left */}
        <svg className="absolute bottom-8 left-[10%] w-20 h-20 opacity-[0.07]" viewBox="0 0 64 64" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 44c0-4 2-8 6-10l8-8c2-2 4-2 6 0l4 4 6-2c2-1 4 0 5 2l4 6c1 2 0 4-2 5l-6 3h2c2 0 4 2 4 4v4c0 2-2 4-4 4H16c-2 0-4-2-4-4v-8z"/>
          <line x1="18" y1="53" x2="18" y2="57"/>
          <line x1="24" y1="53" x2="24" y2="57"/>
          <line x1="30" y1="53" x2="30" y2="57"/>
          <line x1="36" y1="53" x2="36" y2="57"/>
          <path d="M26 30l6 6" opacity="0.5"/>
        </svg>

        {/* Small soccer ball - bottom right */}
        <svg className="absolute bottom-16 right-[5%] w-14 h-14 opacity-[0.06] rotate-12" viewBox="0 0 64 64" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="32" r="30"/>
          <polygon points="32,8 38,20 26,20"/>
          <polygon points="54,24 48,36 42,24"/>
          <polygon points="50,48 38,48 44,36"/>
          <polygon points="32,56 26,44 38,44"/>
          <polygon points="14,48 20,36 26,48"/>
          <polygon points="10,24 22,24 16,36"/>
        </svg>

        {/* Small trophy - center left */}
        <svg className="absolute top-1/2 left-[2%] w-12 h-12 opacity-[0.05] -rotate-6" viewBox="0 0 64 64" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 8h24v4c0 8-4 16-12 20-8-4-12-12-12-20V8z"/>
          <line x1="32" y1="32" x2="32" y2="42"/>
          <rect x="24" y="42" width="16" height="4" rx="1"/>
          <rect x="20" y="46" width="24" height="4" rx="2"/>
        </svg>
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