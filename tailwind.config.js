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
            "primary": "#0959A2", // Blue
            "secondary": "#E8168C", // Pink
            "background-light": "#ffffff",
            "background-dark": "#ffffff", // Mapping to white for migration, will inspect usage
            "surface-dark": "#f8fafc", // Slate-50
            "card-dark": "#ffffff",
            "border-dark": "#e2e8f0", // Slate-200
            "text-muted": "#64748b", // Slate-500
            "text-secondary": "#475569" // Slate-600
        },
        backgroundImage: {
            "brand-gradient": "linear-gradient(to right, #0959A2, #E8168C)",
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
