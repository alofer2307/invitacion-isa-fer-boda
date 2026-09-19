'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { wedding } from '@/lib/wedding';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function RsvpForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      nombre: String(formData.get('nombre') || ''),
      telefono: String(formData.get('telefono') || ''),
      asistencia: String(formData.get('asistencia') || ''),
      invitados: String(formData.get('invitados') || ''),
      comentarios: String(formData.get('comentarios') || ''),
      fechaRegistro: new Date().toLocaleString('es-MX'),
    };

    if (!wedding.rsvpEndpoint) {
      const text = encodeURIComponent(
        `Confirmación boda Isa & Fer%0A%0ANombre: ${payload.nombre}%0ATeléfono: ${payload.telefono}%0AAsistencia: ${payload.asistencia}%0ANúmero de asistentes: ${payload.invitados}%0AComentarios: ${payload.comentarios}`
      );
      window.open(`https://wa.me/${wedding.whatsapp}?text=${text}`, '_blank');
      return;
    }

    try {
      setStatus('loading');
      await fetch(wedding.rsvpEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card mx-auto max-w-2xl rounded-[2rem] p-6 md:p-10">
      <div className="grid gap-5">
        <label className="font-body text-sm font-semibold text-cafe/80">
          Nombre completo
          <input className="input mt-2" name="nombre" required placeholder="Escribe tu nombre" />
        </label>

        <label className="font-body text-sm font-semibold text-cafe/80">
          Teléfono
          <input className="input mt-2" name="telefono" required placeholder="Ej. 614 000 0000" />
        </label>

        <label className="font-body text-sm font-semibold text-cafe/80">
          ¿Asistirás?
          <select className="input mt-2" name="asistencia" required defaultValue="">
            <option value="" disabled>Selecciona una opción</option>
            <option value="Sí asistiré">Sí asistiré</option>
            <option value="No podré asistir">No podré asistir</option>
          </select>
        </label>

        <label className="font-body text-sm font-semibold text-cafe/80">
          Número de asistentes
          <input className="input mt-2" name="invitados" type="number" min="1" max="6" required placeholder="Ej. 2" />
        </label>

        <label className="font-body text-sm font-semibold text-cafe/80">
          Comentarios
          <textarea className="input mt-2 min-h-28 resize-none" name="comentarios" placeholder="Alergias, dudas o mensajito para las novias" />
        </label>

        <button className="btn-primary w-full" disabled={status === 'loading'}>
          <Send size={18} />
          {status === 'loading' ? 'Enviando...' : 'Confirmar asistencia'}
        </button>

        {status === 'success' && (
          <p className="rounded-2xl bg-oliva/10 p-4 text-center font-body text-sm font-semibold text-oliva">
            Confirmación enviada. Gracias por formar parte de nuestra historia.
          </p>
        )}

        {status === 'error' && (
          <p className="rounded-2xl bg-red-50 p-4 text-center font-body text-sm font-semibold text-red-700">
            No se pudo enviar. Intenta de nuevo o confirma por WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}
