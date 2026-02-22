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
    <section className="py-12 px-4 bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-3">
          Sobre o Álbum de Coleção
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-10 max-w-xl mx-auto">
          Esta é a edição mais completa já produzida, com mais de 700 figurinhas colecionáveis incluindo 
          todos os times, estádios e a categoria especial com os maiores jogadores da história.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-card rounded-xl p-5 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-3xl font-display text-primary">{stat.value}</p>
              <p className="text-sm font-semibold">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-6" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="text-xl font-display mb-4">Edição Histórica</h3>
          <div className="space-y-3">
            {highlights.map((h) => (
              <p key={h} className="text-sm text-muted-foreground">{h}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
