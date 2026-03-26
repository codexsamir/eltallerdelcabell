'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, MapPin } from 'lucide-react';
import { RevealCard } from './RevealCard';
import { SectionHeading } from './SectionHeading';

const gallery = [
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80'
];

export function MapInstagramSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-6 lg:px-8">
        <SectionHeading
          label="Visitanos"
          title="Encuentranos en Calafell y descubre nuestros ultimos trabajos"
          subtitle="Ubicacion y galeria social integradas para facilitar reserva y descubrimiento."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <RevealCard delay={0} className="premium-shadow overflow-hidden rounded-3xl bg-[#f4efea] p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-[#2E2E2E]/80">
                <MapPin size={15} /> Carrer Principal, Calafell
              </p>
              <Link
                href="https://maps.google.com"
                target="_blank"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-wide text-[#8C6A5D]"
                aria-label="Abrir mapa"
              >
                Ver mapa <ExternalLink size={13} />
              </Link>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <iframe
                title="Mapa de El Taller del Cabell"
                src="https://www.google.com/maps?q=Calafell&output=embed"
                className="h-[380px] w-full border-0"
                loading="lazy"
              />
            </div>
          </RevealCard>

          <RevealCard delay={80} className="premium-shadow rounded-3xl bg-[#f4efea] p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm uppercase tracking-wide text-[#2E2E2E]/80">Galeria de Instagram</p>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-wide text-[#8C6A5D]"
                aria-label="Abrir Instagram"
              >
                Seguir <ExternalLink size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {gallery.map((image, index) => (
                <div key={image} className="group relative aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src={image}
                    alt={`Galeria de Instagram ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-300 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
}
