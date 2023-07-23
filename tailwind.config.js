/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: { default: '700px' },
      backgroundColor: {
        'theme-light': 'white',
        'theme-dark': '#22272e',
      },
      colors: {
        'theme-light': '#22272e',
        'theme-dark': 'white',
      },
    },
  },
  plugins: [],
};
