/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      'custom-red': '#f36',
      blue: {
        800: '#1e3a8a'
      }
    }
  },
  plugins: [],
}

