import Link from 'next/link';

function ContactForm() {
  return (
    <form className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-zinc-700">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-500"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-500"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-zinc-700">
          ¿Qué necesitas entender sobre la actividad de tus perros?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-500"
          placeholder="Cuéntanos tu caso..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700"
      >
        Solicitar información
      </button>
    </form>
  );
}

export default function HomePage() {
  return (
    <main className="bg-zinc-50 text-zinc-900">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-700">
              PawActivity Platform
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              Entiende realmente la actividad y el comportamiento de tu perro
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-zinc-700">
              PawActivity transforma movimiento en información útil para interpretar rutina, detectar cambios y tomar
              decisiones con contexto diario.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contacto"
                className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
              >
                Solicitar información
              </Link>
              <Link
                href="#posicionamiento"
                className="rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
              >
                Conocer enfoque
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Lo que obtienes</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li className="rounded-lg bg-zinc-100 p-3">Visión clara de la rutina diaria y semanal.</li>
              <li className="rounded-lg bg-zinc-100 p-3">Identificación temprana de cambios de comportamiento.</li>
              <li className="rounded-lg bg-zinc-100 p-3">Lectura accionable del equilibrio actividad/reposo.</li>
              <li className="rounded-lg bg-zinc-100 p-3">Seguimiento continuo en una plataforma única.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950">El problema no es la falta de datos</h2>
          <p className="mt-4 max-w-3xl text-zinc-700">
            Hoy existen dispositivos que registran actividad, pero pocas soluciones convierten esa señal en comprensión.
            Cuando los datos no se interpretan, los cambios pasan desapercibidos y las decisiones llegan tarde.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              'Hay métricas, pero no una explicación clara de lo que significan en la rutina real.',
              'Detectar cambios graduales de comportamiento sigue siendo difícil sin continuidad.',
              'La actividad diaria se mira por fragmentos, sin contexto suficiente para actuar con criterio.'
            ].map((text) => (
              <article key={text} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-sm leading-relaxed text-zinc-700">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="posicionamiento" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-950">No somos un GPS, y eso es intencional</h2>
        <p className="mt-4 max-w-3xl text-zinc-700">
          La ubicación ya está resuelta por múltiples tecnologías. PawActivity no compite por mostrar dónde está el
          perro: compite por explicar cómo está, cómo evoluciona su rutina y qué cambios requieren atención.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-zinc-900">Trackers tradicionales</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              <li>• Ubicación y alertas como eje principal.</li>
              <li>• Métricas aisladas sin interpretación profunda.</li>
              <li>• Enfoque reactivo frente a eventos puntuales.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-900 p-6 text-zinc-100">
            <h3 className="text-lg font-semibold">PawActivity</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-100/90">
              <li>• Interpretación de actividad orientada a comportamiento.</li>
              <li>• Seguimiento continuo de rutina y variaciones.</li>
              <li>• Contexto diario para decisiones más precisas.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950">Cómo funciona</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Sensor',
                text: 'Captura movimiento continuo en el día a día, sin fricción para el perro ni para el dueño.'
              },
              {
                title: 'Detección',
                text: 'Procesa patrones de actividad para distinguir rutina estable y variaciones relevantes.'
              },
              {
                title: 'Sync',
                text: 'Sincroniza datos de forma constante para mantener una lectura actualizada en la plataforma.'
              },
              {
                title: 'Plataforma',
                text: 'Convierte señal en claridad: tendencias, cambios y contexto para entender comportamiento.'
              }
            ].map((step) => (
              <article key={step.title} className="rounded-xl border border-zinc-200 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950">Resultados que sí importan</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              'Comprensión real de la rutina diaria y semanal.',
              'Detección de cambios de comportamiento con más anticipación.',
              'Lectura clara del equilibrio entre actividad y reposo.',
              'Contexto para diferenciar variaciones normales de señales de alerta.'
            ].map((item) => (
              <article key={item} className="rounded-xl border border-zinc-200 bg-white p-5">
                <p className="text-sm leading-relaxed text-zinc-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-950">Para quién es</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-zinc-900">Dueños comprometidos</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Personas que quieren entender la rutina real de su perro y actuar con información, no con suposiciones.
            </p>
          </article>
          <article className="rounded-xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-zinc-900">Entrenadores</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Profesionales que necesitan seguimiento continuo para ajustar planes de trabajo y evolución conductual.
            </p>
          </article>
          <article className="rounded-xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-zinc-900">Uso profesional y validación</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Equipos que requieren datos consistentes y comprensibles para respaldar decisiones con criterio técnico.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950">PawActivity vs trackers tradicionales</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-b border-zinc-200 bg-zinc-100 p-5 text-sm font-semibold uppercase tracking-wide text-zinc-600 md:border-b-0 md:border-r">
                Trackers tradicionales
              </div>
              <div className="bg-zinc-900 p-5 text-sm font-semibold uppercase tracking-wide text-zinc-100">PawActivity</div>
            </div>
            {[
              ['Solo ubicación y alertas.', 'Comprensión de actividad y comportamiento.'],
              ['Métricas básicas sin contexto.', 'Datos interpretados para decisiones concretas.'],
              ['Visión puntual del estado.', 'Seguimiento continuo de rutina y cambios.'],
              ['Respuesta reactiva.', 'Lectura preventiva con señales tempranas.']
            ].map(([left, right]) => (
              <div key={left} className="grid grid-cols-1 border-t border-zinc-200 md:grid-cols-2">
                <div className="bg-white p-5 text-sm text-zinc-700 md:border-r md:border-zinc-200">{left}</div>
                <div className="bg-zinc-50 p-5 text-sm font-medium text-zinc-900">{right}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950">Producto real, tecnología concreta</h2>
          <p className="mt-4 max-w-3xl text-zinc-700">
            PawActivity integra hardware y plataforma en una solución lista para operación continua. El dispositivo,
            el collar y la electrónica interna están diseñados para sostener captura confiable de actividad en uso real.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { name: 'device-module', description: 'Módulo de captura diseñado para continuidad y precisión de señal.' },
              { name: 'collar-product', description: 'Integración física para uso diario, estable y cómoda.' },
              { name: 'device-closeup', description: 'Detalle de construcción orientado a fiabilidad operativa.' }
            ].map((asset) => (
              <article key={asset.name} className="rounded-xl border border-zinc-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{asset.name}</p>
                <p className="mt-3 text-sm text-zinc-700">{asset.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950">¿Quieres implementar PawActivity?</h2>
            <p className="mt-4 max-w-2xl text-zinc-700">
              Hablemos sobre tu contexto, tus objetivos y cómo aplicar una plataforma enfocada en comprensión de
              actividad y comportamiento canino.
            </p>
            <p className="mt-4 text-sm text-zinc-600">Contáctanos para recibir información técnica y comercial.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
