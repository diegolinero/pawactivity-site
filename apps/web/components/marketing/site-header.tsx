const navItems = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Producto', href: '#producto' },
  { label: 'Actividad', href: '#actividad' },
  { label: 'FAQ', href: '#faq' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3 text-slate-950">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
            PA
          </span>
          <span>
            <span className="block text-lg font-semibold tracking-tight">PawActivity</span>
            <span className="block text-xs text-slate-500">Actividad inteligente para perros</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950 sm:inline-flex"
          >
            Iniciar sesión
          </a>
          <a
            href="#cta"
            className="inline-flex rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Solicitar demo
          </a>
        </div>
      </div>
    </header>
  );
}