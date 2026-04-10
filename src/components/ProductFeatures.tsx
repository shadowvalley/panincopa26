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
