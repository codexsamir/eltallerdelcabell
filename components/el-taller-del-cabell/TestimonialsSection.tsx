'use client';

import { RevealCard } from './RevealCard';
import { SectionHeading } from './SectionHeading';
import { testimonials } from './data';

function Column({ items, direction }: { items: typeof testimonials; direction: 'up' | 'down' }) {
  const className = direction === 'down' ? 'testimonial-col-down' : 'testimonial-col-up';
  const looped = [...items, ...items];

  return (
    <div className="relative h-[600px] overflow-hidden rounded-3xl">
      <div className={`${className} flex flex-col gap-4`}>
        {looped.map((item, index) => (
          <article key={`${item.name}-${index}`} className="premium-shadow rounded-3xl bg-[#fafaf8] p-6">
            <p className="text-3xl leading-tight text-[#2E2E2E]">"{item.quote}"</p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-[#2E2E2E]/70">{item.city} - ⭐⭐⭐⭐⭐</p>
              </div>
              <span className="rounded-full bg-[#8C6A5D]/15 px-3 py-1 text-xs uppercase tracking-wide text-[#8C6A5D]">
                {item.service}
              </span>
            </div>
          </article>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#fafaf8] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fafaf8] to-transparent" />
    </div>
  );
}

export function TestimonialsSection() {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);

  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-6 lg:px-8">
        <SectionHeading
          label="Resenas"
          title="Clientes de Calafell y Tarragona que siguen confiando en nosotras"
          subtitle="Experiencias reales de quienes vuelven por resultados naturales y duraderos."
          center
        />

        <RevealCard delay={0} className="testimonial-track grid gap-5 md:grid-cols-3">
          <Column items={first} direction="down" />
          <Column items={second} direction="up" />
          <Column items={third} direction="down" />
        </RevealCard>
      </div>
    </section>
  );
}
