'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialValues: ContactPayload = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState<ContactPayload>(initialValues);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(data?.message ?? 'No se pudo enviar el mensaje. Inténtalo nuevamente en unos minutos.');
      }

      setStatus('success');
      setValues(initialValues);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Ocurrió un error al enviar el formulario. Vuelve a intentarlo.',
      );
    }
  };

  const isLoading = status === 'loading';

  return (
    <Card className="p-6 sm:p-8">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="input focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            placeholder="Tu nombre"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            placeholder="tu@correo.com"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            required
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
            Empresa (opcional)
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="input focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            placeholder="Nombre de tu empresa"
            value={values.company}
            onChange={(event) => setValues((current) => ({ ...current, company: event.target.value }))}
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className="input min-h-28 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            placeholder="Cuéntanos qué información necesitas sobre PawActivity"
            value={values.message}
            onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
            required
          />
        </div>

        <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar mensaje'}
        </Button>

        {status === 'success' && (
          <p className="text-sm font-medium text-emerald-700">Gracias. Tu mensaje fue enviado correctamente.</p>
        )}
        {status === 'error' && <p className="text-sm font-medium text-red-700">{errorMessage}</p>}
      </form>
    </Card>
  );
}
