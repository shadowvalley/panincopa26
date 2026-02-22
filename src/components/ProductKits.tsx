import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import kitInicianteImg from "@/assets/kit-iniciante.jpeg";
import kitCampeaoImg from "@/assets/kit-campeao.jpeg";
import kitColecionadorImg from "@/assets/kit-colecionador.jpeg";

interface Kit {
  name: string;
  packs: number;
  stickers: number;
  originalPrice: string;
  price: string;
  discount: string;
  savings: string;
  badge?: string;
  highlight?: boolean;
  image: string;
}

const kits: Kit[] = [
  {
    name: "Kit Iniciante",
    packs: 30,
    stickers: 150,
    originalPrice: "R$ 95,61",
    price: "R$ 62,90",
    discount: "-38%",
    savings: "R$ 36,34",
    image: kitInicianteImg,
  },
  {
    name: "Kit Campeão",
    packs: 60,
    stickers: 300,
    originalPrice: "R$ 155,18",
    price: "R$ 87,90",
    discount: "-38%",
    savings: "R$ 58,97",
    badge: "MAIS VENDIDO",
    highlight: true,
    image: kitCampeaoImg,
  },
  {
    name: "Kit Colecionador",
    packs: 90,
    stickers: 450,
    originalPrice: "R$ 191,01",
    price: "R$ 102,90",
    discount: "-38%",
    savings: "R$ 72,59",
    badge: "MELHOR CUSTO",
    image: kitColecionadorImg,
  },
];

const KitCard = ({ kit, index }: { kit: Kit; index: number }) => (
  <motion.div
    className={`relative rounded-2xl p-6 transition-all duration-300 border ${
      kit.highlight
        ? "bg-card border-primary/30 shadow-xl scale-[1.03]"
        : "bg-card border-border hover:border-primary/20 hover:shadow-lg"
    }`}
    style={{ boxShadow: kit.highlight ? "var(--shadow-card-hover)" : "var(--shadow-card)" }}
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="absolute -top-3 -right-3 text-xs font-bold px-3 py-1.5 rounded-full text-destructive-foreground" style={{ background: "var(--gradient-urgency)" }}>
      {kit.discount}
    </div>

    {kit.badge && (
      <div className="text-center mb-3">
        <span className={`inline-block text-[11px] font-bold px-4 py-1.5 rounded-full tracking-wider ${
          kit.badge === "MAIS VENDIDO"
            ? "bg-primary text-primary-foreground"
            : "bg-accent text-accent-foreground"
        }`}>
          {kit.badge}
        </span>
      </div>
    )}

    <div className="overflow-hidden rounded-xl mb-5 mx-auto">
      <img
        src={kit.image}
        alt={kit.name}
        className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>

    <h3 className="text-xl font-display text-center mb-1.5 tracking-tight text-foreground">{kit.name}</h3>
    <p className="text-xs text-muted-foreground text-center mb-6 leading-relaxed">
      1 Álbum Capa Dura + <span className="font-semibold text-foreground">{kit.packs} Pacotes</span>
    </p>

    <div className="text-center mb-4 bg-muted/40 rounded-xl py-3 px-4">
      <p className="text-xs text-muted-foreground line-through mb-0.5">{kit.originalPrice}</p>
      <p className="text-3xl font-bold text-primary font-display tracking-tight">{kit.price}</p>
      <p className="text-[11px] text-muted-foreground mt-1">à vista no PIX</p>
    </div>


    <button
      className="w-full py-3.5 rounded-xl font-bold text-primary-foreground text-sm tracking-wide animate-pulse-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
      style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
    >
      GARANTIR MEU KIT
    </button>
  </motion.div>
);

const ProductKits = () => {
  return (
    <section id="product-kits" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-2 tracking-tight">
          Escolha Seu Kit
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto text-sm leading-relaxed">
          Quanto mais pacotes, mais chances de completar o álbum! Todos incluem álbum premium capa dura e frete grátis.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {kits.map((kit, i) => (
            <KitCard key={kit.name} kit={kit} index={i} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-accent font-semibold text-sm mt-8">
          <Truck className="w-4 h-4" />
          Frete Grátis para Todo Brasil
        </div>
      </div>
    </section>
  );
};

export default ProductKits;