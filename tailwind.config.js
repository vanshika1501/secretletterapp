/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
      'fade-in': 'fadeIn 0.5s ease-out forwards',

    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0, transform: 'scale(0.95)' },
        '100%': { opacity: 1, transform: 'scale(1)' },
      },
     
    },
      colors: {
        description: '#52514e',
        sandstorm: '#f7cb45',
        coal: '#252424',
        purpdark:'#6e5e9c',
        purple2: '#cdb3d6',
        purple3:'#6c3f7c',
        purple:'#ead7ef',
        purple4:'#9B7EBD',
        purple5:'#F7CFD8',
       animepurple:'#ffebfd'
      },
      fontFamily: {
        motley: ['MotleyForces', 'sans-serif'],
        shifty: ['ShiftyNotes', 'sans-serif'],
        momentra: ['Momentra', 'sans-serif']
      },
    },
  },
  safelist: [
    'bg-fuchsia-400',
    'bg-sky-400',
    'bg-red-400',
    'bg-green-400',
    'bg-lime-400',
    'font-momentra',
    'font-shifty',
    'font-motley',
  ],
  plugins: [require('tailwind-scrollbar')],
};
