import type { Metadata } from 'next';
import { Cormorant_Garamond, Great_Vibes, Poppins } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Isa & Fer | Nos casamos',
  description: 'Invitación digital de boda de Isa & Fer. Viernes 23 de octubre de 2026, Granja La Tekahuita.',
  metadataBase: new URL('https://isa-fer-boda.vercel.app'),
  openGraph: {
    title: 'Isa & Fer | Nos casamos',
    description: 'Viernes 23 de octubre de 2026 · Granja La Tekahuita',
    images: ['/og-image.svg'],
    type: 'website',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isa & Fer | Nos casamos',
    description: 'Viernes 23 de octubre de 2026 · Granja La Tekahuita',
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${greatVibes.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
