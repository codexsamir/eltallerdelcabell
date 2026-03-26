'use client';

import { FormEvent, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { RevealCard } from './RevealCard';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSuccess(true);
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealCard delay={0} className="premium-shadow rounded-3xl bg-[#8C6A5D] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#fafaf8]/80">Mantente al dia</p>
          <h2 className="mt-4 text-balance text-5xl text-[#fafaf8] md:text-6xl">Consejos capilares y ofertas exclusivas</h2>
          <p className="mt-4 max-w-2xl text-[#fafaf8]/80">
            Unete para recibir ideas de peinado y promociones de temporada.
          </p>

          {!success ? (
            <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 md:flex-row" aria-label="Formulario newsletter">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder="Correo electronico"
                aria-label="Correo electronico"
                className="w-full rounded-full border border-[#fafaf8]/40 bg-[#fafaf8]/20 px-6 py-4 text-[#fafaf8] placeholder:text-[#fafaf8]/70 backdrop-blur-sm outline-none"
              />
              <button
                type="submit"
                className="premium-shadow rounded-full bg-[#2E2E2E] px-8 py-4 text-sm uppercase tracking-wide text-[#fafaf8] transition-all duration-300 ease-out hover:scale-[1.02]"
                aria-label="Suscribirse"
              >
                Suscribirse
              </button>
            </form>
          ) : (
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#fafaf8]/20 px-5 py-3 text-[#fafaf8] backdrop-blur-sm">
              <CheckCircle2 size={18} />
              <span>Bienvenida. Ya formas parte de nuestra lista.</span>
            </div>
          )}
        </RevealCard>
      </div>
    </section>
  );
}
