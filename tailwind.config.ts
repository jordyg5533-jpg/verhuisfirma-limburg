import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#132238", 700: "#1d3251", 500: "#3b5273", 300: "#8a9bb3" },
        kraft: { DEFAULT: "#c9a47c", 600: "#a9825a", 200: "#ead9c3", 100: "#f6f0e6", 50: "#fbf8f2" },
        signaal: { DEFAULT: "#e4572e", 600: "#c9431c", 100: "#fbe3da" },
      },
      fontFamily: {
        display: ['"Archivo Variable"', "system-ui", "sans-serif"],
        sans: ['"Public Sans Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: { content: "72rem" },
    },
  },
  plugins: [],
};
export default config;
