import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { Navbar } from '@/components/el-taller-del-cabell/Navbar';
import { Footer } from '@/components/el-taller-del-cabell/Footer';

export const metadata: Metadata = {
  title: 'El Taller del Cabell | Peluqueria Calafell',
  description:
    'Peluqueria en Calafell especializada en cortes, color y tratamientos capilares con resultados naturales.',
  keywords: [
    'Peluqueria Calafell',
    'Color cabello Tarragona',
    'Balayage Calafell',
    'Tratamientos capilares'
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="bg-[#fafaf8] text-[#2E2E2E]">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
