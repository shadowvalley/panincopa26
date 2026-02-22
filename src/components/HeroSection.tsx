import { motion } from "framer-motion";
import trophyImg from "@/assets/trophy.jpg";
import productImg from "@/assets/product-album.jpg";

const HeroSection = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-2xl mx-auto text-center">

        <motion.img
          src={trophyImg}
          alt="Troféu do campeonato"
          className="w-28 mx-auto object-contain mb-4 shadow-lg rounded-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">
          Álbum Oficial de Coleção
        </p>
        <p className="text-xs text-muted-foreground mb-4">
          EUA • Canadá • México
        </p>

        <h1 className="text-4xl md:text-5xl font-display leading-tight mb-3">
          Álbum Colecionável Copa do Mundo 2026
        </h1>

        <p className="text-lg font-semibold text-primary mb-2">
          Pré-Venda Exclusiva
        </p>
        <p className="text-muted-foreground mb-2">
          O maior evento do futebol mundial está chegando!
        </p>
        <p className="text-muted-foreground mb-4">
          Garanta seu álbum de capa dura com 30, 60 ou 90 pacotes de figurinhas inclusos.
        </p>
        <p className="text-sm font-semibold text-primary">
          Apenas 5.000 unidades disponíveis para o Brasil!
        </p>

        <motion.div
          className="mt-8 rounded-2xl overflow-hidden shadow-lg bg-card p-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={productImg}
            alt="Álbum de figurinhas colecionável"
            className="w-full max-w-md mx-auto rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
