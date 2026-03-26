'use client';

import { Scissors, Star, Leaf, MessageCircle } from 'lucide-react';
import { RevealCard } from './RevealCard';

const badges = [
  {
    icon: Scissors,
    title: 'Experienced Stylists',
    text: 'Skilled professionals who understand your hair.'
  },
  {
    icon: Star,
    title: 'Highly Rated Locally',
    text: 'Trusted by loyal clients in Calafell.'
  },
  {
    icon: Leaf,
    title: 'Hair Health First',
    text: 'Treatments that protect and restore.'
  },
  {
    icon: MessageCircle,
    title: 'Personalized Attention',
    text: 'We listen and tailor every service.'
  }
];

export function TrustBadges() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {badges.map((badge, index) => (
            <RevealCard
              key={badge.title}
              delay={index * 80}
              className="premium-shadow rounded-3xl bg-[#f4efea] p-6 transition-all duration-300 ease-out hover:scale-[1.02]"
              as="article"
            >
              <badge.icon className="mb-4 text-[#8C6A5D]" size={22} />
              <h3 className="text-2xl text-[#2E2E2E]">{badge.title}</h3>
              <p className="mt-2 text-[#2E2E2E]/80">{badge.text}</p>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
