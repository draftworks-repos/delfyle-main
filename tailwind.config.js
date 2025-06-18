/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      animation: {
        blob: "blob 7s infinite",
        'border-top': 'border-top 1.5s ease-in-out forwards',
        'border-right': 'border-right 1.5s ease-in-out forwards',
        'border-bottom': 'border-bottom 1.5s ease-in-out forwards',
        'border-left': 'border-left 1.5s ease-in-out forwards',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        'border-top': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        'border-right': {
          '0%': { height: '0%' },
          '100%': { height: '100%' }
        },
        'border-bottom': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        'border-left': {
          '0%': { height: '0%' },
          '100%': { height: '100%' }
        }
      },
    },
  },
  plugins: [],
};
