import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import trophyImg from "@/assets/trophy.jpg";
import productImg from "@/assets/product-album.jpg";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.webp";

const images = [productImg, album1, album2];

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
    <section className="pt-12 pb-16 px-4" style={{ background: "var(--gradient-surface)" }}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.img
          src={trophyImg}
          alt="Troféu do campeonato"
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
          className="mt-10 rounded-2xl overflow-hidden bg-card p-3"
          style={{ boxShadow: "var(--shadow-card-hover)" }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex">
              {images.map((img, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 flex items-center justify-center p-2">
                  <img
                    src={img}
                    alt={`Produto ${i + 1}`}
                    className="w-full max-w-md mx-auto rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;