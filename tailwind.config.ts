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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      textColor: {
        primary: "var(--color-primary-blue)",
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
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
        "move-random": {
          "0%": {
            transform: "translate(0, 0)",
          },
          "20%": {
            transform: "translate(-50px, 40px)",
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
        rotate: "rotate 10s linear infinite",
        tilt: "tilt 30s linear infinite",
        "move-random": "move-random 30s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
