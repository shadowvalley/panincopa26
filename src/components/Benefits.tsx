import { Percent, Truck, ShieldCheck, Package, Lock, Shield, BadgeCheck, CheckCircle2 } from "lucide-react";

const benefits = [
  { icon: Percent, title: "Desconto de 47%", desc: "Exclusivo de pré-venda", accent: true },
  { icon: Truck, title: "Entrega prioritária", desc: "Receba antes do lançamento", accent: false },
  { icon: ShieldCheck, title: "Produto original", desc: "100% autêntico com selo", accent: false },
  { icon: Package, title: "Frete Grátis", desc: "Para todo o Brasil", accent: false },
];

const trustBadges = [
  { icon: Lock, text: "Compra Segura" },
  { icon: Shield, text: "Dados Protegidos" },
  { icon: BadgeCheck, text: "Produto Original" },
];

const Benefits = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Vantagens exclusivas
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-center mb-2 tracking-tight">
            Por Que Comprar na Pré-Venda
          </h2>
          <p className="text-center text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
            Preço exclusivo significativamente menor do que a compra avulsa na banca.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`relative rounded-2xl p-5 text-center border transition-all duration-200 group ${
                b.accent
                  ? "bg-primary/[0.04] border-primary/20 hover:border-primary/40"
                  : "bg-card border-border hover:border-primary/20"
              }`}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {b.accent && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-widest uppercase bg-primary text-primary-foreground px-3 py-0.5 rounded-full">
                  Destaque
                </span>
              )}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110 ${
                b.accent ? "bg-primary/15" : "bg-primary/10"
              }`}>
                <b.icon className={`w-5 h-5 ${b.accent ? "text-primary" : "text-primary"}`} />
              </div>
              <p className="text-sm font-bold mb-0.5 tracking-tight">{b.title}</p>
              <p className="text-[11px] text-muted-foreground leading-tight">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card/50 px-6 py-4" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {trustBadges.map((badge) => (
              <span key={badge.text} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <badge.icon className="w-3.5 h-3.5 text-primary" />
                </span>
                {badge.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
