import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
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
      gridTemplateColumns: {
        "auto-300": "repeat(auto-fit,minmax(300px,1fr))",
        "auto-500": "repeat(auto-fit,minmax(500px,1fr))",
        "auto-340": "repeat(auto-fit,minmax(340px,1fr))",
      },
      gridTemplateRows: {
        "auto-300": "repeat(auto-fit,minmax(150px,1fr))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },

      screens: {
        sm: "360px",
        md: "768px",
        lg: "1440px",
        xl: "1920px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
