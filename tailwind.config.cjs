/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#ff7a70',       // Main accent (Pink Orange)
        'accent-pink': '#f472b6',  // Sub accent
        'bg-dark': '#0f172a',      // Base background
        'bg-card': '#162036',      // Card background (Deep Cyan/Navy)
        'cyan-glow': '#008b8b'     // Glow effect Cyan
      },
      fontFamily: {
        'sans': ["'LINE Seed JP'", "sans-serif"],
        'display': ["'LINE Seed JP'", "sans-serif"]
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff7a70",
          "secondary": "#f472b6",
          "accent": "#008b8b",
          "neutral": "#162036",
          "base-100": "#0f172a",
        },
      },
      "dim"
    ],
  },
};
