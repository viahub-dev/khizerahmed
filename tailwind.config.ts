import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FFFFFF",
          dark: "#0B1220"
        },
        "bg-secondary": {
          dark: "#111827"
        },
        card: {
          DEFAULT: "#FAF3E8",
          dark: "#1A2333"
        },
        cardBorder: {
          DEFAULT: "#E7D7C9",
          dark: "#FFFFFF1A"
        },
        ink: {
          DEFAULT: "#2F2A28",
          dark: "#F8FAFC"
        },
        "ink-muted": {
          DEFAULT: "#5E524B",
          dark: "#94A3B8"
        },
        accent: {
          DEFAULT: "#7D1128",
          hover: "#651022",
          dark: "#22D3EE",
          darkHover: "#67E8F9"
        },
        walnut: {
          DEFAULT: "#8B6B4A"
        }
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      maxWidth: {
        content: "1120px"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
