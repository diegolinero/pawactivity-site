const navItems = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Actividad', href: '#actividad' },
  { label: 'App', href: '#app' },
  { label: 'FAQ', href: '#faq' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/20 text-lg font-bold text-cyan-300">
            PA
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">PawActivity</span>
            <span className="block text-xs text-slate-400">Smart activity tracking for dogs</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:text-white sm:inline-flex"
          >
            Iniciar sesión
          </a>
          <a
            href="#cta"
            className="inline-flex rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Solicitar acceso
          </a>
        </div>
      </div>
    </header>
  );
}
