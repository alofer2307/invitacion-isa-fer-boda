'use client';

import { useEffect, useState } from 'react';
import { wedding } from '@/lib/wedding';

type TimeLeft = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
};

function calculate(): TimeLeft {
  const target = new Date(wedding.dateISO).getTime();
  const now = new Date().getTime();
  const diff = Math.max(target - now, 0);

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculate());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="glass-card rounded-[2rem] p-6 text-center">
          <div className="font-display text-5xl font-bold text-cuero md:text-6xl">{value}</div>
          <div className="mt-2 font-body text-xs uppercase tracking-[0.28em] text-oliva">{label}</div>
        </div>
      ))}
    </div>
  );
}
