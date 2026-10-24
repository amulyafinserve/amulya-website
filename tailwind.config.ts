import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amulya: {
          orange: {
            DEFAULT: "#EA580C", // Vibrant Amulya Orange
            light: "#FB923C",
            hover: "#D94E06",
            50: "#FFF7ED",
            100: "#FFEDD5",
            200: "#FED7AA",
            500: "#F97316",
            600: "#EA580C",
            700: "#C2410C",
          },
          blue: {
            DEFAULT: "#0284C7", // Amulya Cerulean / Teal Blue
            light: "#38BDF8",
            hover: "#0369A1",
            50: "#F0F9FF",
            100: "#E0F2FE",
            500: "#0284C7",
            600: "#0369A1",
            700: "#075985",
            navy: "#0A1E3F",
            deep: "#0B1528",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15, 23, 42, 0.08)",
        card: "0 10px 30px -5px rgba(2, 132, 199, 0.08), 0 4px 12px -2px rgba(234, 88, 12, 0.05)",
        orange: "0 4px 20px -2px rgba(234, 88, 12, 0.35)",
        blue: "0 4px 20px -2px rgba(2, 132, 199, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
