/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Montserrat como fuente sans principal (light 300, regular 400, bold 700)
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Azul corporativo
          dark: '#1e40af',
          light: '#dbeafe'
        }
      }
    },
  },
  plugins: [],
}
