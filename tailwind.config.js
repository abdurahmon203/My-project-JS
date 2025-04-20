 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {

      'xs': '360px',   // Phones
      'md': '670px',   // ipad
      'lg': '1280px',  // Desktops
  },
  fontFamily: {
    sans: ['Roboto', 'sans-serif'],
    fancy: ['"Comic Sans MS"', 'cursive'],
  },
  },
  plugins: [],
}

