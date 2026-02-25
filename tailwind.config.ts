import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        conventual: {
          light: '#F8F4EC',  // Marfil cálido franciscano
          ash: '#5A5F7A',    // Azul pizarra mariano
          habit: '#1F2D3D',  // Azul noche (San Maximiliano)
          gold: '#CBA052',   // Oro carmelita litúrgico
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
