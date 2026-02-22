import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        conventual: {
          light: '#F5F5F4',  // Fondo cálido (Stone 100)
          ash: '#78716c',    // Gris ceniza (Stone 600)
          habit: '#292524',  // Negro hábito (Stone 900)
          gold: '#A8864D',   // Oro litúrgico
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
