import type { ReactNode } from 'react';

type AuthCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
      <div className="mb-6 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600">
          PawActivity
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-sm leading-6 text-slate-600">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}