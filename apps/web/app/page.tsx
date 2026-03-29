import Image from 'next/image';
import { ContactForm } from '@/components/marketing/contact-form';
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

const reasons = [
  {
    title: 'Producto físico real',
    description:
      'PawActivity ya cuenta con un dispositivo visible, reconocible y coherente con una propuesta comercial seria.',
  },
  {
    title: 'Arquitectura conectada',
    description:
      'Dispositivo, app y plataforma web trabajan como partes de un mismo sistema, no como piezas aisladas.',
  },
  {
    title: 'Foco correcto',
    description:
      'La propuesta se centra en actividad real del perro, evitando promesas genéricas que no representan el producto.',
  },
];

const highlights = [
  {
    title: 'Caminar',
    description:
      'Permite construir resúmenes diarios y entender actividad moderada de forma más útil.',
  },
  {
    title: 'Correr',
    description:
      'Ayuda a registrar momentos de mayor intensidad y observar cambios en rutina y ejercicio.',
  },
  {
    title: 'Reposo',
    description:
      'Completa la lectura del día incorporando pausas y periodos de baja actividad.',
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

      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.15),_transparent_28%),linear-gradient(to_bottom,_#fff,_#f7f7f5)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm text-orange-700">
              PawActivity · monitoreo inteligente de actividad canina
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Convierte movimiento en información útil para entender a tu perro
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              PawActivity conecta un dispositivo inteligente, una app móvil y una plataforma web para transformar actividad en datos claros, accionables y listos para seguimiento continuo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Solicitar información
              </a>
              <a
                href="#producto"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
              >
                Ver producto
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Estado detectado</p>
                <p className="mt-3 text-2xl font-semibold text-orange-600">Caminar</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Lectura continua de actividad.
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
              PawActivity une captura de movimiento, detección inteligente, sincronización móvil y visualización web en una sola experiencia.
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
              La presencia del hardware cambia por completo la percepción del proyecto: PawActivity deja de verse como concepto y pasa a presentarse como una propuesta tecnológica concreta.
            </p>

            <div className="mt-8 grid gap-4">
              {reasons.map((reason) => (
                <article key={reason.title} className="rounded-3xl border border-slate-200 bg-white p-5">
                  <h3 className="text-lg font-semibold text-slate-950">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{reason.description}</p>
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
              Actividad
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Datos más útiles que una landing llena de promesas vacías
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              PawActivity se enfoca en actividad real del perro y en una lectura comprensible, en vez de prometer funciones genéricas que hoy no son el corazón del producto.
            </p>

            <div className="mt-8 grid gap-4">
              {highlights.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-200 bg-[#fffaf5] p-5">
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
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
              Una presencia visual más premium y comercial
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              El branding, el acabado del dispositivo y la coherencia visual ayudan a posicionar PawActivity como una propuesta seria, diferenciable y lista para crecer comercialmente.
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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div className="text-left text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">
              Contáctanos
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Solicita información sobre PawActivity
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-orange-50 sm:text-lg">
              Si quieres más información sobre PawActivity, una posible implementación o resolver dudas sobre el producto, completa el formulario y te contactaremos.
            </p>

            <div className="mt-8 space-y-3 text-sm text-orange-50">
              <p>• Consultas sobre el producto</p>
              <p>• Implementaciones y validación</p>
              <p>• Información comercial general</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}