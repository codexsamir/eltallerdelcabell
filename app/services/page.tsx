'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { serviceItems } from '@/components/el-taller-del-cabell/data';
import { SectionHeading } from '@/components/el-taller-del-cabell/SectionHeading';
import { RevealCard } from '@/components/el-taller-del-cabell/RevealCard';
import { useSalon } from '@/context/SalonContext';
import { useRouter } from 'next/navigation';

const categories = ['All', 'Haircuts', 'Color', 'Treatment', 'Styling'];
const durations = ['Any', '30 min', '45 min', '60+ min'];
const prices = ['All', '< EUR30', 'EUR30-EUR70', 'EUR70+'];

function parsePrice(price: string) {
  const numeric = Number(price.replace(/[^0-9]/g, '').slice(0, 3) || '0');
  return numeric;
}

export default function ServicesPage() {
  const [category, setCategory] = useState('All');
  const [duration, setDuration] = useState('Any');
  const [price, setPrice] = useState('All');
  const [sortBy, setSortBy] = useState('Popularity');

  const { setSelectedService } = useSalon();
  const router = useRouter();

  const filtered = useMemo(() => {
    const list = serviceItems.filter((item) => {
      const byCategory = category === 'All' || item.category === category;

      let byPrice = true;
      const value = parsePrice(item.price);
      if (price === '< EUR30') byPrice = value < 30;
      if (price === 'EUR30-EUR70') byPrice = value >= 30 && value <= 70;
      if (price === 'EUR70+') byPrice = value > 70;

      const byDuration =
        duration === 'Any' ||
        (duration === '30 min' && item.category === 'Haircuts') ||
        (duration === '45 min' && item.category === 'Styling') ||
        (duration === '60+ min' && (item.category === 'Color' || item.category === 'Treatment'));

      return byCategory && byPrice && byDuration;
    });

    if (sortBy === 'Price') {
      return [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    }

    if (sortBy === 'Duration') {
      return [...list].sort((a, b) => a.category.localeCompare(b.category));
    }

    return list;
  }, [category, duration, price, sortBy]);

  return (
    <main className="min-h-screen bg-[#fafaf8] px-6 pb-24 pt-36 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          label="Services Catalog"
          title="Premium salon services with transparent filters and fast booking"
          subtitle="Explore services by category, price range, and duration, then reserve your slot in seconds."
        />

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="premium-shadow h-fit rounded-3xl bg-[#f4efea] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#2E2E2E]/70">Filters</p>

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm uppercase tracking-wide">Category</label>
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full rounded-3xl border-0 bg-[#fafaf8] p-3"
                  aria-label="Filter by category"
                >
                  {categories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm uppercase tracking-wide">Price Range</label>
                <select
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  className="w-full rounded-3xl border-0 bg-[#fafaf8] p-3"
                  aria-label="Filter by price"
                >
                  {prices.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm uppercase tracking-wide">Duration</label>
                <select
                  value={duration}
                  onChange={(event) => setDuration(event.target.value)}
                  className="w-full rounded-3xl border-0 bg-[#fafaf8] p-3"
                  aria-label="Filter by duration"
                >
                  {durations.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="premium-shadow inline-flex rounded-full bg-[#f4efea] p-1">
              {['Popularity', 'Price', 'Duration'].map((sort) => (
                <button
                  key={sort}
                  onClick={() => setSortBy(sort)}
                  className={`rounded-full px-4 py-2 text-sm uppercase tracking-wide transition-all duration-300 ease-out ${
                    sortBy === sort ? 'bg-[#8C6A5D] text-[#fafaf8]' : 'text-[#2E2E2E]/80'
                  }`}
                  aria-label={`Sort by ${sort}`}
                >
                  {sort}
                </button>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((service, index) => (
                <RevealCard key={service.name} delay={index * 80} className="premium-shadow rounded-3xl bg-[#f4efea] p-4">
                  <div className="relative aspect-square overflow-hidden rounded-3xl">
                    <Image src={service.image} alt={service.name} fill className="object-cover" />
                  </div>
                  <h3 className="mt-4 text-2xl">{service.name}</h3>
                  <p className="mt-1 text-[#2E2E2E]/80">{service.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm uppercase tracking-wide text-[#8C6A5D]">{service.price}</span>
                    <button
                      onClick={() => {
                        setSelectedService(service.name);
                        router.push(`/services/booking?service=${encodeURIComponent(service.name)}`);
                      }}
                      className="group inline-flex items-center gap-2 rounded-full bg-[#8C6A5D] px-4 py-2 text-xs uppercase tracking-wide text-[#fafaf8]"
                      aria-label={`Book ${service.name}`}
                    >
                      Book now
                      <ArrowRight size={14} className="transition-all duration-300 ease-out group-hover:translate-x-1" />
                    </button>
                  </div>
                </RevealCard>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
