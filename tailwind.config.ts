import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          nutmeg: "hsl(14, 45%, 36%)",
          "dark-raspberry": "hsl(332, 51%, 32%)",
        },
        neutral: {
          "rose-white": "hsl(330, 100%, 98%)",
          eggshell: "hsl(30, 54%, 90%)",
          "light-grey": "hsl(30, 18%, 87%)",
          "wenge-brown": "hsl(30, 10%, 34%)",
          "dark-charcoal": "hsl(24, 5%, 18%)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
