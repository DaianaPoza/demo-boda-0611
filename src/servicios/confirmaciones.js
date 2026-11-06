import { enlaceValido } from '../compartidos/enlaces.js'

export const personaVacia = () => ({ nombreApellido: '', restriccion: '', detalleRestriccion: '' })
export function prepararConfirmacion(nombre, cantidad, personas) {
  const errores = {}
  const total = Number(cantidad)
  if (!nombre.trim()) errores.responsable = 'Ingresá tu nombre y apellido.'
  if (!Number.isSafeInteger(total) || total < 1) errores.cantidad = 'Ingresá un número entero mayor o igual a 1.'
  const asistentes = (errores.cantidad ? [] : personas.slice(0, total)).map((persona, i) => {
    const nombreApellido = (i === 0 ? nombre : persona.nombreApellido).trim()
    if (!nombreApellido) errores[`nombre-${i}`] = 'Ingresá el nombre y apellido.'
    if (!['si', 'no'].includes(persona.restriccion)) errores[`restriccion-${i}`] = 'Seleccioná Sí o No.'
    const detalle = persona.restriccion === 'si' ? persona.detalleRestriccion.trim() : ''
    if (persona.restriccion === 'si' && !detalle) errores[`detalle-${i}`] = 'Contanos cuál es la restricción alimentaria.'
    return { nombreApellido, tieneRestriccion: persona.restriccion === 'si', detalleRestriccion: detalle }
  })
  if (!errores.cantidad && asistentes.length !== total) errores.cantidad = 'Completá los datos de todas las personas.'
  return { errores, datos: { nombreResponsable: nombre.trim(), cantidadInvitados: asistentes.length, asistentes } }
}

export async function enviarConfirmacion(endpoint, datos) {
  const url = enlaceValido(endpoint, 'apps')
  if (!url) throw new Error('La confirmación estará disponible próximamente')
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 20000)
  try {
    const respuesta = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(datos), redirect: 'follow', mode: 'cors', credentials: 'omit', signal: controller.signal,
    })
    if (!respuesta.ok || respuesta.type === 'opaque') throw new Error('Respuesta no verificable')
    const resultado = await respuesta.json()
    if (resultado?.ok !== true) throw new Error('Guardado no confirmado')
    return resultado
  } catch {
    throw new Error('No pudimos verificar si se guardó tu confirmación. Conservamos tus datos. Antes de reenviar, consultá con la pareja para evitar duplicados.')
  } finally { clearTimeout(timeout) }
}
