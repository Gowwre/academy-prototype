/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
        colors: {
            "primary": "#53d22d",
            "background-light": "#f6f8f6",
            "background-dark": "#111111", // Deep charcoal for dark mode
            "surface-dark": "#1a1d1a", // Slightly lighter for cards
            "card-dark": "#1f251d",
            "border-dark": "#2d372a",
            "text-muted": "#a5b6a0",
            "text-secondary": "#a5b6a0"
        },
        fontFamily: {
            "display": ["Manrope", "sans-serif"],
            "sans": ["Manrope", "sans-serif"]
        },
        borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
    },
  },
  plugins: [],
}
