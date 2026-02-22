import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";

const ratingBreakdown = [
  { stars: 5, pct: 86 },
  { stars: 4, pct: 11 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 0.6 },
  { stars: 1, pct: 0.4 },
];

const reviews = [
  { name: "G. Nunes", date: "14/02/2026", text: "Álbum incrível, figurinhas de altíssima qualidade. Entrega super rápida!" },
  { name: "V. Cardoso", date: "10/02/2026", text: "Kit completo e muito bem embalado. Ideal para colecionar com a família." },
  { name: "D. Martins", date: "07/02/2026", text: "Produto original com selo de autenticidade. Recomendo demais!" },
  { name: "R. Silva", date: "03/02/2026", text: "Meu filho adorou! As figurinhas holográficas são lindas. Já estamos quase completando." },
  { name: "L. Ferreira", date: "28/01/2026", text: "Melhor custo-benefício que encontrei. Chegou antes do prazo, muito satisfeito!" },
  { name: "A. Oliveira", date: "25/01/2026", text: "Qualidade premium, embalagem impecável. Comprei o kit colecionador e valeu cada centavo." },
  { name: "M. Santos", date: "20/01/2026", text: "Já é meu terceiro álbum Panini. A qualidade só melhora a cada edição!" },
  { name: "P. Costa", date: "15/01/2026", text: "Presente perfeito para meu sobrinho. Ele ficou muito feliz com as figurinhas especiais." },
  { name: "C. Almeida", date: "10/01/2026", text: "Frete grátis e entrega em 3 dias. Experiência de compra excelente!" },
  { name: "F. Pereira", date: "05/01/2026", text: "Álbum capa dura de ótima qualidade. As páginas são resistentes e bem ilustradas." },
];

const INITIAL_COUNT = 5;

const Reviews = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, INITIAL_COUNT);

  return (
    <section className="py-16 px-4 bg-muted/40">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display text-center mb-8 tracking-tight">Avaliações</h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="text-center">
            <p className="text-5xl font-display text-foreground tracking-tight">4.9</p>
            <div className="flex gap-0.5 justify-center my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">(3.287 avaliações)</p>
          </div>

          <div className="flex-1 w-full space-y-2">
            {ratingBreakdown.map((r) => (
              <div key={r.stars} className="flex items-center gap-2 text-sm">
                <span className="w-6 text-right text-muted-foreground text-xs">{r.stars}★</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gold transition-all duration-700"
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
                <span className="w-10 text-right text-muted-foreground text-[11px]">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {visibleReviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="bg-card rounded-2xl p-5 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  {review.name.charAt(0)}
                </div>
                <span className="font-semibold text-sm">{review.name}</span>
                <span className="text-[11px] text-accent font-semibold">✓ Verificado</span>
                <span className="text-[11px] text-muted-foreground ml-auto">{review.date}</span>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>

        {!showAll && reviews.length > INITIAL_COUNT && (
          <button
            onClick={() => setShowAll(true)}
            className="mx-auto mt-6 flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Ver mais avaliações
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Reviews;
