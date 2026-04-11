import { Truck } from "lucide-react";
import { trackInitiateCheckout, appendUtmParams } from "@/lib/tracking";
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
  checkoutUrl: string;
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
    checkoutUrl: "https://paninnipagamento.shop",
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
    checkoutUrl: "https://paninnipagamento.shop/checkout?product=d1b65275-110e-11f1-b2a5-46da4690ad53",
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
    checkoutUrl: "https://paninnipagamento.shop/checkout?product=e703d344-110e-11f1-b2a5-46da4690ad53",
  },
];

const KitCard = ({ kit }: { kit: Kit; index: number }) => (
  <div
    className={`relative rounded-2xl p-5 transition-all duration-300 border ${
      kit.highlight
        ? "bg-card border-primary/30 shadow-xl scale-[1.03]"
        : "bg-card border-border hover:border-primary/20 hover:shadow-lg"
    }`}
    style={{ boxShadow: kit.highlight ? "var(--shadow-card-hover)" : "var(--shadow-card)" }}
  >
    {kit.badge && (
      <div className="text-center mb-3">
        <span className={`inline-block text-[10px] font-semibold px-3 py-1 rounded-full tracking-widest uppercase ${
          kit.badge === "MAIS VENDIDO"
            ? "bg-primary text-primary-foreground"
            : "bg-accent text-accent-foreground"
        }`}>
          {kit.badge}
        </span>
      </div>
    )}

    <div className="overflow-hidden rounded-lg mb-4 mx-auto">
      <img
        src={kit.image}
        alt={kit.name}
        loading="lazy"
        className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>

    <h3 className="text-base font-display font-semibold text-center mb-1 tracking-tight text-foreground">{kit.name}</h3>
    <p className="text-[11px] font-body text-muted-foreground text-center mb-4 tracking-wide">
      Álbum Capa Dura + <span className="font-medium text-foreground">{kit.packs} Pacotes</span> ({kit.stickers} figurinhas)
    </p>

    <div
      className="text-center mb-4 rounded-xl py-4 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary)/0.04) 0%, hsl(var(--primary)/0.08) 100%)",
        border: "1px solid hsl(var(--primary)/0.12)",
      }}
    >
      <div className="flex items-center justify-center gap-2.5 mb-1.5">
        <span className="text-xs font-body text-muted-foreground line-through decoration-destructive/60">{kit.originalPrice}</span>
        <span className="text-[10px] font-bold text-primary-foreground bg-primary px-2 py-0.5 rounded-full tracking-wide">{kit.discount}</span>
      </div>
      <p className="text-3xl font-bold text-primary font-display tracking-tighter leading-none">{kit.price}</p>
      <p className="text-[11px] font-medium text-muted-foreground mt-1.5 tracking-wide">à vista no PIX</p>
    </div>

    <p className="text-[10px] text-center text-muted-foreground mb-3">Economia de <span className="font-semibold text-foreground">{kit.savings}</span></p>

    <a
      href={kit.checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackInitiateCheckout(kit.name, kit.price)}
      className="block w-full py-3 rounded-lg font-semibold text-primary-foreground text-sm tracking-wide text-center animate-pulse-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
      style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
    >
      Garantir Meu Kit
    </a>
  </div>
);

const ProductKits = () => {
  return (
    <section id="product-kits" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-2 tracking-tight">
          Escolha Seu Kit
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto text-sm leading-relaxed">
          Quanto mais pacotes, mais chances de completar o álbum! Todos incluem álbum premium capa dura.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {kits.map((kit, i) => (
            <KitCard key={kit.name} kit={kit} index={i} />
          ))}
        </div>

        <div className="mt-10 bg-muted/50 rounded-2xl p-6 text-center border border-border">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Truck className="w-6 h-6 text-primary" />
            <span className="text-lg md:text-xl font-display font-bold tracking-tight text-foreground">Frete Grátis para Todo o Brasil</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Enviamos para todas as capitais e regiões do país com rastreamento completo. Receba seu kit com segurança e sem custo adicional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductKits;
