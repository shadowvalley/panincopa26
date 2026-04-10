import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import trophyImg from "@/assets/trophy.png";
import productImg from "@/assets/product-album.jpg";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.webp";

const images = [album2, album1, productImg];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="pt-12 pb-16 px-4 relative overflow-hidden" style={{ background: "var(--gradient-surface)" }}>
      {/* Football-themed background details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-primary/[0.08]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary/[0.08]" />
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full border-2 border-primary/[0.12]" />
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full border-2 border-primary/[0.12]" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full border-2 border-primary/[0.10]" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full border-2 border-primary/[0.10]" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-primary/[0.06]" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-primary/[0.06]" />
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 h-24 border-2 border-t-0 border-primary/[0.07] rounded-b-xl" />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-24 border-2 border-b-0 border-primary/[0.07] rounded-t-xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1.2px, transparent 1.2px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <img
          src={trophyImg}
          alt="Troféu do campeonato"
          loading="eager"
          decoding="async"
          className="w-24 mx-auto object-contain mb-6 drop-shadow-xl"
        />

        <div>
          <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-1">
            Álbum Oficial de Coleção
          </p>
          <p className="text-xs text-muted-foreground mb-6">
            EUA • Canadá • México
          </p>

          <h1 className="text-4xl md:text-5xl font-display leading-[1.1] mb-4 tracking-tight">
            Álbum Colecionável
            <br />
            <span className="text-gradient-primary">Copa do Mundo 2026</span>
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Pré-Venda Exclusiva
          </div>

          <p className="text-foreground/80 mb-5 text-[15px] leading-relaxed max-w-sm">
            Reviva a emoção da Copa com o álbum oficial capa dura + até <span className="font-semibold text-primary">90 pacotes</span> de figurinhas. Edição limitada com frete grátis para todo o Brasil.
          </p>
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/10" style={{ boxShadow: "var(--shadow-card)" }}>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
            </span>
            <span className="text-sm font-semibold text-foreground tracking-tight">
              Apenas <span className="text-primary font-bold">5.000</span> unidades disponíveis para o Brasil
            </span>
          </div>
        </div>

        {/* Image Carousel */}
        <div
          className="mt-10 rounded-2xl overflow-hidden bg-card p-1 relative"
          style={{
            background: "linear-gradient(135deg, #c8102e 0%, #ff4d4d 25%, #ffd700 50%, #ff4d4d 75%, #c8102e 100%)",
            backgroundSize: "200% 200%",
            animation: "borderShimmer 4s ease infinite",
            boxShadow: "0 0 20px rgba(200, 16, 46, 0.25), var(--shadow-card-hover)",
          }}
        >
          <div className="bg-card rounded-xl p-2">
          <div className="relative">
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
              <div className="flex">
                {images.map((img, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0 flex items-center justify-center p-2">
                    <img
                      src={img}
                      alt={`Produto ${i + 1}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full max-w-md mx-auto rounded-xl object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center shadow-md transition-opacity hover:bg-card"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center shadow-md transition-opacity hover:bg-card"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-3 justify-center">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  i === activeIndex
                    ? "border-primary shadow-md scale-105"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={img}
                  alt={`Miniatura ${i + 1}`}
                  className="w-14 h-14 object-cover"
                />
              </button>
            ))}
          </div>

          {/* Dots */}
          <div className="flex gap-1.5 justify-center mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
