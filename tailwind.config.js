/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ED8980",
        "secondary": "#E0383E"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

