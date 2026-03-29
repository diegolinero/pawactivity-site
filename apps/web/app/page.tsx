import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ContactForm } from '@/components/marketing/contact-form';

const howItWorks = [
  {
    title: 'Captura continua',
    description:
      'Un dispositivo cómodo y resistente registra la actividad durante todo el día, sin interrumpir la rutina.',
  },
  {
    title: 'Lectura inteligente',
    description:
      'PawActivity interpreta patrones de comportamiento y detecta variaciones que requieren atención.',
  },
  {
    title: 'Contexto diario',
    description:
      'Cada día se muestra con contexto: niveles de actividad, cambios respecto a su rutina y evolución semanal.',
  },
  {
    title: 'Acción clara',
    description:
      'Recibes información clara para decidir mejor: qué cambió, cuándo cambió y qué seguimiento conviene hacer.',
  },
];

const outcomes = [
  'Entiende la rutina real de tu perro y su consistencia semanal.',
  'Detecta cambios de comportamiento antes de que se vuelvan evidentes.',
  'Evalúa el equilibrio entre actividad y reposo con visión de contexto.',
  'Convierte datos diarios en decisiones claras y seguimiento continuo.',
];

const audiences = [
  {
    title: 'Dueños que buscan claridad',
    description: 'Para quienes quieren saber si su perro está activo de verdad y cómo evoluciona su rutina.',
  },
  {
    title: 'Entrenadores caninos',
    description: 'Para dar seguimiento objetivo entre sesiones y ajustar planes con evidencia de comportamiento.',
  },
  {
    title: 'Uso profesional',
    description: 'Para equipos que necesitan monitoreo consistente, historial claro y seguimiento de cambios en el tiempo.',
  },
];

const comparisons = [
  {
    traditional: 'Ubicación y alertas como eje principal.',
    pawactivity: 'Comprensión de actividad y comportamiento como eje principal.',
  },
  {
    traditional: 'Métricas sueltas sin interpretación.',
    pawactivity: 'Información explicada con contexto de rutina y evolución.',
  },
  {
    traditional: 'Eventos puntuales sin continuidad analítica.',
    pawactivity: 'Seguimiento continuo para identificar tendencias y desviaciones.',
  },
];

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 sm:pb-20 sm:pt-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">PawActivity</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Entiende realmente la actividad y el comportamiento de tu perro
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              Un sistema diseñado para entender la actividad real de tu perro, detectar cambios en su comportamiento y
              ayudarte a tomar decisiones con contexto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>Solicitar información</Button>
              <Link
                href="https://app.pawactivity.com"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Iniciar sesión
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Contáctanos
              </Link>
            </div>
          </div>
          <Card className="p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Comprensión diaria de actividad</p>
            <ul className="mt-4 space-y-4 text-sm text-slate-700">
              <li>• Comprende su rutina real y cómo cambia entre días de semana y fines de semana.</li>
              <li>• Identifica desviaciones tempranas para actuar antes de que el cambio sea evidente.</li>
              <li>• Interpreta cada jornada con contexto, no solo con métricas aisladas.</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">El tracking ya está resuelto</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card className="p-6">
              <p className="text-base text-slate-700">
                Hoy existen múltiples opciones para ver ubicación. El desafío real está en entender comportamiento.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-base text-slate-700">
                Sin contexto diario, es difícil distinguir un día normal de una señal de cambio en su rutina.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-base text-slate-700">
                PawActivity convierte actividad en comprensión accionable para seguimiento continuo y decisiones mejores.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Card className="border-brand/20 bg-brand-soft/40 p-8 sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">No es otro tracker más</h2>
          <p className="mt-5 max-w-3xl text-lg text-slate-700">
            La ubicación ya está resuelta con GPS y AirTag. PawActivity se enfoca en algo distinto: entender la
            actividad real y el comportamiento de tu perro para saber cuándo su rutina cambia de verdad.
          </p>
        </Card>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Cómo funciona</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step) => (
              <Card key={step.title} className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand">{step.title}</p>
                <p className="mt-3 text-sm text-slate-700">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">Resultados que importan en el día a día</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {outcomes.map((item) => (
            <Card key={item} className="p-6">
              <p className="text-base text-slate-700">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Para quién es PawActivity</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {audiences.map((audience) => (
              <Card key={audience.title} className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{audience.title}</h3>
                <p className="mt-3 text-sm text-slate-700">{audience.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">PawActivity vs soluciones de tracking</h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          La diferencia clave es el enfoque: pasar de solo localizar a comprender actividad, rutina y comportamiento
          con contexto continuo.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-100 text-sm font-semibold text-slate-700">
            <p className="px-6 py-4">Soluciones tradicionales</p>
            <p className="px-6 py-4">PawActivity</p>
          </div>
          {comparisons.map((row) => (
            <div key={row.traditional} className="grid grid-cols-2 border-b border-slate-200 text-sm last:border-b-0">
              <p className="px-6 py-4 text-slate-600">{row.traditional}</p>
              <p className="px-6 py-4 font-medium text-slate-900">{row.pawactivity}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Un sistema completo para uso continuo</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            PawActivity combina hardware y app en una sola experiencia: diseño pensado para uso continuo, integración
            completa y lectura clara de la actividad real de tu perro.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { imageName: 'device-module', label: 'Diseño cómodo y discreto para uso diario' },
              { imageName: 'collar-product', label: 'Integración fluida entre dispositivo y aplicación' },
              { imageName: 'device-closeup', label: 'Sistema robusto para monitoreo continuo' },
            ].map((item) => (
              <Card key={item.imageName} className="overflow-hidden">
                <Image
                  src={`/images/${item.imageName}.jpg`}
                  alt={item.label}
                  width={640}
                  height={420}
                  className="h-52 w-full bg-slate-100 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm font-medium text-slate-800">{item.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <span id="contacto" className="sr-only">Sección de contacto</span>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">Solicita información sobre PawActivity</h2>
            <p className="mt-4 text-slate-600">
              Si quieres más información sobre PawActivity o resolver dudas sobre el producto, completa el formulario y te contactaremos.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
