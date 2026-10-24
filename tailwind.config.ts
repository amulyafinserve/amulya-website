import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#060B13",
          50: "#1A2333",
          100: "#141D2C",
          200: "#0E1726",
          300: "#0B132B",
          400: "#080F1F",
          500: "#060B13",
        },
        navy: {
          surface: "#0E1726",
          elevated: "#121D30",
          card: "#09101C",
          deep: "#0B132B",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F5D061",
          hover: "#E6BE44",
          dark: "#B89326",
          ochre: "#F59E0B",
          50: "#FFFBEB",
          100: "#FEF3C7",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        emerald: {
          growth: "#10B981",
          deep: "#059669",
          glow: "rgba(16, 185, 129, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        gold: "0 0 25px -5px rgba(212, 175, 55, 0.25)",
        "gold-lg": "0 0 45px -10px rgba(212, 175, 55, 0.35)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-dark": "radial-gradient(at 10% 20%, rgba(212, 175, 55, 0.05) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(16, 185, 129, 0.04) 0px, transparent 50%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.15), transparent)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
