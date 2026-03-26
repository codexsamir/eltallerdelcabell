'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { serviceItems } from './data';
import { RevealCard } from './RevealCard';
import { SectionHeading } from './SectionHeading';

const categories = ['Cortes', 'Color', 'Tratamientos', 'Peinado'] as const;

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('Cortes');
  const [isFading, setIsFading] = useState(false);

  const filtered = useMemo(
    () => serviceItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const activeIndex = categories.indexOf(activeCategory);

  function handleCategory(category: (typeof categories)[number]) {
    if (category === activeCategory) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsFading(false);
    }, 300);
  }

  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-6 lg:px-8">
        <SectionHeading
          label="Servicios"
          title="Desde el mantenimiento diario hasta cambios completos"
          subtitle="Elige una categoria y encuentra el servicio ideal para tu cabello."
        />

        <div className="premium-shadow relative inline-flex rounded-full bg-[#fafaf8] p-1">
          <div
            className="absolute bottom-1 top-1 rounded-full bg-[#8C6A5D] transition-all duration-300"
            style={{
              width: `${100 / categories.length}%`,
              transform: `translateX(${activeIndex * 100}%)`
            }}
          />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategory(category)}
              className={`relative z-10 rounded-full px-5 py-2 text-sm uppercase tracking-wide transition-all duration-300 ease-out ${
                category === activeCategory ? 'text-[#fafaf8]' : 'text-[#2E2E2E]/80'
              }`}
              aria-label={`Filtrar por ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className={`grid grid-cols-2 gap-5 transition-opacity duration-300 md:grid-cols-3 xl:grid-cols-4 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {filtered.map((service, index) => (
            <RevealCard
              key={service.name}
              delay={index * 80}
              className="premium-shadow group rounded-3xl bg-[#f4efea] p-4 transition-all duration-300 ease-out hover:scale-[1.02]"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image src={service.image} alt={service.name} fill className="object-cover" />
                {service.badge ? (
                  <span className="absolute left-3 top-3 rounded-full bg-[#8C6A5D] px-3 py-1 text-xs uppercase tracking-wide text-[#fafaf8]">
                    {service.badge}
                  </span>
                ) : null}
                <button
                  className="premium-shadow absolute bottom-3 right-3 translate-y-2 rounded-full bg-[#fafaf8] p-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                  aria-label={`Accion rapida ${service.name}`}
                >
                  <Plus size={16} />
                </button>
              </div>
              <h3 className="mt-4 text-2xl">{service.name}</h3>
              <p className="mt-1 text-sm text-[#2E2E2E]/80">{service.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm uppercase tracking-wide text-[#8C6A5D]">{service.price}</span>
                <Link
                  href={`/services/booking?service=${encodeURIComponent(service.name)}`}
                  className="text-sm uppercase tracking-wide text-[#2E2E2E]/80 transition-all duration-300 ease-out hover:text-[#8C6A5D]"
                  aria-label={`Reservar ${service.name}`}
                >
                  Reservar
                </Link>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
