'use client';

import Link from 'next/link';
import { ArrowRight, Leaf, Scissors, Star } from 'lucide-react';
import { RevealCard } from './RevealCard';

const values = [
  { icon: Scissors, text: 'Personalized styling' },
  { icon: Leaf, text: 'Healthy hair treatments' },
  { icon: Star, text: 'Trusted local salon' }
];

export function CtaBanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealCard
          delay={0}
          className="premium-shadow relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=1600&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E2E2E]/75 via-[#2E2E2E]/45 to-[#2E2E2E]/20" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#fafaf8]/80">Book Your Visit</p>
            <h2 className="mt-4 text-balance text-5xl text-[#fafaf8] md:text-6xl">Your hair deserves expert care</h2>
          </div>

          <div className="relative z-10 mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.text} className="rounded-3xl bg-[#fafaf8]/20 p-4 backdrop-blur-sm">
                  <value.icon size={18} className="text-[#fafaf8]" />
                  <p className="mt-2 text-sm text-[#fafaf8]">{value.text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/services/booking"
              className="group premium-shadow inline-flex items-center gap-2 rounded-full bg-[#8C6A5D] px-7 py-4 text-sm uppercase tracking-wide text-[#fafaf8] transition-all duration-300 ease-out hover:scale-[1.02]"
              aria-label="Book your visit"
            >
              Book Your Visit
              <ArrowRight className="transition-all duration-300 ease-out group-hover:translate-x-1" size={16} />
            </Link>
          </div>
        </RevealCard>
      </div>
    </section>
  );
}
