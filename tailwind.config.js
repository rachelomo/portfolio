/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        cosmic: {
          dark: "#05020F",
          purple: "#6D28D9",
          blue: "#4F46E5",
        },
      },

      backgroundImage: {
        hero:
          "radial-gradient(circle at top right,#7c3aed20 0%,transparent 30%),linear-gradient(to bottom,#05020F,#090313,#05020F)",
      },

      boxShadow: {
        glow:
          "0 0 100px rgba(124,58,237,.35)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },
      },
    },
  },

  plugins: [],
}