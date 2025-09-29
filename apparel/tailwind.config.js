export default {
  content: [
    "./index.html",             
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        bodoni: ['Bodoni Moda', 'serif'],
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shine: "shine 6s linear infinite",
      },
    },
  },
  plugins: [],
}
