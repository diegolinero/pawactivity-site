import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ContactForm } from '@/components/marketing/contact-form';

const howItWorks = [
  {
    title: 'Sensor',
    description:
      'Un módulo ligero acompaña la rutina diaria y capta actividad de forma continua, sin depender de momentos aislados.',
  },
  {
    title: 'Detección',
    description:
      'PawActivity identifica patrones de comportamiento y resalta variaciones que merecen seguimiento.',
  },
  {
    title: 'Sync',
    description:
      'La información se sincroniza para mantener una lectura diaria consistente y comparaciones claras por semana.',
  },
  {
    title: 'Plataforma',
    description:
      'La plataforma convierte datos en interpretación útil: qué cambió, cuándo cambió y cómo afecta la rutina.',
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
              PawActivity transforma movimiento en información útil para visualizar rutina, detectar cambios y tomar
              decisiones con claridad.
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
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Visión operativa diaria</p>
            <ul className="mt-4 space-y-4 text-sm text-slate-700">
              <li>• Lectura continua para entender cómo se comporta tu perro durante el día completo.</li>
              <li>• Comparación por día y semana para interpretar evolución de forma simple.</li>
              <li>• Alertas de cambios de rutina para actuar con más contexto.</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">El problema no es la falta de datos</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card className="p-6">
              <p className="text-base text-slate-700">
                Muchos dispositivos muestran números, pero no explican qué significan para la rutina real del perro.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-base text-slate-700">
                Detectar cambios de comportamiento a tiempo es difícil cuando no hay una lectura continua con contexto.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-base text-slate-700">
                Tener métricas no basta: el reto está en interpretar actividad diaria de forma consistente y útil.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Card className="border-brand/20 bg-brand-soft/40 p-8 sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">No somos un GPS, y eso es intencional</h2>
          <p className="mt-5 max-w-3xl text-lg text-slate-700">
            La ubicación ya está resuelta con GPS, AirTag y otras soluciones. PawActivity no compite en tracking:
            nuestro foco es entender comportamiento, rutina y cambios en la actividad diaria.
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
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">Resultados que importan</h2>
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
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">PawActivity vs soluciones tradicionales</h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          La diferencia clave es el enfoque: no solo ubicación, no solo métricas, no solo alertas. PawActivity está
          diseñado para comprender actividad y comportamiento.
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
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Un producto listo para uso diario</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            PawActivity integra sensor y plataforma en una experiencia coherente: instalación limpia, uso simple y
            lectura clara de la actividad real del perro.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { imageName: 'device-module', label: 'Módulo compacto y discreto para uso diario' },
              { imageName: 'collar-product', label: 'Integración limpia con el collar' },
              { imageName: 'device-closeup', label: 'Diseño robusto para seguimiento continuo' },
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
