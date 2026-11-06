import { enlaceValido } from './enlaces'
import Icono from './icono'
export default function BotonEnlace({url, tipo, disponible, pendiente}) {
 const href = enlaceValido(url, tipo)
 return href ? <a className="boton" href={href} target="_blank" rel="noopener noreferrer">{disponible}<Icono nombre="flecha"/></a> : <button className="boton" disabled>{pendiente}</button>
}
