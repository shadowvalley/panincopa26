import paniniLogo from "@/assets/panini-logo.jpeg";
import { ShieldCheck } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="w-full border-b border-border/60 bg-card/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img
            src={paniniLogo}
            alt="Panini"
            className="h-7 w-7 object-cover rounded-md"
          />
          <div className="leading-none">
            <p className="text-[13px] font-display font-bold tracking-tight text-foreground">Panini</p>
            <p className="text-[9px] tracking-[0.18em] uppercase text-muted-foreground mt-0.5">Revendedor Oficial</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
          <ShieldCheck className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
          Compra 100% Segura
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
