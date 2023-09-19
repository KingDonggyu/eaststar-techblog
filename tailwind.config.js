const colors = {
  teal: '#2dd4bf',
  teal200: '#0d9488',
  white: 'white',
  dark: '#22272e',
  gray: '#e5e7eb',
  gray200: '#6b7280',
  gray300: '#424242',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: { default: '700px' },
      backgroundColor: {
        'theme-light': colors.white,
        'theme-dark': colors.dark,
      },
      colors: {
        'theme-light': colors.gray300,
        'theme-dark': colors.white,
        primary: colors.teal,
        primary200: colors.teal200,
        date: colors.gray200,
        line: colors.gray,
      },
      boxShadow: {
        default: 'rgba(0, 0, 0, 0.08) 2px 4px 12px',
        hover: 'rgba(0, 0, 0, 0.16) 2px 4px 16px',
      },
      screens: {
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
        mobile: { max: '700px' },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        leftSlide: {
          '0%': { marginLeft: '100%' },
          '100%': { marginLeft: 0 },
        },
        rightSlide: {
          '0%': { marginLeft: '-100%' },
          '100%': { marginLeft: 0 },
        },
        themePulse: {
          '0%': { color: colors.white },
          '100%': { color: colors.dark },
        },
        pulse: {
          '50%': { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s',
        leftSlide: 'leftSlide 0.5s',
        rightSlide: 'rightSlide 0.5s',
        themePulse: 'themePulse 2s Infinite',
      },
    },
  },
  plugins: [],
};
