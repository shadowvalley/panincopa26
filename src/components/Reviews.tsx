import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
];

const Reviews = () => {
  return (
    <section className="py-12 px-4 bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-display text-center mb-6">Avaliações</h3>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="text-center">
            <p className="text-5xl font-display text-foreground">4.9</p>
            <div className="flex gap-0.5 justify-center my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">(3.287 avaliações)</p>
          </div>

          <div className="flex-1 w-full space-y-2">
            {ratingBreakdown.map((r) => (
              <div key={r.stars} className="flex items-center gap-2 text-sm">
                <span className="w-6 text-right text-muted-foreground">{r.stars}★</span>
                <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gold"
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
                <span className="w-10 text-right text-muted-foreground text-xs">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="bg-card rounded-xl p-5"
              style={{ boxShadow: "var(--shadow-card)" }}
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-sm">{review.name}</span>
                <span className="text-xs text-accent font-semibold">✓ Verificado</span>
                <span className="text-xs text-muted-foreground ml-auto">{review.date}</span>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
