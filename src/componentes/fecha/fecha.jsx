import {fechaParte} from '../../config/evento'
export default function Fecha(){return <section id="fecha" className="fecha section"><p className="eyebrow">RESERVÁ ESTE DÍA</p><div className="fecha-composicion"><span className="fecha-dia">{fechaParte({weekday:'long'})}</span><div><span className="fecha-numero">{fechaParte({day:'numeric'})}</span><h2>de {fechaParte({month:'long',year:'numeric'})}</h2></div><span className="fecha-hora">{fechaParte({hour:'2-digit',minute:'2-digit',hourCycle:'h23'})} hs.</span></div><p>Una fecha. Mil momentos por vivir.</p></section>}

import './fecha.css'
