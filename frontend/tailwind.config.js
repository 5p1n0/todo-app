module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      gridTemplateColumns: {
        'header': 'repeat(2, 1fr)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
