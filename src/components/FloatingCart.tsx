import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const FloatingCart = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      const kitsSection = document.getElementById("product-kits");
      if (kitsSection) {
        const rect = kitsSection.getBoundingClientRect();
        setVisible(rect.top < window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed || !visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between gap-3 backdrop-blur-md"
        style={{ background: "var(--gradient-cta)", boxShadow: "0 -2px 24px hsla(220, 75%, 50%, 0.25)" }}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="text-primary-foreground text-sm">
          <span className="font-medium opacity-90">Kit Iniciante</span>
          <span className="ml-2 font-bold">R$ 59,28</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://checkout.paniniiacesso.shop/checkout?product=beb5ce76-110e-11f1-b2a5-46da4690ad53"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground text-primary px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
          >
            COMPRAR
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingCart;
