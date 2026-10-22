# Tarjeta NFC Premium

Prototipo personal de tarjeta de presentación digital con diseño negro y dorado.

## Archivos
- `index.html`: estructura del perfil.
- `styles.css`: diseño responsive.
- `script.js`: datos personales, enlaces sociales y descarga de contacto `.vcf`.
- `assets/avatar.svg`: avatar provisional que puedes reemplazar.

## Probar en tu computadora
1. Descomprime la carpeta.
2. Abre la carpeta en Visual Studio Code.
3. Abre `index.html` directamente en tu navegador, o usa la extensión **Live Server** en VS Code y selecciona **Open with Live Server**.
4. Edita los valores del objeto `PROFILE` al inicio de `script.js`.
5. Guarda los cambios y actualiza el navegador.

## Personalizar
En `script.js`, modifica:
- `name`, `title`, `location`, `bio`
- `phone`, `email`, `whatsapp`
- `instagram`, `linkedin`, `tiktok`
- `photo`

Para ocultar una red social, deja su valor vacío (`""`). WhatsApp debe llevar el código de país y solo números, sin espacios ni signos; por ejemplo `5215512345678` (reemplázalo por tu número real).

Para una fotografía propia, guarda una imagen dentro de `assets/` y cambia `photo` a una ruta como `assets/mi-foto.jpg`.

## Importante sobre los enlaces
Los enlaces de redes son ejemplos genéricos hasta que pongas tus URLs reales. No publiques la página con datos de ejemplo.

## Preparar el NFC
1. Publica el sitio en un hosting HTTPS, por ejemplo GitHub Pages o Vercel.
2. Abre la URL pública desde otro dispositivo para comprobar que funciona.
3. Con una app de escritura NFC compatible con NDEF, escribe la URL completa como un registro de tipo URL en una etiqueta compatible.
4. Prueba la tarjeta en iPhone y Android. La etiqueta NFC no almacena los datos de contacto: abre el perfil web, que puedes actualizar después.

## Notas
- La descarga `.vcf` funciona desde el navegador y crea una tarjeta de contacto con los datos configurados.
- Para uso real, cambia el teléfono, correo, número de WhatsApp y redes.
- No incluyas información sensible que no quieras hacer pública.
- El prototipo no usa base de datos, analítica ni backend.
