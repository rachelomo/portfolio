// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//       },

//       colors: {
//         cosmic: {
//           dark: "#05020F",
//           purple: "#6D28D9",
//           blue: "#4F46E5",
//         },
//       },

//       backgroundImage: {
//         hero:
//           "radial-gradient(circle at top right,#7c3aed20 0%,transparent 30%),linear-gradient(to bottom,#05020F,#090313,#05020F)",
//       },

//       boxShadow: {
//         glow:
//           "0 0 100px rgba(124,58,237,.35)",
//       },

//       animation: {
//         float: "float 6s ease-in-out infinite",
//       },

//       keyframes: {
//         float: {
//           "0%,100%": {
//             transform: "translateY(0px)",
//           },
//           "50%": {
//             transform: "translateY(-15px)",
//           },
//         },
//       },
//     },
//   },

//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      /* KEEPING YOUR PREVIOUS FONT */

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      /* KEEPING YOUR PREVIOUS COLORS + ADDING NEW ONES */

      colors: {
        cosmic: {
          dark: "#05020F",
          purple: "#6D28D9",
          blue: "#4F46E5",
        },

        primary: "#8B5CF6",
        secondary: "#A855F7",
        card: "#070711",
        dark: "#03030A",
      },

      /* KEEPING YOUR HERO BG + ADDING NEW BACKGROUNDS */

      backgroundImage: {

        hero:
          "radial-gradient(circle at top right,#7c3aed20 0%,transparent 30%),linear-gradient(to bottom,#05020F,#090313,#05020F)",

        grid:
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",

        radial:
          "radial-gradient(circle at center, rgba(139,92,246,0.15), transparent 70%)",

        cardGlow:
          "radial-gradient(circle at top, rgba(139,92,246,0.18), transparent 70%)",

        premiumGradient:
          "linear-gradient(to bottom right,#050816,#070711,#0B1020)",
      },

      /* KEEPING YOUR GLOW + ADDING MORE SHADOWS */

      boxShadow: {

        glow:
          "0 0 100px rgba(124,58,237,.35)",

        soft:
          "0 0 60px rgba(139,92,246,0.18)",

        card:
          "0 0 80px rgba(139,92,246,0.12)",

        orb:
          "0 0 60px rgba(139,92,246,0.55)",
      },

      /* KEEPING FLOAT + ADDING MORE ANIMATIONS */

      animation: {

        float:
          "float 6s ease-in-out infinite",

        pulseSlow:
          "pulseSlow 8s ease-in-out infinite",

        orbit:
          "orbit 18s linear infinite",

        glow:
          "glow 4s ease-in-out infinite",

        shimmer:
          "shimmer 3s linear infinite",
      },

      /* KEEPING FLOAT KEYFRAME + ADDING NEW ONES */

      keyframes: {

        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-15px)",
          },
        },

        pulseSlow: {
          "0%,100%": {
            opacity: "0.7",
            transform: "scale(1)",
          },

          "50%": {
            opacity: "1",
            transform: "scale(1.08)",
          },
        },

        orbit: {
          from: {
            transform: "rotate(0deg)",
          },

          to: {
            transform: "rotate(360deg)",
          },
        },

        glow: {
          "0%,100%": {
            boxShadow:
              "0 0 20px rgba(139,92,246,0.3)",
          },

          "50%": {
            boxShadow:
              "0 0 50px rgba(139,92,246,0.6)",
          },
        },

        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },

          "100%": {
            backgroundPosition: "200% 0",
          },
        },
      },

      /* ADDITIONAL PREMIUM UTILITIES */

      backdropBlur: {
        xs: "2px",
      },

      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  plugins: [],
}