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
    <section className="py-16 px-4 bg-muted/40">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-2 tracking-tight">
          Sobre o Álbum
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-12 max-w-lg mx-auto leading-relaxed">
          A edição mais completa já produzida, com mais de 700 figurinhas colecionáveis.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/20 transition-colors"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-3 border border-primary/10 shadow-sm">
                <stat.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-3xl font-display text-foreground tracking-tight">{stat.value}</p>
              <p className="text-sm font-semibold mt-1">{stat.label}</p>
              <p className="text-[11px] text-muted-foreground mt-1 leading-tight">{stat.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-7 border relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--primary)/0.03) 100%)",
            borderColor: "hsl(var(--primary)/0.12)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.06]" style={{
            background: "radial-gradient(circle at top right, hsl(var(--primary)), transparent 70%)",
          }} />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-primary" />
            <h3 className="text-xl font-display tracking-tight text-foreground">Edição Histórica</h3>
          </div>

          <div className="space-y-5">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="flex gap-4 items-start pl-4 relative"
              >
                <div
                  className="absolute left-0 top-1 w-[3px] rounded-full bg-gradient-to-b from-primary/60 to-primary/15"
                  style={{ height: "calc(100% - 4px)" }}
                />
                <div>
                  <p className="text-sm font-display font-bold text-foreground tracking-tight">{h.title}</p>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mt-1">{h.desc}</p>
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
