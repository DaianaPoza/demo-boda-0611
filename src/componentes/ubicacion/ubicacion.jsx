import {evento} from '../../config/evento'
import Icono from '../../compartidos/icono'
import BotonEnlace from '../../compartidos/boton-enlace'
export default function Ubicacion(){return <section className="ubicacion section"><Icono nombre="pin"/><p className="eyebrow">EL LUGAR DEL ENCUENTRO</p><h2>Dónde celebramos</h2><h3>{evento.lugar}</h3><p>{evento.direccion}</p><BotonEnlace url={evento.mapsUrl} disponible="Cómo llegar" pendiente="Ubicación próximamente"/></section>}

import './ubicacion.css'
