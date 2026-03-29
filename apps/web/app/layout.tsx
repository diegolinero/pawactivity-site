import type { ReactNode } from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PawActivity',
  description:
    'PawActivity conecta dispositivo, app y plataforma para entender la actividad de tu perro con datos reales.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}