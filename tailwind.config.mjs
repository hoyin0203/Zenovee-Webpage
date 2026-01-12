import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,211,238,.15), 0 0 32px rgba(34,211,238,.12)"
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(60% 50% at 50% 0%, rgba(34,211,238,.18) 0%, rgba(0,0,0,0) 60%), radial-gradient(40% 40% at 0% 40%, rgba(14,116,144,.22) 0%, rgba(0,0,0,0) 60%), radial-gradient(45% 45% at 100% 40%, rgba(6,182,212,.14) 0%, rgba(0,0,0,0) 60%)"
      }
    }
  },
  plugins: [typography]
};

