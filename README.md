# Parroquia Nuestra Señora del Carmen — Sitio Web

Sitio web parroquial desarrollado con React, TypeScript, Vite y Tailwind CSS.
Incluye secciones informativas, horarios, grupos, contacto con Formspree/WhatsApp y módulo de Palabra del Día conectado a Liturgical Calendar API.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Font Awesome
- ESLint

## Funcionalidades principales

- Hero con carrusel y bloque de “Próxima misa”.
- Palabra del Día: Evangelio y Reflexion desde Liturgical Calendar API.
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

### Liturgical Calendar API

- `VITE_LITCAL_API_BASE`: base URL de LitCal (por defecto `https://litcal.johnromanodorazio.com:443/api/v5/calendar`).
- `VITE_LITCAL_LOCALE`: locale para LitCal (por defecto `en_US`).

### Analítica

- `VITE_GA_ID`: identificador de Google Analytics 4 (ejemplo `G-XXXXXXXXXX`).

> Si no configuras `VITE_GA_ID`, Analytics no se inicializa.

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
- `src/services`: integración con Liturgical Calendar API.
- `src/data`: enlaces, grupos y configuración del sitio.
- `public/hero-carousel`: imágenes y logos del hero.

## Notas técnicas

- Si falta LitCal o no hay datos del dia, la sección Palabra del Dia mostrara un mensaje de error.
- El estilo visual está unificado con una línea moderna de acentos cálidos y tonos slate para contraste.
