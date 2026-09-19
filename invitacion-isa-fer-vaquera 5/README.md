# Invitación digital Isa & Fer

Invitación digital premium para boda vaquera mexicana + París romántico.

## Datos incluidos

- Isa & Fer
- Viernes 23 de octubre de 2026
- Ceremonia: 7:00 PM
- Recepción: 9:00 PM
- Lugar: Granja La Tekahuita
- Tornaboda posible: Granja de Fanny, sábado 24 de octubre de 2026
- Dress code: Vaquero elegante
- Confirmación de asistencia por WhatsApp o Google Sheets

## Cómo instalar

```bash
npm install
npm run dev
```

Abre:

```bash
http://localhost:3000
```

## Cómo cambiar fotos

Reemplaza los SVG dentro de:

```text
public/images/
```

Por tus fotos reales usando los mismos nombres:

```text
hero-placeholder.svg
story-placeholder.svg
photo-placeholder-1.svg
...
```

También puedes cambiar las rutas directamente en `app/page.tsx`.

## Música

Agrega tu canción en:

```text
public/audio/song.mp3
```

El botón de música ya está listo.

## Google Sheets para confirmaciones

1. Crea una hoja en Google Sheets.
2. Copia el ID de la URL.
3. Abre `google-apps-script.js`.
4. Pega el ID en `SPREADSHEET_ID`.
5. Ve a Extensiones > Apps Script.
6. Pega el código.
7. Implementar > Nueva implementación > Aplicación web.
8. Ejecutar como: tú.
9. Acceso: cualquier usuario.
10. Copia la URL de la app web.
11. En Vercel agrega la variable:

```text
NEXT_PUBLIC_RSVP_ENDPOINT=https://script.google.com/macros/s/...
```

Si no agregas endpoint, el formulario abrirá WhatsApp con el mensaje de confirmación ya escrito.

## Vercel

1. Sube esta carpeta a GitHub.
2. Entra a Vercel.
3. New Project.
4. Elige el repositorio.
5. Deploy.

## Personalización rápida

La información principal está en:

```text
lib/wedding.ts
```

Ahí puedes cambiar fecha, lugar, teléfono, Google Maps, cupo y datos de tornaboda.

## Nota

Actualiza `metadataBase` en `app/layout.tsx` cuando ya tengas el enlace real de Vercel para que la vista previa de WhatsApp funcione mejor.
