import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O álbum é original?",
    a: "Sim! Todos os álbuns vendidos em nossa loja são 100% originais, com selo de autenticidade e nota fiscal.",
  },
  {
    q: "Qual a diferença entre capa dura e capa brochura?",
    a: "A capa dura oferece maior durabilidade e acabamento premium, ideal para colecionadores que desejam preservar o álbum por muitos anos.",
  },
  {
    q: "Quantas figurinhas são necessárias para completar?",
    a: "O álbum completo possui 980 figurinhas, incluindo as edições especiais cromadas e holográficas.",
  },
  {
    q: "Quanto tempo demora a entrega?",
    a: "O prazo de entrega é de 2 a 6 dias úteis. O frete é grátis para todo o Brasil.",
  },
  {
    q: "Posso trocar figurinhas repetidas?",
    a: "Sim! Disponibilizamos um programa de troca de figurinhas repetidas. Entre em contato conosco para mais informações.",
  },
  {
    q: "A pré-venda é confiável?",
    a: "Absolutamente! Trabalhamos com pagamento seguro via PIX, com garantia de entrega ou seu dinheiro de volta.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-10 tracking-tight">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-2xl px-5 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <AccordionTrigger className="text-sm font-semibold hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;