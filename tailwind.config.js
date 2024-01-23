/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xl.5': '1520px',
        '2xl': '1536px',
        '3xl': '2000px'
      },
      spacing: {
        '500': '1100px',
      },
    },
  },
}
