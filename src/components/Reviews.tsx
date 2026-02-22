import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import reviewerGabriel from "@/assets/reviewer-gabriel.jpeg";
import reviewGabrielPhoto from "@/assets/review-gabriel-photo.jpeg";

const ratingBreakdown = [
  { stars: 5, pct: 86 },
  { stars: 4, pct: 11 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 0.6 },
  { stars: 1, pct: 0.4 },
];

const reviews = [
  { name: "Gabriel Nunes", date: "14/02/2026", text: "Comprei o kit completo pra colecionar com meu filho de 9 anos. Ele ficou maluco quando viu as figurinhas holográficas dos jogadores do Brasil. A qualidade do álbum é impressionante, as páginas são grossas e bem coloridas. Já estamos com quase 60% completo, trocando figurinhas repetidas na escola dele.", photo: reviewerGabriel as string },
  { name: "Vanessa Cardoso", date: "10/02/2026", text: "Presenteei meu marido no aniversário e ele amou. O kit veio muito bem embalado, com tudo lacrado e original. A gente não colecionava desde a Copa de 2014, e essa edição está muito superior em qualidade. A entrega foi rápida, chegou em 2 dias aqui em BH.", photo: reviewGabrielPhoto as string },
  { name: "Diego Martins", date: "07/02/2026", text: "Já colecionei todos os álbuns de Copa desde 2006 e posso dizer com certeza que esse é o melhor de todos. O selo de autenticidade Panini vem impresso no álbum, o que dá muita confiança. As figurinhas especiais têm um brilho diferente, muito bonitas. Recomendo sem pensar duas vezes." },
  { name: "Renata Silva", date: "03/02/2026", text: "Minha família inteira entrou na brincadeira! Compramos 3 kits e estamos fazendo um campeonato pra ver quem completa primeiro. As crianças adoram as figurinhas dos estádios novos. Só achei que podia vir mais pacotinhos no kit básico, mas no geral valeu muito a pena." },
  { name: "Lucas Ferreira", date: "28/01/2026", text: "Pesquisei bastante antes de comprar e aqui foi o melhor preço que encontrei pro kit colecionador. Chegou antes do prazo previsto e tudo certinho. O álbum capa dura tem um acabamento premium que faz diferença. Já encomendei mais pacotinhos avulsos pra completar." },
  { name: "Amanda Oliveira", date: "25/01/2026", text: "Sou professora e comprei pra usar como projeto na escola com os alunos. Eles ficaram super engajados aprendendo sobre os países e as seleções enquanto colam as figurinhas. A qualidade é excelente e o álbum aguenta bem o manuseio das crianças. Iniciativa incrível!" },
  { name: "Marcos Santos", date: "20/01/2026", text: "Terceiro álbum Panini que compro e a evolução é nítida. As figurinhas têm muito mais detalhes, as fotos dos jogadores são em alta resolução. O álbum dessa edição com 48 seleções é enorme e muito bem organizado. Perfeito pra quem leva coleção a sério." },
  { name: "Patricia Costa", date: "15/01/2026", text: "Comprei de presente pro meu sobrinho que mora em Recife. Mandei entregar direto lá e chegou em 4 dias, tudo perfeito. Ele me mandou áudio agradecendo super feliz. A embalagem protegeu bem o álbum e os pacotinhos vieram todos lacrados. Ótima experiência!" },
  { name: "Carlos Almeida", date: "10/01/2026", text: "O frete grátis foi decisivo na minha compra. Moro em Manaus e normalmente pago caro em frete, mas aqui chegou sem custo nenhum e em tempo razoável. O produto é original, sem nenhum defeito. Já indiquei pros colegas do trabalho e dois deles já compraram também." },
  { name: "Fernanda Pereira", date: "05/01/2026", text: "A capa dura faz toda a diferença pra quem quer guardar o álbum como recordação. As páginas são resistentes e não amassam fácil. Meu marido e eu estamos colecionando juntos e virou nosso programa de todo domingo à tarde. Melhor compra que fiz nos últimos meses." },
];

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 px-4 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-body font-bold text-center mb-8 tracking-tight">Avaliações</h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-10 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-5xl font-body font-bold text-foreground tracking-tight">4.9</p>
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

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {reviews.map((review, i) => (
                <motion.div
                  key={review.name}
                  className="bg-card rounded-2xl p-5 border border-border flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0"
                  style={{ boxShadow: "var(--shadow-card)" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <span className="font-body font-semibold text-sm">{review.name}</span>
                    <span className="text-[11px] text-accent font-semibold">✓ Verificado</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="text-[11px] text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-5">{review.text}</p>
                  {"photo" in review && review.photo && (
                    <img src={review.photo as string} alt="Foto anexada" className="mt-3 rounded-xl w-full h-40 object-cover border border-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center shadow-md disabled:opacity-30 transition-opacity hover:bg-muted"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center shadow-md disabled:opacity-30 transition-opacity hover:bg-muted"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
