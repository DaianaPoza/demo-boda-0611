const dibujos = {
  flecha: <><path d="M5 12h14m-5-5 5 5-5 5"/></>,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  regalo: <><path d="M3 9h18v4H3zM5 13v8h14v-8M12 9v12"/><path d="M12 9C3 9 5 1 9 4l3 5Zm0 0c9 0 7-8 3-5l-3 5Z"/></>,
  camara: <><path d="M3 7h5l2-3h4l2 3h5v14H3z"/><circle cx="12" cy="13" r="4"/></>,
  clima: <><path d="M8 19a4 4 0 1 1 1-7 5 5 0 1 1 9 7Z"/><path d="M5 3v2M1 7l2 1M10 3 9 5"/></>,
  traje: <><path d="m8 3-5 4v14h18V7l-5-4-4 9-4-9ZM8 3h8M12 12v9M7 5l-1 5 6 6 6-6-1-5"/></>,
  vestido: <><path d="M9 3v4l-2 4 2 3-5 7h16l-5-7 2-3-2-4V3M9 7h6M9 14h6"/></>,
  musica: <><path d="M9 18V5l11-2v13M9 8l11-2"/><ellipse cx="6" cy="18" rx="3" ry="2"/><ellipse cx="17" cy="16" rx="3" ry="2"/></>,
  pausa: <><path d="M8 5v14M16 5v14"/></>,
  spotify: <><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><g stroke="var(--paper)"><path d="M6 9c4-2 8-1.5 12 .5M7 12.5c3-1.5 7-1 10 .5M8 16c3-1 5-1 8 .5"/></g></>,
}
export default function Icono({nombre, ...props}) { return <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{dibujos[nombre]}</svg> }
