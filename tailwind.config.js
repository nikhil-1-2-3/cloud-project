/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7B1E1E',
          dark: '#5C1515',
        },
        secondary: '#D4A017',
        background: {
          DEFAULT: '#1A1512',
          surface: '#251E1A',
        },
        text: {
          primary: '#FFF8E7',
          secondary: '#D4C4B0',
        },
        accent: '#C95A2B',
        border: '#3D322E',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
