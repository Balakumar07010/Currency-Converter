/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "2px 2px 10px gray",
        "6xl": "5px 5px 5px 1px rgba(148,145,145,0.75)",
      },
      dropShadow: {
        "8xl": "3px 12px 18px white",
      },
      animation: {
        wiggle: "wiggle 1s 1",
      },
      keyframes: {
        wiggle: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
    plugins: [],
  },
};
