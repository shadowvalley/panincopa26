import paniniLogo from "@/assets/panini-logo.jpeg";
import { Mail, ShieldCheck, Truck, CreditCard } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Faixa de selos */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <ShieldCheck className="w-5 h-5 opacity-80" strokeWidth={1.5} />
            <div>
              <p className="text-[12px] font-semibold">Compra Segura</p>
              <p className="text-[11px] opacity-60">Pagamento criptografado</p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Truck className="w-5 h-5 opacity-80" strokeWidth={1.5} />
            <div>
              <p className="text-[12px] font-semibold">Frete Grátis</p>
              <p className="text-[11px] opacity-60">Para todo o Brasil</p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <CreditCard className="w-5 h-5 opacity-80" strokeWidth={1.5} />
            <div>
              <p className="text-[12px] font-semibold">Pagamento via PIX</p>
              <p className="text-[11px] opacity-60">Aprovação imediata</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <img src={paniniLogo} alt="Panini" className="h-8 w-8 object-cover rounded-md" />
            <div className="leading-none">
              <p className="text-sm font-display font-bold">Panini</p>
              <p className="text-[10px] tracking-[0.18em] uppercase opacity-60 mt-0.5">Revendedor Oficial</p>
            </div>
          </div>
          <p className="text-[12px] opacity-60 leading-relaxed max-w-xs">
            Distribuidor autorizado de produtos colecionáveis Panini para a Copa do Mundo FIFA 2026.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase opacity-80 mb-3">Atendimento</p>
          <a href="mailto:suporte@panini.com.br" className="inline-flex items-center gap-2 text-[13px] opacity-80 hover:opacity-100 transition-opacity">
            <Mail className="w-3.5 h-3.5" />
            suporte@panini.com.br
          </a>
          <p className="text-[11px] opacity-50 mt-2">Seg. a Sex. — 9h às 18h</p>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase opacity-80 mb-3">Institucional</p>
          <ul className="space-y-1.5 text-[13px] opacity-70">
            <li className="hover:opacity-100 transition-opacity cursor-pointer">Política de Privacidade</li>
            <li className="hover:opacity-100 transition-opacity cursor-pointer">Termos de Uso</li>
            <li className="hover:opacity-100 transition-opacity cursor-pointer">Política de Reembolso</li>
          </ul>
        </div>
      </div>

      {/* Rodapé legal */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-5xl mx-auto px-4 py-5 text-center">
          <p className="text-[11px] opacity-50">
            © 2026 Panini Venda e Comércio S.A. — CNPJ 00.000.000/0001-00. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
