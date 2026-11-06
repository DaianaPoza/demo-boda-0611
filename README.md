# Ana y Bruno · Invitación de boda

Proyecto React + Vite implementado en la carpeta existente `demo-boda-0611`, sin dependencias adicionales.

## Iniciar

Desde esta carpeta en la terminal de Visual Studio Code:

```sh
npm install # Solo si faltan las dependencias
npm run dev
```

Abrí la URL que imprime Vite. Para generar la versión publicable: `npm run build` (carpeta `dist`). Para revisarla: `npm run preview`. La base relativa de Vite permite publicar en un subdirectorio, como GitHub Pages.

## Personalizar

Todos los datos están en `src/config/evento.js`: pareja, fecha ISO con desplazamiento UTC, zona horaria, lugar, dirección, enlaces, datos bancarios y endpoint. Las fechas visibles usan `Intl.DateTimeFormat` con esa zona horaria y el contador usa el mismo instante.

Poné el archivo de música en `public/audio/` y configurá `musica: 'audio/nombre-del-archivo.mp3'`, sin `public/`. No se incluye ninguna canción. La reproducción comienza por la interacción con Ingresar; si el navegador la rechaza, la invitación sigue funcionando. El control refleja los eventos reales del audio.

Cada sección tiene su JSX y CSS en `src/componentes/`. `src/index.css` contiene los estilos comunes. Los SVG compartidos están en `src/compartidos/`. Las tipografías Cormorant Garamond y Manrope se cargan desde Google Fonts, con alternativas locales si no hay conexión. Los enlaces vacíos o inválidos no permiten navegar. Se valida HTTP(S) y, para Spotify, el dominio exacto `open.spotify.com`.

## Confirmaciones y Google Apps Script

No se creó ni desplegó un backend, ni se conectó una planilla. Pegá en `confirmacionEndpoint` una URL HTTPS con formato `https://script.google.com/macros/s/ID_IMPLEMENTACION/exec`. Hasta entonces el formulario permanece editable, con envío deshabilitado y sin solicitudes.

`src/servicios/confirmaciones.js` envía POST con `Content-Type: text/plain;charset=utf-8`; el cuerpo es JSON serializado (el backend debe analizar `JSON.parse(e.postData.contents)`). Ejemplo del contrato, sin precargar estos datos en el formulario:

```json
{
  "nombreResponsable": "Ana Pérez",
  "cantidadInvitados": 2,
  "asistentes": [
    {"nombreApellido": "Ana Pérez", "tieneRestriccion": false, "detalleRestriccion": ""},
    {"nombreApellido": "Bruno García", "tieneRestriccion": true, "detalleRestriccion": "Celiaquía"}
  ]
}
```

El backend debe validar todos los campos, comprobar la cantidad y guardar antes de devolver una respuesta JSON legible con `{"ok":true}`. Un resultado `{"ok":false}` o una respuesta ilegible no se considera éxito. No debe devolver `ok: true` antes de completar la escritura. La primera persona siempre reutiliza el nombre del responsable. Los detalles de restricciones se limpian al elegir No y las personas removidas no se envían.

### CORS y redirecciones

El POST con tipo `text/plain` evita el preflight asociado al tipo `application/json`, pero no elimina la necesidad de que el servidor permita leer la respuesta desde el origen de la invitación. Se usa `mode: 'cors'`, sin credenciales, con `redirect: 'follow'`. ContentService redirige a `script.googleusercontent.com`: la implementación debe permitir completar esa redirección y leer el JSON final. Referencia oficial: https://developers.google.com/apps-script/guides/content

Al implementar Apps Script, configurá el acceso adecuado para que los invitados puedan enviar sin iniciar sesión y probá desde el origen real de publicación, también en ventana privada y en un celular. Una pantalla de login, bloqueo CORS, error HTTP, respuesta opaca o JSON sin `ok: true` produce un mensaje de resultado no verificable. Nunca se usa `no-cors`. Si la implementación no ofrece una respuesta legible por CORS, hará falta resolverlo del lado del servicio o mediante un backend propio; el frontend no puede concederse esos permisos.

La solicitud tiene un límite de 20 segundos. Un corte de red puede ocurrir después del guardado: por eso el mensaje pide consultar antes de reenviar. No hay reintentos automáticos. Se bloquean dobles clics durante el envío y nuevos envíos tras el éxito en la sesión actual. La deduplicación persistente entre recargas/dispositivos debe implementarse en el servidor si se necesita. No agregues secretos al archivo de configuración, porque el frontend es público.

## Verificación

- `npm run build`: compilación de producción.
- `node --test tests/confirmaciones.test.js`: seis pruebas de lógica con una y tres personas, nombres recortados, restricciones por persona, reducción, validación y bloqueo sin endpoint. Las respuestas de red se simulan para comprobar aceptación de `ok: true` y rechazo de errores/respuestas no verificables.
- La integración real queda pendiente de implementar Apps Script, configurar `/exec` y comprobar guardado y CORS desde la URL final. Las pruebas locales no confirman la integración con Google ni una planilla real.

La automatización del navegador no pudo iniciarse por un error del entorno (sandbox de cua_repl). Queda pendiente la revisión visual en escritorio y celular; no se afirma verificación de consola o reproducción real de audio.
