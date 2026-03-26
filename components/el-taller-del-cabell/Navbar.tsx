'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CalendarDays, Instagram, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '#services', label: 'Servicios' },
  { href: '#about', label: 'Nosotros' },
  { href: '#reviews', label: 'Resenas' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const resolvedLinks = links.map((link) => ({
    ...link,
    href: isHome ? link.href : `/${link.href}`
  }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav
        aria-label="Navegacion principal"
        className="animate-nav-in premium-shadow mx-auto h-[68px] max-w-7xl rounded-3xl border border-[rgba(255,255,255,0.32)] bg-[rgba(255,255,255,0.4)] px-5 backdrop-blur-md"
      >
        <div className="relative flex h-full items-center justify-between">
          <div className="hidden items-center gap-6 md:flex">
            {resolvedLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-wide text-[#2E2E2E]/80 transition-all duration-300 ease-out hover:text-[#8C6A5D]"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-lg tracking-[0.15em] text-[#2E2E2E]"
            aria-label="Inicio El Taller del Cabell"
          >
            EL TALLER DEL CABELL
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="premium-shadow rounded-full bg-[#fafaf8] p-2 text-[#2E2E2E]/80 transition-all duration-300 ease-out hover:scale-105 hover:text-[#8C6A5D]"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </Link>
            <Link
              href="/services/booking"
              className="premium-shadow rounded-full bg-[#8C6A5D] px-4 py-2 text-sm text-[#fafaf8] transition-all duration-300 ease-out hover:scale-105"
              aria-label="Reservar cita"
            >
              Reservar
            </Link>
          </div>

          <button
            className="rounded-full p-2 text-[#2E2E2E] md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${open ? 'max-h-64 pt-3' : 'max-h-0'}`}
        >
          <div className="flex flex-col gap-3 rounded-3xl bg-[#fafaf8]/80 p-4">
            {resolvedLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-wide text-[#2E2E2E]/80"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/services" className="text-sm uppercase tracking-wide" aria-label="Pagina de servicios">
              Catalogo completo
            </Link>
            <Link
              href="/services/booking"
              className="premium-shadow inline-flex w-fit items-center gap-2 rounded-full bg-[#8C6A5D] px-4 py-2 text-sm text-[#fafaf8]"
              aria-label="Reservar cita"
            >
              <CalendarDays size={14} /> Reservar cita
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
