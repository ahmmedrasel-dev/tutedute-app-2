/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tutePrimary: '#800080',
        tuteSecondary: 'rgba(128, 0, 128, 0.25)',
      },
      letterSpacing: {
        code: '0.75em',
      }
    },
  },
  plugins: [require("daisyui")],
}
