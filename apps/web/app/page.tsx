import { SiteFooter } from '@/components/marketing/site-footer';
import { SiteHeader } from '@/components/marketing/site-header';

const features = [
  {
    title: 'Detección de actividad',
    description:
      'Identifica caminar, correr y reposo a partir de sensores de movimiento y procesamiento inteligente.',
  },
  {
    title: 'Sincronización con app',
    description:
      'El dispositivo se conecta con la app para visualizar datos y construir historial de actividad.',
  },
  {
    title: 'Base tecnológica real',
    description:
      'PawActivity está construido sobre firmware, BLE, backend y plataforma web en evolución real.',
  },
  {
    title: 'Historial y tendencias',
    description:
      'La plataforma puede resumir actividad diaria, semanal y mensual para seguimiento continuo.',
  },
  {
    title: 'Arquitectura escalable',
    description:
      'La base ya considera dispositivo, app Android y backend sincronizados como un solo sistema.',
  },
  {
    title: 'Producto en validación real',
    description:
      'No es una landing ficticia: nace sobre una implementación técnica existente y en evolución.',
  },
];

const steps = [
  {
    title: 'Sensor',
    description: 'Captura movimiento con IMU desde el dispositivo.',
  },
  {
    title: 'Detección',
    description: 'Clasifica caminar, correr y reposo.',
  },
  {
    title: 'Sync',
    description: 'Envía datos a la app mediante Bluetooth Low Energy.',
  },
  {
    title: 'Plataforma',
    description: 'Visualiza historial, actividad y tendencias.',
  },
];

const faqs = [
  {
    title: '¿Qué detecta actualmente PawActivity?',
    description:
      'Actualmente el foco está en detectar caminar, correr y reposo usando sensores de movimiento y clasificación inteligente.',
  },
  {
    title: '¿Se conecta a una app móvil?',
    description:
      'Sí. La arquitectura considera dispositivo, app Android y backend sincronizados.',
  },
  {
    title: '¿Ya es un producto terminado?',
    description:
      'Está en etapa de desarrollo y validación, pero ya existe una base funcional real del sistema.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-slate-900">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(251,146,60,0.12),_transparent_30%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm text-orange-700">
              PawActivity · nueva generación de monitoreo de actividad
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Cuida la actividad de tu perro con datos reales
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              PawActivity transforma el movimiento de tu perro en información útil para seguimiento,
              historial y evolución del comportamiento, conectando dispositivo, app y plataforma web.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Solicitar acceso
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
              >
                Ir al login
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-[#fffaf5] p-5">
                <p className="text-sm text-slate-500">Estado detectado</p>
                <p className="mt-3 text-2xl font-semibold text-orange-600">Caminar</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Confianza alta y actualización continua.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">Actividad diaria</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">2 h 14 min</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Resumen visible desde la app y la plataforma.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">Sincronización</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">BLE + Cloud</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Dispositivo, app y backend conectados.
                </p>
              </div>
            </div>

            <div
              id="como-funciona"
              className="mt-6 rounded-[1.75rem] bg-gradient-to-br from-orange-500 to-orange-600 p-5 text-white sm:p-6"
            >
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-orange-100">
                Cómo funciona
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {steps.map((step, index) => (
                  <div key={step.title} className="rounded-3xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-sm font-semibold text-white">
                      {index + 1}. {step.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-orange-50">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm text-slate-600">
              Características
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Todo lo necesario para entender la actividad de tu perro
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Construido sobre una base real de firmware, sincronización y visualización de datos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                  ●
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="actividad" className="border-t border-slate-200 bg-[#f8f8f6]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-sm text-slate-600">
              Actividad
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Enfocado en comportamiento real, no en funciones inventadas
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              PawActivity no necesita prometer GPS, ritmo cardíaco o funciones que hoy no son el foco.
              La propuesta está centrada en medir actividad real y mostrarla de forma útil.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-950">Caminar</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Registra periodos de movimiento moderado para construir resúmenes diarios y semanales.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-950">Correr</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Detecta momentos de mayor intensidad para entender juego, ejercicio y rutina.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-950">Reposo</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Completa la lectura del día mostrando pausas y baja actividad.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="rounded-[1.5rem] bg-orange-500 p-6 text-white">
              <p className="text-sm text-orange-100">Resumen semanal</p>
              <p className="mt-4 text-4xl font-semibold">6 días activos</p>
              <p className="mt-2 text-sm text-orange-100">Seguimiento continuo desde el dispositivo</p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Promedio diario</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">1 h 52 min</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Estado actual</p>
                <p className="mt-3 text-2xl font-semibold text-orange-600">Reposo</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5 sm:col-span-2">
                <p className="text-sm text-slate-500">Dispositivo</p>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xl font-semibold text-slate-950">PAW-001</p>
                    <p className="text-sm text-slate-600">conectado y sincronizando eventos</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                    Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="app" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm text-slate-600">
              Aplicación
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Control y visualización desde la app
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              La plataforma puede crecer sobre una app clara, moderna y enfocada en actividad, historial y estado del dispositivo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-[#fffaf5] p-5">
              <div className="rounded-[1.5rem] bg-orange-500 p-6 text-white">
                <p className="text-sm text-orange-100">Dashboard</p>
                <p className="mt-8 text-4xl font-semibold">68%</p>
                <p className="mt-2 text-sm text-orange-100">objetivo diario</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-5">
              <div className="rounded-[1.5rem] bg-slate-100 p-6">
                <p className="text-sm text-slate-500">Actividad semanal</p>
                <div className="mt-8 flex items-end gap-2">
                  <span className="h-16 w-5 rounded-full bg-orange-200" />
                  <span className="h-24 w-5 rounded-full bg-orange-300" />
                  <span className="h-20 w-5 rounded-full bg-orange-400" />
                  <span className="h-28 w-5 rounded-full bg-orange-500" />
                  <span className="h-14 w-5 rounded-full bg-orange-300" />
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-5">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <p className="text-sm text-slate-400">Dispositivo</p>
                <p className="mt-8 text-2xl font-semibold">PAW-001</p>
                <p className="mt-2 text-sm text-slate-400">conectado y sincronizando</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-slate-200 bg-[#f8f8f6]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-sm text-slate-600">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-950">{faq.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="border-t border-slate-200 bg-orange-500">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            PawActivity está construyendo una plataforma real de actividad canina
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            Esta versión ya deja atrás la etapa DogFit y establece una base pública mucho más creíble, clara y lista para seguir refinando.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
            >
              Acceso privado
            </a>
            <a
              href="mailto:contacto@pawactivity.com"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}