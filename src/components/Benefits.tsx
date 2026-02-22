import { motion } from "framer-motion";
import { Percent, Truck, ShieldCheck, Package } from "lucide-react";

const benefits = [
  { icon: Percent, title: "Desconto de 47% exclusivo", desc: "Desconto exclusivo de pré-venda" },
  { icon: Truck, title: "Entrega prioritária", desc: "Receba antes do lançamento oficial" },
  { icon: ShieldCheck, title: "Produto original", desc: "Álbum oficial 100% autêntico" },
  { icon: Package, title: "Frete Grátis", desc: "Entrega grátis para todo o Brasil" },
];

const trustBadges = [
  { icon: "🔒", text: "Compra 100% Segura" },
  { icon: "🛡️", text: "Dados Protegidos" },
  { icon: "✅", text: "Produto Original" },
];

const Benefits = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-3">
          Por Que Comprar na Pré-Venda
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-10 max-w-xl mx-auto">
          O preço de pré-venda para o kit completo é significativamente menor do que a compra avulsa na banca.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="bg-card rounded-xl p-5 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <b.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <p className="text-sm font-semibold mb-1">{b.title}</p>
              <p className="text-xs text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          {trustBadges.map((badge) => (
            <span key={badge.text} className="text-sm font-semibold text-muted-foreground">
              {badge.icon} {badge.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
