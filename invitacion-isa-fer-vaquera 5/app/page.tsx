'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  CalendarHeart,
  Clock,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  PartyPopper,
  Shirt,
  Sparkles,
  TentTree,
} from 'lucide-react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Countdown } from '@/components/Countdown';
import { CowboyDivider, FineTitle, SectionLabel } from '@/components/Decorative';
import { MusicPlayer } from '@/components/MusicPlayer';
import { RsvpForm } from '@/components/RsvpForm';
import { wedding } from '@/lib/wedding';

function ParallaxOrnament() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <motion.div
      style={{ y }}
      className="pointer-events-none fixed right-[-80px] top-24 z-0 hidden h-72 w-72 rounded-full border border-champagne/40 bg-champagne/10 blur-sm md:block"
    />
  );
}

function Hero() {
  return (
    <section className="hero-photo relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(217,180,111,.20),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-noche/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-marfil to-transparent" />

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center text-marfil"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.15 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .25, duration: .9 }}
          className="rounded-full border border-marfil/35 bg-marfil/10 px-5 py-2 font-body text-xs uppercase tracking-[0.4em] backdrop-blur"
        >
          boda vaquera elegante
        </motion.div>

        <motion.h1
          className="mt-8 font-script text-8xl leading-none drop-shadow-lg md:text-[10rem]"
          initial={{ opacity: 0, scale: .94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .45, duration: 1 }}
        >
          Isa & Fer
        </motion.h1>

        <motion.p
          className="mt-2 font-display text-4xl font-semibold uppercase tracking-[0.18em] md:text-6xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .7, duration: .9 }}
        >
          Nos casamos
        </motion.p>

        <motion.div
          className="mt-7 flex flex-wrap items-center justify-center gap-3 font-body text-sm font-medium md:text-base"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .9, duration: .85 }}
        >
          <span className="rounded-full bg-marfil/15 px-5 py-2 backdrop-blur">{wedding.date}</span>
          <span className="rounded-full bg-marfil/15 px-5 py-2 backdrop-blur">{wedding.venue}</span>
        </motion.div>

        <motion.a
          href="#historia"
          className="btn-primary mt-10 bg-gradient-to-br from-champagne to-cuero text-noche"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: .8 }}
        >
          <Sparkles size={18} />
          Abrir invitación
        </motion.a>
      </motion.div>
    </section>
  );
}

