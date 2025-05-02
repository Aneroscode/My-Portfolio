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
        primary: '#1f2937',
        secondary: '#2f27ce',
        accent: '#8B5CF6',
        navy: '#0E0F52',
        accent2:'#1A2BC3',
        primary2:'#000298',
        backgroundImage: {
          'sunset-gradient': 'linear-gradient(90deg, #ffa585, #ffeda0)',
        },
        
      },
      fontFamily: {
        sans: ['Calibre', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

