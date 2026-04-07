/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50:  '#fdf8f0',
          100: '#f9edd8',
          200: '#f2d9b0',
          300: '#e8be81',
          400: '#dc9e50',
          500: '#d4853a',
          600: '#c46b2d',
          700: '#a35327',
          800: '#834326',
          900: '#6b3822',
          950: '#3a1c0f',
        },
        cream:    '#fdf6ec',
        espresso: '#1a0a00',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Lato', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
