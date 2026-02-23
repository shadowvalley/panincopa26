import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
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
      {/* Subtle geometric background details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right circle */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-primary/[0.06]" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-primary/[0.04]" />
        {/* Bottom-left circle */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-primary/[0.05]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Diagonal accent line */}
        <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-primary/10 to-transparent" />
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <motion.img
          src={trophyImg}
          alt="Troféu do campeonato"
          loading="eager"
          decoding="async"
          className="w-24 mx-auto object-contain mb-6 drop-shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
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

          <p className="text-muted-foreground mb-2 text-[15px] leading-relaxed">
            O maior evento do futebol mundial está chegando!
          </p>
          <p className="text-muted-foreground mb-5 text-[15px] leading-relaxed">
            Garanta seu álbum de capa dura com 30, 60 ou 90 pacotes de figurinhas inclusos.
          </p>
          <p className="text-sm font-semibold text-foreground/80 bg-card inline-block px-4 py-2 rounded-lg" style={{ boxShadow: "var(--shadow-card)" }}>
            Apenas 5.000 unidades disponíveis para o Brasil!
          </p>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          className="mt-10 rounded-2xl overflow-hidden bg-card p-1 relative"
          style={{
            background: "linear-gradient(135deg, #c8102e 0%, #ff4d4d 25%, #ffd700 50%, #ff4d4d 75%, #c8102e 100%)",
            backgroundSize: "200% 200%",
            animation: "borderShimmer 4s ease infinite",
            boxShadow: "0 0 20px rgba(200, 16, 46, 0.25), var(--shadow-card-hover)",
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;