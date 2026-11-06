import {evento} from '../../config/evento'
import Icono from '../../compartidos/icono'
import BotonEnlace from '../../compartidos/boton-enlace'
export default function Playlist(){return <section className="playlist section"><Icono nombre="spotify"/><h2>La música la elegimos juntos</h2><p className="texto">Ayudanos a elegir las canciones que no pueden faltar</p><BotonEnlace url={evento.spotifyUrl} tipo="spotify" disponible="Agregá tus canciones" pendiente="Muy pronto"/></section>}

import './playlist.css'
