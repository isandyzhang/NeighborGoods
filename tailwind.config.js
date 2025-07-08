/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-sans': ['Noto Sans TC', 'Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(0deg, rgba(229,201,168,0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(229,201,168,0.15) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      backgroundColor: {
        'pattern-base': '#FAF7F2',
      },
    },
  },
  plugins: [],
} 