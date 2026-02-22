import paniniLogo from "@/assets/panini-logo.jpeg";

const SiteFooter = () => {
  return (
    <footer className="py-10 px-4 bg-foreground text-primary-foreground">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <img src={paniniLogo} alt="Logo do revendedor" className="h-10 mx-auto object-contain rounded opacity-90" />
        <p className="text-sm opacity-60 font-medium">
          © 2026 Loja de Colecionáveis. Todos os direitos reservados.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs opacity-40">
          <span className="hover:opacity-70 transition-opacity cursor-pointer">Privacidade</span>
          <span>·</span>
          <span className="hover:opacity-70 transition-opacity cursor-pointer">Termos</span>
          <span>·</span>
          <span className="hover:opacity-70 transition-opacity cursor-pointer">Reembolso</span>
        </div>
        <p className="text-xs opacity-30">contato@sualojaaqui.com</p>
      </div>
    </footer>
  );
};

export default SiteFooter;