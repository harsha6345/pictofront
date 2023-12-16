/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px", // Small devices (phones, 640px and up)
      md: "768px", // Medium devices (tablets, 768px and up)

      "md-lg": "900px",
      lg: "1024px", // Large devices (desktops, 1024px and up)
      xl: "1280px", // Extra large devices (large desktops, 1280px and up)
      "2xl": "1536px", // 2x Extra large devices (larger desktops, 1536px and up)
    },
    extend: {
      colors: {
        pictoblue: "#241033",
        pictored: "#d60606",
        pictoblue2: "rgb(45, 14, 68 )",
        pictobluetr: "rgb(46, 14, 99,0.7)",
        transpictoblue: "rgba(36,16,51,0.2)",
        transblack: "rgba(0,0,0,0.88)",
        shadowred: "rgba(214,73,103,0.7)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
