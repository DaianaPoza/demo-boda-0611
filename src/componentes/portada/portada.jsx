import { evento, nombres, fechaParte } from '../../config/evento'
import Icono from '../../compartidos/icono'
export default function Portada({onIngresar}) { return <section className="portada" aria-label="Bienvenida"><div className="portada-marco"><span className="eyebrow">UNA INVITACIÓN PARA VOS</span><div className="portada-centro"><span className="sello">{evento.pareja[0]?.[0]} <i>&</i> {evento.pareja[1]?.[0]}</span><p className="eyebrow">NOS CASAMOS</p><h1>{nombres}</h1><p>Hay días que se sueñan.<br/>Y personas con quienes queremos compartirlos.</p><button className="boton" onClick={onIngresar}>Ingresar<Icono nombre="flecha"/></button></div><span className="portada-fecha">{fechaParte({day:'2-digit',month:'2-digit',year:'numeric'}).replaceAll('/', ' · ')}</span></div></section> }

import './portada.css'
