/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a192f',
        primary: '#64ffda',
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