function Story() {
  return (
    <AnimatedSection id="historia" className="paper-texture">
      <div className="container grid items-center gap-10 md:grid-cols-[.9fr_1.1fr]">
        <div className="relative">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.3rem] border border-champagne/50" />
          <div className="glass-card relative overflow-hidden rounded-[2.3rem] p-4">
            <Image src="/images/story-placeholder.svg" alt="Foto de Isa y Fer" width={900} height={1100} className="h-[520px] w-full rounded-[1.8rem] object-cover" priority />
          </div>
        </div>

        <div>
          <SectionLabel>Nuestra historia</SectionLabel>
          <h2 className="font-display text-5xl font-semibold leading-tight text-cafe md:text-7xl">
            Hay amores que se sienten como casa.
          </h2>
          <CowboyDivider />
          <p className="font-body text-lg leading-9 text-cafe/75">
            Después de elegirnos, cuidarnos y caminar juntas, queremos celebrar el inicio de esta nueva etapa con quienes han formado parte de nuestra historia.
          </p>
          <p className="mt-5 font-body text-lg leading-9 text-cafe/75">
            Será una noche íntima, romántica, vaquera y muy nuestra: ceremonia bonita, luces cálidas, música, baile, risas y una fiesta con el corazón puesto en cada detalle.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Details() {
  const details = [
    { icon: CalendarHeart, title: 'Fecha', text: wedding.date },
    { icon: Clock, title: 'Ceremonia', text: wedding.ceremony },
    { icon: PartyPopper, title: 'Recepción', text: wedding.reception },
    { icon: MapPin, title: 'Lugar', text: wedding.venue },
  ];

  return (
    <AnimatedSection className="bg-warm">
      <div className="container">
        <FineTitle
          eyebrow="Detalles"
          title="El gran día"
          subtitle="Una celebración pequeña, cálida y con vibra de rancho mexicano elegante."
        />

        <div className="grid gap-5 md:grid-cols-4">
          {details.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass-card rounded-[2rem] p-6 text-center">
              <Icon className="mx-auto mb-4 text-cuero" size={30} />
              <h3 className="font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-2 font-body text-sm leading-6 text-cafe/70">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <a href={wedding.mapsUrl} target="_blank" rel="noreferrer" className="btn-primary">
            <MapPin size={18} />
            Abrir Google Maps
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

function DressCode() {
  return (
    <AnimatedSection className="paper-texture">
      <div className="container">
        <FineTitle
          eyebrow="Dress code"
          title="Vaquero elegante"
          subtitle="La idea es que se vea formal, pero con alma de rancho mexicano. Botas, sombrero y mezclilla sí; disfraz no."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-[2.4rem] p-7">
            <Shirt className="mb-5 text-cuero" size={34} />
            <h3 className="font-display text-4xl font-semibold">Para ellas</h3>
            <ul className="mt-5 space-y-3 font-body text-cafe/75">
              <li>• Vestidos, faldas o pantalón elegante.</li>
              <li>• Botas o calzado cómodo para bailar.</li>
              <li>• Sombrero vaquero si va con tu look.</li>
              <li>• Colores sugeridos: marfil, beige, café, oliva, champagne.</li>
            </ul>
          </div>

          <div className="glass-card rounded-[2.4rem] p-7">
            <TentTree className="mb-5 text-cuero" size={34} />
            <h3 className="font-display text-4xl font-semibold">Para ellos</h3>
            <ul className="mt-5 space-y-3 font-body text-cafe/75">
              <li>• Camisa, mezclilla o pantalón formal.</li>
              <li>• Botas vaqueras y cinturón.</li>
              <li>• Sombrero vaquero bienvenido.</li>
              <li>• Look limpio, cómodo y con intención de fiesta.</li>
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center font-body text-sm leading-7 text-cafe/65">
          Queremos una boda relajada, bonita y sin rigidez. Ven con algo que te haga sentir elegante, cómodo y listo para bailar.
        </p>
      </div>
    </AnimatedSection>
  );
}

function Timeline() {
  const items = [
    { time: '7:00 PM', title: 'Ceremonia', text: 'El momento bonito, romántico y tranquilo.' },
    { time: '9:00 PM', title: 'Recepción', text: 'Cena, brindis y convivencia.' },
    { time: 'Después', title: 'Vals', text: 'Un baile especial, sin show exagerado.' },
    { time: 'Más noche', title: 'Fiesta', text: 'Banda, norteño, reguetón y toro mecánico.' },
  ];

  return (
    <AnimatedSection className="paper-texture">
      <div className="container">
        <FineTitle eyebrow="Cronograma" title="La noche" subtitle="Pocas formalidades. Mucho amor, música y ambiente." />

        <div className="mx-auto max-w-3xl">
          {items.map((item, index) => (
            <div key={item.title} className="relative pl-9">
              {index !== items.length - 1 && <span className="absolute left-[10px] top-8 h-full w-px bg-champagne/60" />}
              <span className="absolute left-0 top-2 h-5 w-5 rounded-full border-4 border-marfil bg-cuero shadow-glow" />
              <div className="mb-5 glass-card rounded-[2rem] p-6">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-oliva">{item.time}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold">{item.title}</h3>
                <p className="mt-2 font-body text-sm leading-6 text-cafe/70">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function DreamAndGift() {
  return (
    <AnimatedSection className="paper-texture">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <div>
          <Image src="/images/paris-western.svg" alt="París y vaquero elegante" width={900} height={900} className="float-slow mx-auto max-h-[520px] w-full object-contain" />
        </div>

        <div className="glass-card rounded-[2.6rem] p-8 md:p-10">
          <Gift className="mb-5 text-cuero" size={38} />
          <SectionLabel>Nuestro sueño</SectionLabel>
          <h2 className="font-display text-5xl font-semibold leading-tight md:text-7xl">Rumbo a París</h2>
          <p className="mt-6 font-body text-lg leading-9 text-cafe/75">
            Después de celebrar nuestro gran día, comenzaremos nuestra aventura rumbo a París.
          </p>
          <p className="mt-5 font-body text-lg leading-9 text-cafe/75">
            Si deseas tener un detalle con nosotras, agradecemos que sea en efectivo para ayudarnos a cumplir ese sueño.
          </p>
          <CowboyDivider />
          <p className="font-script text-4xl text-cuero">Gracias por acompañarnos con tanto cariño.</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

function FinalSection() {
  return (
    <AnimatedSection className="min-h-[72vh] bg-noche text-marfil">
      <div className="container text-center">
        <Heart className="mx-auto mb-6 fill-champagne/30 text-champagne warm-glow" size={50} />
        <p className="font-script text-7xl md:text-9xl">Isa & Fer</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
          Gracias por formar parte de nuestra historia.
        </h2>
        <p className="mt-6 font-body text-marfil/70">{wedding.date}</p>
      </div>
    </AnimatedSection>
  );
}

export default function Home() {
  return (
    <main>
      <ParallaxOrnament />
      <MusicPlayer />

      <a
        href={`https://wa.me/${wedding.whatsapp}?text=${encodeURIComponent('Hola, quiero confirmar mi asistencia a la boda de Isa & Fer.')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-oliva px-4 py-3 font-body text-sm font-semibold text-marfil shadow-soft"
      >
        <MessageCircle size={17} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <Hero />
      <Story />

      <AnimatedSection>
        <div className="container">
          <FineTitle eyebrow="Cuenta regresiva" title="Falta poco" subtitle="Cada día nos acerca a una noche muy nuestra." />
          <Countdown />
        </div>
      </AnimatedSection>

      <Details />
      <DressCode />
      <Timeline />
      <DreamAndGift />

      <AnimatedSection id="confirmacion" className="bg-warm">
        <div className="container">
          <FineTitle
            eyebrow="Confirmación"
            title="Confirma tu asistencia"
            subtitle={`Para cuidar que sea una celebración íntima, tendremos cupo aproximado para ${wedding.maxGuests} personas.`}
          />
          <RsvpForm />
        </div>
      </AnimatedSection>

      <FinalSection />

      <a
        href="#"
        className="fixed bottom-20 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-cafe/15 bg-marfil/85 font-body text-lg font-bold text-cafe shadow-soft backdrop-blur"
        aria-label="Regresar arriba"
      >
        ↑
      </a>
    </main>
  );
}
