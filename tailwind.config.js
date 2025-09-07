/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: "oklch(var(--primary))",
        secondary: "oklch(var(--secondary))",
        destructive: "oklch(var(--destructive))",
        muted: "oklch(var(--muted))",
        accent: "oklch(var(--accent))",
        card: "oklch(var(--card))",
        popover: "oklch(var(--popover))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};


