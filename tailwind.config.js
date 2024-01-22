/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // header: ["EB Garamond", "serif"],
        // body: ["Montserrat", "sans-serif"],
        body: ["Bai Jamjuree", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(0px)" },
          "33%": { transform: "translateX(10px)" },
          "66%": { transform: "translateX(-4px)" },
          "100%": { transform: "translateX(0px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        fadeInSlide: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        rotate: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotateWord: {
          '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
        },
        leftLine: {
          "0%": { transform: "scaleX(0.4)", "transform-origin": "0% 0%" },
          "100%": { transform: "scaleX(1)", "transform-origin": "0% 0%" },
        },
        bubble: {
          "0%": { transform: "translateY(0px)", "opacity": "0" },
          "50%": { opacity: 100 },
          "75%": { opacity: 100 },
          "100%": { transform: "translateY(-80vh)", "opacity": "0" },
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out",
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
        fadeInSlide: "fadeIn 0.7s ease-in-out forwards",
        rotate: "rotate 0.6s ease-in-out both",
        leftLine:
          "leftLine 1.7s  cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
          rotateWord: "rotateWord 40s linear infinite",
        bubble: "bubble 7s linear infinite",
      },
      colors: {
        mkPrimary: "#0d0a09",
        mkSecondary: "#f89844",

        mkBlue: "#007fff",
        mkPurple: "#f89844",
        mkGray: "#a6adb9",
        mkDarkGray2: "#0F0F0F",
        mkDarkGray: "#191a1e",
        mkWhite: "#eae9ea",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #103b68, #241b28)",
      },
    },
  },
  plugins: [],
};
