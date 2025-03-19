import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#a1adc2",
          100: "#8993a7",
          200: "#2c2e33",
          300: "#727b8e",
          400: "#525864",
          500: "#434750",
          600: "#373a40",
          700: "#2c2e33",
          800: "#212226",
          900: "#1a1b1e",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
