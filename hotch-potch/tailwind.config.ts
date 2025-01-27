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
        background: "var(--background)",
        foreground: "var(--foreground)",
        black : "#12141d",
        headlineColor : "#fafafa",
        paragraphColor: "#b7b8bb",
        lgBlue: "#0ea5e9"

      },
    },
    fontSize: {
      default: "18px",
      sm : "16px",
    }, 
    fontWeight: {
      default: "400",
      sm: "500",
      md: "600",
      light:"300"
    },
    lineHeight: {
      default: "28px",
      sm : "34px",
    }

  },
  plugins: [],
} satisfies Config;
