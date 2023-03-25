/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryText: 'hsla(var(--color-primary) / 1)',
      card1: 'hsla(var(--card-1) / 1)',
      card2: 'hsla(var(--card-2) / 1)',
      card3: 'hsla(var(--card-3) / 1)',
      card4: 'hsla(var(--card-4) / 1)',
    },
    screens: {
      'mobile': '400px',
    },
    fontFamily: {
      'body': ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', '-apple- system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto','ui-serif', 'Georgia'],
    }
  },
  plugins: [],
}
