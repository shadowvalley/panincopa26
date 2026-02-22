import { motion } from "framer-motion";

const stats = [
  { value: "112", label: "Páginas", desc: "O maior álbum já produzido" },
  { value: "980", label: "Figurinhas", desc: "Coleção completa mais extensa" },
  { value: "7", label: "Por Pacote", desc: "Maior chance de cromadas" },
  { value: "48", label: "Seleções", desc: "Todas as equipes classificadas" },
];

const highlights = [
  "⚽ Primeira Copa do Mundo com 48 seleções",
  "📖 Álbum com 112 páginas — recorde histórico",
  "🌍 Três países-sede: EUA, Canadá e México",
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
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-card rounded-2xl p-5 text-center border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <p className="text-3xl font-display text-primary tracking-tight">{stat.value}</p>
              <p className="text-sm font-semibold mt-1">{stat.label}</p>
              <p className="text-[11px] text-muted-foreground mt-1 leading-tight">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-7 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="text-xl font-display mb-4 tracking-tight">Edição Histórica</h3>
          <div className="space-y-3">
            {highlights.map((h) => (
              <p key={h} className="text-sm text-muted-foreground leading-relaxed">{h}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;