/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      colors: {
        'gray': "#eae9e3",
        'yellow': "#ffed00"
      },
      fontFamily: {
        'inter': "'inter' ,sans serif",
      },
      boxShadow: {
      'shadow-custom-xl': "2px 2px 2px #000000",
      }
    },
  },
  plugins: [],
}

