import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const FloatingCart = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between gap-3"
        style={{ background: "var(--gradient-cta)", boxShadow: "0 -4px 20px hsla(15, 90%, 55%, 0.3)" }}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <div className="text-primary-foreground text-sm">
          <span className="font-semibold">Kit Iniciante</span>
          <span className="ml-2 font-bold">R$ 59,28</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="bg-primary-foreground text-primary px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
          >
            COMPRAR
          </button>
          <button
            onClick={() => setVisible(false)}
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingCart;
