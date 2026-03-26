'use client';

import { ReactNode } from 'react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'article';
};

export function RevealCard({ children, delay = 0, className = '', as = 'div' }: Props) {
  const { ref, isVisible } = useRevealOnScroll();
  const Comp = as;

  return (
    <Comp
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal-card ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}
