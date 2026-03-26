'use client';

import Image from 'next/image';
import { Sparkles, ShieldPlus, Scissors, Users } from 'lucide-react';
import { RevealCard } from './RevealCard';
import { SectionHeading } from './SectionHeading';

const cards = [
  {
    title: 'Tailored Haircuts',
    text: 'We design each cut to suit your face, style, and routine.',
    image:
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Natural Color Results',
    text: 'Soft, blended tones that enhance your natural beauty.',
    image:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Repair and Hydration Treatments',
    text: 'Bring your hair back to life with professional care.',
    image:
      'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Family-Friendly Salon',
    text: 'Services for women, men, and children.',
    image:
      'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=900&q=80'
  }
];

const detailCards = [
  {
    icon: Scissors,
    title: 'Precision Cuts',
    text: 'Geometry and movement adapted to your lifestyle.'
  },
  {
    icon: Sparkles,
    title: 'Color Artistry',
    text: 'Luminous tones with a healthy, dimensional finish.'
  },
  {
    icon: ShieldPlus,
    title: 'Care Protocols',
    text: 'Professional rituals focused on repair and scalp comfort.'
  },
  {
    icon: Users,
    title: 'Community Feel',
    text: 'Warm, approachable service with neighborhood trust.'
  }
];

export function FeaturesBento() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-6 lg:px-8">
        <SectionHeading
          label="Our Workshop"
          title="Artisan techniques, natural outcomes, and healthy hair first"
          subtitle="Every appointment is designed with care so your look stays beautiful beyond the salon chair."
        />

        <div className="grid gap-6 lg:grid-cols-4 lg:grid-rows-[300px_300px]">
          <RevealCard delay={0} className="premium-shadow relative overflow-hidden rounded-3xl lg:col-span-2 lg:row-span-2">
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80"
              alt="Before and after hair transformation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-[#fafaf8]/90 p-6 backdrop-blur-sm">
              <p className="text-2xl text-[#2E2E2E]">Where your hair gets the care it deserves</p>
              <p className="mt-2 text-[#2E2E2E]/80">A salon focused on quality, not rush.</p>
            </div>
          </RevealCard>

          {cards.slice(0, 2).map((card, index) => (
            <RevealCard key={card.title} delay={(index + 1) * 80} className="premium-shadow group relative overflow-hidden rounded-3xl">
              <Image src={card.image} alt={card.title} fill className="object-cover transition-all duration-300 ease-out group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/75 via-[#2E2E2E]/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-3xl text-[#fafaf8]">{card.title}</h3>
                <p className="mt-2 text-[#fafaf8]/80">{card.text}</p>
              </div>
            </RevealCard>
          ))}

          {cards.slice(2, 4).map((card, index) => (
            <RevealCard key={card.title} delay={(index + 3) * 80} className="premium-shadow group relative overflow-hidden rounded-3xl">
              <Image src={card.image} alt={card.title} fill className="object-cover transition-all duration-300 ease-out group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#2E2E2E]/10 via-[#2E2E2E]/40 to-[#2E2E2E]/75" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-3xl text-[#fafaf8]">{card.title}</h3>
                <p className="mt-2 text-[#fafaf8]/80">{card.text}</p>
              </div>
            </RevealCard>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <RevealCard delay={0} className="premium-shadow relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=80"
              alt="Hair treatment process"
              fill
              className="object-cover"
            />
          </RevealCard>

          <div className="space-y-6">
            <h3 className="text-balance text-4xl">Designed for long-term hair confidence</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {detailCards.map((item, index) => (
                <RevealCard
                  key={item.title}
                  delay={index * 80}
                  className="premium-shadow rounded-3xl bg-[#f4efea] p-5 transition-all duration-300 ease-out hover:scale-[1.02]"
                >
                  <div className="mb-3 inline-flex rounded-full bg-[#8C6A5D]/15 p-3 text-[#8C6A5D]">
                    <item.icon size={18} />
                  </div>
                  <h4 className="text-2xl text-[#2E2E2E]">{item.title}</h4>
                  <p className="mt-2 text-sm text-[#2E2E2E]/80">{item.text}</p>
                </RevealCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
