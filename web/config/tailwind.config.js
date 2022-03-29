const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderRadius: {
      lg: '16px',
      ...defaultTheme.borderRadius,
    },
    fontFamily: {
      sans: ['"Segoe UI"'],
    },
    colors: {
      cyan: {
        primary: '#26abe2',
        secondary: '#dcedf3',
      },
      magenta: {
        primary: '#ea088c',
        secondary: '#e97ebd',
      },
      yellow: {
        primary: '#f8ef21',
        secondary: '#fffa9c',
      },
      gray: {
        primary: '#333333',
        secondary: '#707070',
      },
    },
    extend: {},
  },
  plugins: [],
}
