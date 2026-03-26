import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

const groups = [
  {
    title: 'Shop / Services',
    links: ['Haircuts', 'Color', 'Treatments', 'Styling']
  },
  {
    title: 'About',
    links: ['Our Salon', 'Reviews', 'Gallery']
  },
  {
    title: 'Support',
    links: ['Book Appointment', 'Contact', 'FAQs']
  }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[24px] border-t border-[#2E2E2E]/10 bg-[#e3e1e2] py-24">
      <p className="pointer-events-none absolute bottom-0 left-0 right-0 text-center text-[200px] leading-none text-[#2E2E2E]/10 md:text-[340px]">
        TALLER
      </p>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <p className="text-2xl">El Taller del Cabell</p>
            <p className="mt-3 text-[#2E2E2E]/80">Care, style, and confidence in every visit.</p>
            <div className="mt-5 flex gap-3">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="premium-shadow rounded-full bg-[#fafaf8] p-3 text-[#2E2E2E]/80 transition-all duration-300 ease-out hover:text-[#8C6A5D]"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="premium-shadow rounded-full bg-[#fafaf8] p-3 text-[#2E2E2E]/80 transition-all duration-300 ease-out hover:text-[#8C6A5D]"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </Link>
            </div>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-sm uppercase tracking-[0.3em] text-[#2E2E2E]/70">{group.title}</p>
              <div className="mt-4 flex flex-col gap-3">
                {group.links.map((item) => (
                  <Link
                    key={item}
                    href="/services"
                    className="text-[#2E2E2E]/80 transition-all duration-300 ease-out hover:text-[#8C6A5D]"
                    aria-label={item}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[#2E2E2E]/15 pt-6 text-sm text-[#2E2E2E]/70 md:flex-row md:items-center">
          <p>© 2026 El Taller del Cabell</p>
          <div className="flex gap-6">
            <Link href="/" aria-label="Privacy policy">
              Privacy Policy
            </Link>
            <Link href="/" aria-label="Terms of service">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
