/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        primary: '#000000',
        secondary: '#8892b0',
        accent: '#112240',
      },
      fontFamily: {
        sans: ['Calibre', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

