import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        marfil: '#F7F1E7',
        arena: '#DCC7A6',
        cuero: '#7A4E2D',
        cafe: '#4A2F1B',
        oliva: '#65724A',
        champagne: '#D9B46F',
        madera: '#9A6B3E',
        noche: '#201713',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
        body: ['var(--font-poppins)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(74, 47, 27, 0.16)',
        glow: '0 0 60px rgba(217, 180, 111, 0.35)',
      },
      backgroundImage: {
        'paper': "linear-gradient(135deg, rgba(247,241,231,0.95), rgba(220,199,166,0.28))",
        'warm': "radial-gradient(circle at top, rgba(217,180,111,.35), transparent 35%), linear-gradient(180deg, #F7F1E7 0%, #EFE0C9 100%)",
      }
    },
  },
  plugins: [],
};
export default config;
