const footerGroups = [
  {
    title: 'Producto',
    links: [
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Producto', href: '#producto' },
      { label: 'Actividad', href: '#actividad' },
    ],
  },
  {
    title: 'Acceso',
    links: [
      { label: 'Iniciar sesión', href: '/login' },
      { label: 'Dashboard', href: '/dashboard' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'info@pawactivity.com', href: 'mailto:info@pawactivity.com' },
      { label: 'Solicitar información', href: '#cta' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                PA
              </span>
              <div>
                <p className="text-lg font-semibold tracking-tight text-slate-950">PawActivity</p>
                <p className="text-sm text-slate-500">Actividad inteligente para perros</p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              PawActivity conecta dispositivo, app y plataforma web para convertir movimiento en datos útiles, claros y accionables.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold text-slate-950">{group.title}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-orange-600">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 PawActivity. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}