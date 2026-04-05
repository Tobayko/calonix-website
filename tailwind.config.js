/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#262b2b",
        "on-primary": "#003739",
        "surface-container-low": "#171c1c",
        "surface-dim": "#0f1414",
        "on-tertiary-fixed": "#001f23",
        "on-surface-variant": "#bbc9ca",
        "on-primary-container": "#004a4e",
        "primary-fixed": "#6bf6ff",
        "background": "#0b0e0e",
        "primary": "#45dee7",
        "tertiary": "#79d9e6",
        "surface": "#0f1414",
        "outline-variant": "#3c494a",
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
