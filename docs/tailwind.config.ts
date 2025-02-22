import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                dark: {
                    50: "var(--dark-50)",
                    100: "var(--dark-100)",
                    200: "var(--dark-200)",
                    300: "var(--dark-300)",
                    400: "var(--dark-400)",
                    500: "var(--dark-500)",
                    600: "var(--dark-600)",
                    700: "var(--dark-700)",
                    800: "var(--dark-800)",
                    900: "var(--dark-900)"
                }
            }
        }
    },
    plugins: []
} satisfies Config;
