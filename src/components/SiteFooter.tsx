const SiteFooter = () => {
  return (
    <footer className="py-8 px-4 bg-foreground text-primary-foreground">
      <div className="max-w-2xl mx-auto text-center space-y-3">
        <p className="text-sm opacity-70">
          © 2026 Loja de Colecionáveis. Todos os direitos reservados.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs opacity-50">
          <span>Política de Privacidade</span>
          <span>|</span>
          <span>Termos de Uso</span>
          <span>|</span>
          <span>Política de Reembolso</span>
        </div>
        <p className="text-xs opacity-40">contato@sualojaaqui.com</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
