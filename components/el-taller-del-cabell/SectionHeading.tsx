'use client';

import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

type Props = {
  label: string;
  title: string;
  subtitle: string;
  center?: boolean;
};

export function SectionHeading({ label, title, subtitle, center }: Props) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${center ? 'text-center items-center' : 'items-start'} flex max-w-3xl flex-col gap-4`}
    >
      <p
        className={`reveal-text ${isVisible ? 'is-visible animate-blur-in' : ''} text-xs uppercase tracking-[0.3em] text-[#2E2E2E]/70`}
        style={{ animationDelay: '0.2s' }}
      >
        {label}
      </p>
      <h2
        className={`reveal-text ${isVisible ? 'is-visible animate-blur-in' : ''} text-balance text-4xl leading-tight md:text-5xl`}
        style={{ animationDelay: '0.4s' }}
      >
        {title}
      </h2>
      <p
        className={`reveal-text ${isVisible ? 'is-visible animate-blur-in' : ''} text-lg text-[#2E2E2E]/80`}
        style={{ animationDelay: '0.6s' }}
      >
        {subtitle}
      </p>
    </div>
  );
}
