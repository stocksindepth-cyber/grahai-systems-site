/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // GrahAI Systems brand palette (re-themed to navy + teal — warm,
        // business-friendly). `navy` = primary dark surfaces/headings;
        // `azure` is now the TEAL accent (kept the name so every existing
        // azure-* class re-skins automatically to teal).
        navy: {
          700: "#1f3a5f",
          800: "#15293f",
          900: "#0f1f30",
        },
        ink: {
          950: "#050816",
          900: "#0a0f1f",
          800: "#0f172a",
          700: "#1e293b",
        },
        // Teal accent scale. 600 is the primary CTA (good contrast on white).
        azure: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
        },
        gold: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in": "fadeIn 0.4s ease-out",
        "gradient-x": "gradientX 8s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
