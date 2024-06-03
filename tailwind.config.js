/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // SH
        laptop: "1560px",
        tab: "850px",
        xtab: "1050px",
        maxtab:"1300px"
      },
    },
  },
  plugins: [],
}