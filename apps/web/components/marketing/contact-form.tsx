'use client';

import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState<string>('');

  async function handleSubmit(formData: FormData) {
    setState('loading');
    setError('');

    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      company: String(formData.get('company') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message ?? 'No se pudo enviar el formulario.');
      }

      setState('success');
      const form = document.getElementById('contact-form') as HTMLFormElement | null;
      form?.reset();
    } catch (err) {
      setState('error');
      setError(err instanceof Error ? err.message : 'Ocurrió un error al enviar el formulario.');
    }
  }

  return (
    <form
      id="contact-form"
      action={handleSubmit}
      className="rounded-[2rem] border border-white/20 bg-white p-6 text-left shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-800">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500"
            placeholder="tu@correo.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-800">
            Empresa o institución
          </label>
          <input
            id="company"
            name="company"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500"
            placeholder="Opcional"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500"
            placeholder="Cuéntanos qué información necesitas sobre PawActivity."
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state === 'loading'}
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === 'loading' ? 'Enviando…' : 'Enviar solicitud'}
        </button>

        {state === 'success' ? (
          <p className="text-sm font-medium text-emerald-700">
            Gracias. Tu mensaje fue enviado correctamente.
          </p>
        ) : null}

        {state === 'error' ? (
          <p className="text-sm font-medium text-red-600">{error}</p>
        ) : null}
      </div>
    </form>
  );
}