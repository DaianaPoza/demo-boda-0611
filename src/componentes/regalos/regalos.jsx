import {useState} from 'react'
import {evento} from '../../config/evento'
import Icono from '../../compartidos/icono'
import './regalos.css'

export default function Regalos() {
  const [abierto, setAbierto] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const datos = [['Alias', evento.alias], ['CBU', evento.cbu], ['Titular', evento.titular]]
    .filter(([, valor]) => valor.trim())

  async function copiar(valor, etiqueta) {
    setMensaje('')
    try {
      await navigator.clipboard.writeText(valor.trim())
      setMensaje(etiqueta === 'Alias' ? '¡Alias copiado!' : '¡CBU copiado!')
    } catch {
      setMensaje('No pudimos copiarlo. Seleccioná el dato y copialo manualmente.')
    }
  }

  function alternar() {
    setAbierto(valor => !valor)
    setMensaje('')
  }

  return (
    <section className="regalos section">
      <Icono nombre="regalo"/>
      <h2>Regalos</h2>
      <p className="texto">Lo más lindo es compartir este día con vos. Si además querés hacernos un regalo, podés ayudarnos a cumplir nuevos sueños.</p>
      <button className="boton" disabled={!datos.length} aria-expanded={abierto} aria-controls="datos-regalos" onClick={alternar}>
        {datos.length ? (abierto ? 'Ocultar alias' : 'Ver alias') : 'Datos disponibles próximamente'}
      </button>
      <div id="datos-regalos" className={`datos-regalos${abierto ? ' abierto' : ''}`} inert={!abierto} aria-hidden={!abierto}>
        <div className="datos-regalos-interior">
          <div className="datos-regalos-contenido">
            {datos.map(([etiqueta, valor]) => (
              <div className="dato-regalo" key={etiqueta}>
                <label htmlFor={`regalo-${etiqueta.toLowerCase()}`}>{etiqueta}</label>
                <input id={`regalo-${etiqueta.toLowerCase()}`} readOnly value={valor.trim()} onFocus={e => e.target.select()}/>
                {etiqueta !== 'Titular' && <button type="button" className="copiar" onClick={() => copiar(valor, etiqueta)}>Copiar {etiqueta.toLowerCase()}</button>}
              </div>
            ))}
            <p className="mensaje-copia" role="status" aria-live="polite">{mensaje}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
