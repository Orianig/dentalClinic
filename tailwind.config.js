/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#79B4B7',
        secondary:{
          100: '#edebeb',
          500: '#EBA603',
          900: '#E0DDDD'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

