'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export function HeroSection() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative flex min-h-screen items-center overflow-hidden rounded-[24px]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf8] via-[#fafaf8]/50 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pb-16 pt-32 lg:px-8">
        <p
          className={`reveal-text ${isVisible ? 'is-visible animate-blur-in' : ''} mb-4 text-xs uppercase tracking-[0.3em] text-[#2E2E2E]/70`}
          style={{ animationDelay: '0.2s' }}
        >
          Peluqueria Calafell
        </p>
        <h1
          className={`reveal-text ${isVisible ? 'is-visible animate-blur-in' : ''} text-balance max-w-4xl text-5xl leading-[0.95] text-[#2E2E2E] md:text-7xl`}
          style={{ animationDelay: '0.4s' }}
        >
          Cabello sano, resultados bonitos siempre
        </h1>
        <p
          className={`reveal-text ${isVisible ? 'is-visible animate-blur-in' : ''} mt-6 max-w-2xl text-lg text-[#2E2E2E]/80`}
          style={{ animationDelay: '0.6s' }}
        >
          Cortes, color y tratamientos expertos adaptados a tu estilo en Calafell.
        </p>

        <Link
          href="/services/booking"
          className="group premium-shadow mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#8C6A5D] px-7 py-4 text-sm uppercase tracking-wider text-[#fafaf8] transition-all duration-300 ease-out hover:scale-[1.02]"
          aria-label="Reservar cita"
        >
          Reserva tu cita
          <ArrowRight className="transition-all duration-300 ease-out group-hover:translate-x-1" size={16} />
        </Link>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#2E2E2E]/70">
          <span className="text-xs uppercase tracking-[0.3em]">Desliza</span>
          <span className="h-10 w-px animate-pulse bg-[#2E2E2E]/70" />
        </div>
      </div>
    </section>
  );
}
