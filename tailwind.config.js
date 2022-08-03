/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        metus: {
          100: '#2b3743',
          200: '#202d36'
        },
        'metus-white': {
          100: '#fafafa'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
