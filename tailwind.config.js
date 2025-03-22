/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    fontSize: {
      sm: '11px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      label: '13px',
    },
    extend: {
      colors: {
        'textColor': '#44576A',
        'emblemColor': '#3BD0B9',
        'backgroundColor': '#EEF4F8',
        'actionColor': '#2D87F0',
        'strokeColor': '#2D87F0',
        'primaryColor': '#000000',
        'secondaryColor': '#6A6A6A',
        'ctaColor': '#2D87F0',
        'borderColor': '#D0D0D0',
      },
      borderColor: {
        DEFAULT: '#D0D0D0',
      },
      maxWidth: {
        'wrapper': '1200px',
      },
      boxShadow: {
        'tooltip': '6px 6px 12px 0px rgba(0, 0, 0, 0.15)',
      },
    }
  },
  plugins: [],
}

