import { useEffect } from 'react'

// Solo se prepara el contenido estático; los campos dinámicos quedan fuera.
export default function useApariciones(contenedor, activo) {
  useEffect(() => {
    const raiz = contenedor.current
    if (!activo || !raiz || typeof IntersectionObserver === 'undefined') return
    const preferencia = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (preferencia.matches) return

    const elementos = [...raiz.querySelectorAll([
      '.hero-copy > *', '.hero-top', '.hero-scroll',
      '.section:not(.confirmacion) > :not([hidden]):not(.datos-regalos)',
      '.confirmacion', '.clima > *', '.footer > *',
    ].join(','))]
    const revelar = elemento => {
      elemento.classList.remove('aparicion-pendiente')
      elemento.classList.add('aparicion-visible')
      observador.unobserve(elemento)
    }
    const observador = new IntersectionObserver(entradas => {
      entradas.forEach(entrada => { if (entrada.isIntersecting) revelar(entrada.target) })
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' })

    elementos.forEach(elemento => {
      const indice = [...elemento.parentElement.children].indexOf(elemento)
      elemento.style.setProperty('--aparicion-demora', `${Math.min(indice, 3) * 45}ms`)
      elemento.classList.add('aparicion-pendiente')
      observador.observe(elemento)
    })
    // El foco por teclado nunca debe quedar en contenido invisible.
    const alEnfocar = evento => {
      const elemento = evento.target.closest('.aparicion-pendiente')
      if (elemento) revelar(elemento)
    }
    const mostrarTodo = () => {
      if (preferencia.matches) elementos.forEach(revelar)
    }
    raiz.addEventListener('focusin', alEnfocar)
    preferencia.addEventListener('change', mostrarTodo)
    return () => {
      observador.disconnect()
      raiz.removeEventListener('focusin', alEnfocar)
      preferencia.removeEventListener('change', mostrarTodo)
      elementos.forEach(elemento => {
        elemento.classList.remove('aparicion-pendiente', 'aparicion-visible')
        elemento.style.removeProperty('--aparicion-demora')
      })
    }
  }, [contenedor, activo])
}
