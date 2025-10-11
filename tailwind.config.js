/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#054861',      // Dark blue from original site
        'secondary': '#1c465f',    // Lighter blue for hover states
        'accent': '#F59E0B',       // Orange/amber for highlights
        'dark': '#1F2937',         // Dark gray for text
        'light': '#F3F4F6',        // Light gray for backgrounds
      },
      fontFamily: {
        title: ['"Lato"', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        body: ['"Bai Jamjuree"', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        sans: ['"Bai Jamjuree"', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
      },
    },
  },
  plugins: [],
}