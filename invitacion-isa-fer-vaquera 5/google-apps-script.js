/**
 * Google Apps Script para guardar confirmaciones en Google Sheets.
 *
 * Pasos:
 * 1. Crea una hoja de cálculo en Google Sheets.
 * 2. Ve a Extensiones > Apps Script.
 * 3. Pega este código.
 * 4. Cambia SPREADSHEET_ID por el ID de tu Google Sheet.
 * 5. Implementar > Nueva implementación > Aplicación web.
 * 6. Ejecutar como: tú.
 * 7. Acceso: cualquier usuario.
 * 8. Copia la URL de la app web.
 * 9. En Vercel agrega NEXT_PUBLIC_RSVP_ENDPOINT con esa URL.
 */

const SPREADSHEET_ID = 'PEGA_AQUI_EL_ID_DE_TU_GOOGLE_SHEET';
const SHEET_NAME = 'Confirmaciones';

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME)
    || SpreadsheetApp.openById(SPREADSHEET_ID).insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Fecha registro', 'Nombre', 'Teléfono', 'Asistencia', 'Número de asistentes', 'Comentarios']);
  }

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.fechaRegistro || new Date(),
    data.nombre || '',
    data.telefono || '',
    data.asistencia || '',
    data.invitados || '',
    data.comentarios || '',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
