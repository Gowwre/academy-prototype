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
            
            // Semantic Tokens
            "background": {
              "default": "#ffffff",
              "subtle": "#f8fafc", // slate-50
            },
            "surface": {
              "default": "#ffffff",
              "highlight": "#f1f5f9", // slate-100
              "subtle": "#f8fafc", // slate-50
            },
            "text": {
              "primary": "#0f172a", // slate-900
              "secondary": "#475569", // slate-600
              "tertiary": "#94a3b8", // slate-400
              "on-primary": "#ffffff",
            },
            "border": {
              "default": "#e2e8f0", // slate-200
              "subtle": "#f1f5f9", // slate-100
              "focus": "#0959A2", // primary
            }
        },
        backgroundImage: {
            "brand-gradient": "linear-gradient(to right, #0959A2, #E8168C)",
        },
        fontFamily: {
            "display": ["Manrope", "sans-serif"],
            "sans": ["Manrope", "sans-serif"]
        },
        borderRadius: {
            "DEFAULT": "1rem", 
            "lg": "2rem", 
            "xl": "3rem", 
            "full": "9999px"
        },
    },
  },
  plugins: [],
}
