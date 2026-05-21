// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#8B5CF6",
//         dark: "#050816",
//         card: "#0F172A",
//       },

//       boxShadow: {
//         glow: "0 0 40px rgba(139,92,246,0.35)",
//       },

//       backgroundImage: {
//         grid: `
//           linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
//           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
//         `,
//       },
//     },
//   },
//   plugins: [],
// }

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}