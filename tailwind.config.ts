import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        tilt: {
          "0%": {
            transform: "rotate(-45deg) scale(3)",
          },
          "25%": {
            transform: "rotate(-15deg) scale(3)",
          },
          "50%": {
            transform: "rotate(0deg) scale(3)",
          },
          "75%": {
            transform: "rotate(15deg) scale(3)",
          },
          "100%": {
            transform: "rotate(-45deg) scale(3)",
          },
        },
        "tilt-small": {
          "0%": {
            transform: "rotate(-45deg)",
          },
          "25%": {
            transform: "rotate(-15deg)",
          },
          "50%": {
            transform: "rotate(0deg)",
          },
          "75%": {
            transform: "rotate(15deg)",
          },
          "100%": {
            transform: "rotate(-45deg)",
          },
        },
        "move-random": {
          "0%": {
            transform: "translate(0, 0)",
          },
          "20%": {
            transform: "translate(-50px, 80px)",
          },
          "30%": {
            transform: "translate(-160px, -30px)",
          },
          "40%": {
            transform: "translate(-40px, 20px)",
          },
          "50%": {
            transform: "translate(-50px, -50px)",
          },
          "60%": {
            transform: "translate(-60px, 30px)",
          },
          "70%": {
            transform: "translate(-40px, -60px)",
          },
          "80%": {
            transform: "translate(-30px, 50px)",
          },
          "90%": {
            transform: "translate(20px, -40px)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
      animation: {
        tilt: "tilt 30s linear infinite",
        "tilt-small": "tilt-small 20s linear infinite",
        "move-random": "move-random 30s infinite linear",
        "spin-slow": "spin 7s infinite linear",
      },
    },
  },
  plugins: [],
} satisfies Config;
