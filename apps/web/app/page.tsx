import Image from 'next/image';
import { SiteFooter } from '@/components/marketing/site-footer';
import { SiteHeader } from '@/components/marketing/site-header';

const steps = [
  {
    title: 'Sensor',
    description: 'Captura movimiento desde el dispositivo montado en el collar.',
  },
  {
    title: 'Detección',
    description: 'Clasifica caminar, correr y reposo en categorías útiles.',
  },
  {
    title: 'Sync',
    description: 'Envía datos a la app mediante Bluetooth Low Energy.',
  },
  {
    title: 'Plataforma',
    description: 'Visualiza historial, actividad y evolución.',
  },
];

const pillars = [
  {
    title: 'Producto físico real',
    description:
      'PawActivity ya cuenta con un dispositivo identificable, integrable al collar y con lenguaje visual propio.',
  },
  {
    title: 'Plataforma conectada',
    description:
      'El valor aparece cuando el hardware, la app y la visualización web se entienden como un solo ecosistema.',
  },
  {
    title: 'Foco correcto',
    description:
      'La propuesta se centra en actividad real del perro, evitando promesas genéricas que no representan el producto.',
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
      'Sí. La arquitectura contempla dispositivo, app Android y backend sincronizados.',
  },
  {
    title: '¿Ya es un producto final?',
    description:
      'Está en etapa de desarrollo y validación, pero ya existe una base funcional real del producto.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.14),_transparent_30%),linear-gradient(to_bottom,_#fff,_#f7f7f5)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm text-orange-700">
              PawActivity · actividad inteligente para perros
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Datos reales para entender la actividad de tu perro
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              PawActivity conecta dispositivo, app y plataforma para transformar movimiento en información útil, clara y lista para seguimiento continuo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Solicitar demo
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
              >
                Ir al login
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Estado detectado</p>
                <p className="mt-3 text-2xl font-semibold text-orange-600">Caminar</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Clasificación continua y legible.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Actividad diaria</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">2 h 14 min</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Resumen visible desde la app.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Conectividad</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">BLE + Cloud</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Dispositivo, app y backend integrados.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <Image
              src="/images/pawactivity/hero-pawactivity.png"
              alt="PawActivity app y perro usando el collar"
              width={1344}
              height={768}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="como-funciona" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm text-slate-600">
              Cómo funciona
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Un flujo simple, sólido y creíble
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              PawActivity se apoya en hardware real, sincronización móvil y visualización útil para construir valor desde el primer uso.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-[#fffaf5] p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-orange-600">
                  {index + 1}. {step.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="producto" className="border-b border-slate-200 bg-[#f7f7f5]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <Image
              src="/images/pawactivity/device-module.png"
              alt="Módulo PawActivity"
              width={1536}
              height={1024}
              className="block h-auto w-full object-cover"
            />
          </div>

          <div>
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-sm text-slate-600">
              Producto
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Un dispositivo real con identidad propia
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              La presencia del hardware cambia completamente la percepción del proyecto: PawActivity deja de verse como concepto y pasa a presentarse como tecnología de producto.
            </p>

            <div className="mt-8 grid gap-4">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="rounded-3xl border border-slate-200 bg-white p-5">
                  <h3 className="text-lg font-semibold text-slate-950">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="actividad" className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm text-slate-600">
              Collar
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Integración física coherente con el uso real
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              El sistema no solo debe funcionar: también debe verse bien montado, consistente y listo para una presentación comercial seria.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <Image
              src="/images/pawactivity/collar-product.png"
              alt="Collar PawActivity"
              width={1536}
              height={1024}
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f7f7f5]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <Image
              src="/images/pawactivity/device-closeup.png"
              alt="Detalle premium del dispositivo PawActivity"
              width={1536}
              height={1024}
              className="block h-auto w-full object-cover"
            />
          </div>

          <div>
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-sm text-slate-600">
              Presentación
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Una imagen visual mucho más premium
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              El acabado visual, el branding y el lenguaje del dispositivo ayudan a posicionar PawActivity como una propuesta tecnológica seria y diferenciable.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">Dispositivo</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">PAW-001</p>
                <p className="mt-2 text-sm text-slate-600">conectado y sincronizando</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">Objetivo diario</p>
                <p className="mt-3 text-2xl font-semibold text-orange-600">68%</p>
                <p className="mt-2 text-sm text-slate-600">actividad registrada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm text-slate-600">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.title} className="rounded-3xl border border-slate-200 bg-[#fffaf5] p-6">
                <h3 className="text-lg font-semibold text-slate-950">{faq.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="bg-orange-500">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            PawActivity está listo para demos, validación y presentación comercial
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            Con identidad visual propia, hardware real y una base de plataforma ya construida, la web ya puede dejar la etapa MVP y pasar a una presentación mucho más seria.
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
              Solicitar contacto
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}