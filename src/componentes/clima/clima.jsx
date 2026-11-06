import {evento} from '../../config/evento'
import {enlaceValido} from '../../compartidos/enlaces'
import Icono from '../../compartidos/icono'
export default function Clima(){const href=enlaceValido(evento.climaUrl);return <aside className="clima"><Icono nombre="clima"/><div><h2>¿Cómo estará el clima?</h2>{href?<a href={href} target="_blank" rel="noopener noreferrer">Consultá el pronóstico</a>:<p>Pronóstico disponible próximamente</p>}</div></aside>}

import './clima.css'
