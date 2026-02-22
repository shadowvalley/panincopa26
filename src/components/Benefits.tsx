import { motion } from "framer-motion";
import { Percent, Truck, ShieldCheck, Package } from "lucide-react";

const benefits = [
  { icon: Percent, title: "Desconto de 47%", desc: "Exclusivo de pré-venda" },
  { icon: Truck, title: "Entrega prioritária", desc: "Receba antes do lançamento" },
  { icon: ShieldCheck, title: "Produto original", desc: "100% autêntico com selo" },
  { icon: Package, title: "Frete Grátis", desc: "Para todo o Brasil" },
];

const trustBadges = [
  { icon: "🔒", text: "Compra Segura" },
  { icon: "🛡️", text: "Dados Protegidos" },
  { icon: "✅", text: "Produto Original" },
];

const Benefits = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-2 tracking-tight">
          Por Que Comprar na Pré-Venda
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-12 max-w-lg mx-auto leading-relaxed">
          Preço exclusivo significativamente menor do que a compra avulsa na banca.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="bg-card rounded-2xl p-5 text-center border border-border hover:border-primary/20 transition-colors"
              style={{ boxShadow: "var(--shadow-card)" }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-semibold mb-1">{b.title}</p>
              <p className="text-[11px] text-muted-foreground leading-tight">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          {trustBadges.map((badge) => (
            <span key={badge.text} className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              <span>{badge.icon}</span> {badge.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;