import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { trackInitiateCheckout, appendUtmParams } from "@/lib/tracking";

const FloatingCart = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handleScroll = () => {
      const kitsSection = document.getElementById("product-kits");
      if (kitsSection) {
        const rect = kitsSection.getBoundingClientRect();
        setVisible(rect.top < window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {!dismissed && visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
        >
          {/* Top glow line */}
          <div
            className="h-px w-full"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(var(--primary)/0.4), transparent)",
            }}
          />
          <div
            className="px-4 py-3.5 flex items-center justify-between gap-3 backdrop-blur-xl"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.92) 100%)",
              boxShadow: "0 -8px 32px -4px hsl(var(--primary)/0.3)",
            }}
          >
            <div className="flex items-center gap-3 text-primary-foreground">
              <div className="w-9 h-9 rounded-full bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-medium opacity-80">Kit Iniciante</span>
                <span className="text-base font-bold tracking-tight">R$ 62,90</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href={appendUtmParams("https://checkout.paniniiacesso.shop/checkout?product=beb5ce76-110e-11f1-b2a5-46da4690ad53")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInitiateCheckout("Kit Iniciante", "R$ 62,90")}
                className="bg-primary-foreground text-primary px-6 py-2.5 rounded-full text-sm font-bold tracking-wide hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
              >
                COMPRAR
              </a>
              <button
                onClick={() => setDismissed(true)}
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCart;
