# Parroquia Nuestra Señora del Carmen — Sitio Web

Sitio web parroquial desarrollado con React, TypeScript, Vite y Tailwind CSS.
Incluye secciones informativas, horarios, grupos, contacto con Formspree/WhatsApp y módulo de Palabra del Día conectado a API.Bible.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Font Awesome
- ESLint

## Funcionalidades principales

- Hero con carrusel y bloque de “Próxima misa”.
- Palabra del Día (Evangelio + Reflexión) usando API.Bible.
- Horarios de Misas y Confesiones.
- Trámites y Sacramentos.
- Noticias y Eventos.
- Grupos parroquiales con modal de detalle.
- Contacto por formulario (Formspree) y botón de WhatsApp.
- Footer con enlaces de interés configurables por entorno.

## Requisitos

- Node.js 20+
- npm 10+

## Instalación y ejecución

1. Instalar dependencias:

```bash
npm install
```

2. Crear archivo de entorno:

```bash
cp .env.example .env
```

En Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

3. Ejecutar en desarrollo:

```bash
npm run dev
```

4. Compilar producción:

```bash
npm run build
```

5. Previsualizar build:

```bash
npm run preview
```

## Variables de entorno

Configura estas variables en `.env`:

### API.Bible

- `VITE_BIBLE_API_KEY`: clave de API.Bible.
- `VITE_BIBLE_API_BASE`: base URL (por defecto `https://rest.api.bible/v1`).
- `VITE_BIBLE_ID`: traducción de Biblia (por defecto `48acedcf8595c754-01`).

### Contacto

- `VITE_FORMSPREE_ENDPOINT`: endpoint de Formspree.
- `VITE_WHATSAPP_NUMBER`: número internacional sin `+` ni espacios.

### Enlaces institucionales

- `VITE_PARISH_FACEBOOK_URL`
- `VITE_ARQ_CBBA_URL`
- `VITE_OFM_BOLIVIA_URL`
- `VITE_CEB_URL`
- `VITE_VATICAN_NEWS_URL`
- `VITE_FRANCISCANOS_BOLIVIA_URL`

> Si no configuras alguna variable, el proyecto usa valores por defecto definidos en `src/data/siteData.ts`.

## Scripts disponibles

- `npm run dev`: inicia servidor local con HMR.
- `npm run build`: compila en `dist/`.
- `npm run preview`: sirve la build localmente.
- `npm run lint`: ejecuta ESLint.
- `npm run deploy`: publica `dist/` en GitHub Pages.

## Despliegue (GitHub Pages)

Este proyecto ya incluye scripts para `gh-pages`:

```bash
npm run deploy
```

Esto ejecuta `predeploy` (`npm run build`) y luego publica `dist/`.

## Estructura resumida

- `src/components/layout`: navbar y footer.
- `src/components/sections`: secciones principales de la home.
- `src/components/modals`: modales (detalle de grupos).
- `src/services`: integración con API.Bible.
- `src/data`: enlaces, grupos y configuración del sitio.
- `public/hero-carousel`: imágenes y logos del hero.

## Notas técnicas

- Si falta `VITE_BIBLE_API_KEY`, la sección Palabra del Día mostrará mensaje de configuración en lugar de datos.
- El estilo visual está unificado con una línea moderna de acentos cálidos y tonos slate para contraste.
