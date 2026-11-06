// Editá los datos de la celebración aquí. Los enlaces vacíos quedan deshabilitados.
export const evento = {
  pareja: ['Ana', 'Bruno'], // Nombres en el orden en que se muestran.
  fecha: '2027-03-21T21:00:00-03:00', // Fecha y hora con desplazamiento UTC.
  zonaHoraria: 'America/Argentina/Buenos_Aires',
  lugar: 'La Escondida de Palermo',
  direccion: 'Av. Subida de los Ombúes 32, Ciudad Autónoma de Buenos Aires',
  mapsUrl: 'https://www.google.com/maps/dir//La+Escondida+de+Palermo+-+SAL%C3%93N+DE+EVENTOS,+Av.+Subida+de+los+Omb%C3%BAes+32,+C1425+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-38.661453,-62.2743921,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95bcb5a5f770f021:0x3be4248cda4f8dac!2m2!1d-58.4231576!2d-34.557838?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D', // Enlace público de Google Maps.
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
