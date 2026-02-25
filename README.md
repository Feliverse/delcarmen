# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Configuración API.Bible

1. Copia `.env.example` a `.env`
2. Completa `VITE_BIBLE_API_KEY` con tu clave de API.Bible
3. (Opcional) Ajusta `VITE_BIBLE_ID` para cambiar la traducción

Variables usadas:

- `VITE_BIBLE_API_KEY`
- `VITE_BIBLE_API_BASE` (por defecto `https://rest.api.bible/v1`)
- `VITE_BIBLE_ID`

## Configuración Contacto (Formspree + WhatsApp)

1. En `.env`, configura `VITE_FORMSPREE_ENDPOINT` con tu endpoint de Formspree (ej. `https://formspree.io/f/xxxxabcd`)
2. Configura `VITE_WHATSAPP_NUMBER` con formato internacional sin `+` ni espacios (ej. `5917XXXXXXX`)

Variables usadas:

- `VITE_FORMSPREE_ENDPOINT`
- `VITE_WHATSAPP_NUMBER`

## Configuración Footer (redes y enlaces)

En `.env`, puedes personalizar los enlaces del pie de página:

- `VITE_PARISH_FACEBOOK_URL`
- `VITE_ARQ_CBBA_URL`
- `VITE_OFM_BOLIVIA_URL`
- `VITE_CEB_URL`
- `VITE_VATICAN_NEWS_URL`

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
