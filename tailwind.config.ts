import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'from-[#A8A878]',
   'from-[#F08030]',
    'from-[#6890F0]',
    'from-[#F8D030]',
    'from-[#78C850]',
    'from-[#98D8D8]',
    'from-[#C03028]',
    'from-[#A040A0]',
    'from-[#E0C068]',
    'from-[#A890F0]',
    'from-[#F85888]',
    'from-[#A8B820]',
    'from-[#B8A038]',
    'from-[#705898]',
    'from-[#7038F8]',
    'from-[#705848]',
    'from-[#B8B8D0]',
    'from-[#EE99AC]',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
