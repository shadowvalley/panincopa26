import { motion } from "framer-motion";
import productImg from "@/assets/product-album.jpg";

interface Kit {
  name: string;
  packs: number;
  stickers: number;
  originalPrice: string;
  price: string;
  discount: string;
  savings: string;
  badge?: string;
  badgeColor?: string;
  highlight?: boolean;
}

const kits: Kit[] = [
  {
    name: "Kit Iniciante",
    packs: 30,
    stickers: 150,
    originalPrice: "R$ 95,61",
    price: "R$ 59,28",
    discount: "-38%",
    savings: "R$ 36,34",
  },
  {
    name: "Kit Campeão",
    packs: 60,
    stickers: 300,
    originalPrice: "R$ 155,18",
    price: "R$ 96,21",
    discount: "-38%",
    savings: "R$ 58,97",
    badge: "MAIS VENDIDO",
    highlight: true,
  },
  {
    name: "Kit Colecionador",
    packs: 90,
    stickers: 450,
    originalPrice: "R$ 191,01",
    price: "R$ 118,43",
    discount: "-38%",
    savings: "R$ 72,59",
    badge: "MELHOR CUSTO",
  },
];

const KitCard = ({ kit, index }: { kit: Kit; index: number }) => (
  <motion.div
    className={`relative rounded-2xl p-6 transition-all duration-300 ${
      kit.highlight
        ? "bg-card ring-2 ring-primary shadow-lg scale-[1.02]"
        : "bg-card shadow-md hover:shadow-lg"
    }`}
    style={{ boxShadow: "var(--shadow-card)" }}
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    {/* Discount badge */}
    <div className="absolute -top-3 -right-3 bg-urgency text-urgency-foreground text-xs font-bold px-3 py-1.5 rounded-full">
      {kit.discount}
    </div>

    {kit.badge && (
      <div className={`text-center mb-3`}>
        <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
          kit.badge === "MAIS VENDIDO" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
        }`}>
          {kit.badge}
        </span>
      </div>
    )}

    <img
      src={productImg}
      alt={kit.name}
      className="w-32 h-32 mx-auto object-cover rounded-xl mb-4"
    />

    <h3 className="text-xl font-display text-center mb-1">{kit.name}</h3>
    <p className="text-sm text-muted-foreground text-center mb-4">
      1 Álbum Capa Dura + {kit.packs} Pacotes
    </p>

    <div className="text-center mb-4">
      <p className="text-sm text-muted-foreground line-through">{kit.originalPrice}</p>
      <p className="text-3xl font-bold text-foreground font-display">{kit.price}</p>
      <p className="text-xs text-muted-foreground">via PIX</p>
    </div>

    <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground mb-4">
      <span>{kit.stickers} figurinhas</span>
      <span className="text-accent font-semibold">Frete Grátis</span>
    </div>

    <p className="text-xs text-center text-accent font-semibold mb-4">
      Economia de {kit.savings}
    </p>

    <button
      className="w-full py-3.5 rounded-xl font-bold text-primary-foreground text-sm tracking-wide animate-pulse-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
      style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
    >
      GARANTIR MEU KIT AGORA
    </button>
  </motion.div>
);

const ProductKits = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-3">
          Kits Disponíveis — Álbum Copa 2026
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
          Quanto mais pacotes, mais chances de completar o álbum! Todos incluem álbum premium capa dura, 
          pacotes de figurinhas e frete grátis para todo o Brasil.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {kits.map((kit, i) => (
            <KitCard key={kit.name} kit={kit} index={i} />
          ))}
        </div>

        <p className="text-center text-accent font-semibold text-sm mt-6">
          🚚 Frete Grátis para Todo Brasil
        </p>
      </div>
    </section>
  );
};

export default ProductKits;
