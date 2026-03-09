import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        conventual: {
          light: '#F3EEE4',  // Marfil tenue nocturno
          ash: '#4F5D78',    // Azul gris profundo
          habit: '#142033',  // Azul noche solemne
          gold: '#B7903F',   // Dorado envejecido litúrgico
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'], // Para títulos elegantes
        sans: ['var(--font-sans)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
