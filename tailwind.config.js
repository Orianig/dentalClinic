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
          100: '#F9F0DF',
          900: '#FEFBF3'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

