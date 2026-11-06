export function enlaceValido(value, tipo) {
  try {
    const url = new URL(value.trim())
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) return ''
    if (tipo === 'spotify' && (url.protocol !== 'https:' || url.hostname !== 'open.spotify.com')) return ''
    if (tipo === 'apps' && (url.protocol !== 'https:' || url.hostname !== 'script.google.com' || !/^\/macros\/s\/[^/]+\/exec$/.test(url.pathname))) return ''
    return url.href
  } catch { return '' }
}
