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
    <section className="pt-14 pb-20 px-4 relative overflow-hidden" style={{ background: "var(--gradient-surface)" }}>
      {/* Sutil padrão de pontos para profundidade */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative">
        <img
          src={trophyImg}
          alt="Troféu da Copa do Mundo"
          loading="eager"
          decoding="async"
          className="w-20 mx-auto object-contain mb-6 drop-shadow-md"
        />

        <div>
          <span className="eyebrow mb-2">FIFA World Cup 26™ • Edição Oficial</span>
          <p className="text-[11px] text-muted-foreground tracking-[0.18em] uppercase mb-6">
            EUA  •  Canadá  •  México
          </p>

          <h1 className="text-[34px] md:text-5xl font-display leading-[1.05] mb-5 tracking-tight text-foreground">
            Álbum de Figurinhas
            <br />
            <span className="text-gradient-primary">Copa do Mundo 2026</span>
          </h1>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/[0.08] text-primary text-[12px] font-semibold mb-5 border border-primary/15">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Pré-Venda Exclusiva
          </div>

          <p className="text-foreground/75 mb-5 text-[15px] leading-relaxed max-w-md mx-auto">
            Garanta o álbum oficial Panini com <span className="font-semibold text-foreground">30, 50 ou 80 pacotes</span> de figurinhas inclusos. Frete grátis para todo o Brasil.
          </p>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
            </span>
            <span className="text-[11px] font-semibold text-foreground tracking-tight whitespace-nowrap">
              Apenas <span className="text-primary font-bold">5.000</span> unidades para o Brasil
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
