// Editá los datos de la celebración aquí. Los enlaces vacíos quedan deshabilitados.
export const evento = {
  pareja: ['Ana', 'Bruno'], // Nombres en el orden en que se muestran.
  fecha: '2027-03-21T21:00:00-03:00', // Fecha y hora con desplazamiento UTC.
  zonaHoraria: 'America/Argentina/Buenos_Aires',
  lugar: 'Nombre del salón',
  direccion: 'Dirección del evento',
  mapsUrl: '', // Enlace público de Google Maps.
  alias: 'nuestra.boda', cbu: '', titular: '', // Datos de transferencia.
  spotifyUrl: '', // https://open.spotify.com/playlist/...
  albumUrl: '', // Enlace al álbum colaborativo externo.
  confirmacionEndpoint: '', // URL de la aplicación web de Apps Script, terminada en /exec.
  climaUrl: '', // Enlace al pronóstico del lugar.
  musica: '', // Por ejemplo: audio/nuestra-cancion.mp3 (archivo en public/audio/).
}
export const nombres = evento.pareja.join(' y ')
export function fechaParte(options) {
  return new Intl.DateTimeFormat('es-AR', { ...options, timeZone: evento.zonaHoraria }).format(new Date(evento.fecha))
}
