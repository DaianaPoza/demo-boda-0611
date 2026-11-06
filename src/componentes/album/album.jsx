import {evento} from '../../config/evento'
import Icono from '../../compartidos/icono'
import BotonEnlace from '../../compartidos/boton-enlace'
export default function Album(){return <section className="album section"><Icono nombre="camara"/><h2>Nuestros recuerdos</h2><p className="texto">Queremos revivir este día a través de tus fotos. Compartí tus momentos favoritos en nuestro álbum</p><BotonEnlace url={evento.albumUrl} tipo="" disponible="Compartí tus fotos" pendiente="Muy pronto"/></section>}

import './album.css'
