'use client';

import { Music, Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  async function toggle() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
      alert('Agrega tu archivo de música en public/audio/song.mp3 para activar esta función.');
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/song.mp3" loop preload="none" />
      <button
        onClick={toggle}
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-cafe/90 px-4 py-3 font-body text-sm font-semibold text-marfil shadow-soft backdrop-blur"
        aria-label="Activar música"
      >
        <Music size={16} />
        {playing ? <Volume2 size={16} /> : <VolumeX size={16} />}
        <span className="hidden sm:inline">{playing ? 'Música' : 'Música'}</span>
      </button>
    </>
  );
}
