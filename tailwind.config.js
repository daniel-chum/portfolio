module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'lora': ["'Lora', sans-serif"],
        'open-sans': ["'Open Sans', sans-serif"],
      },
      fontSize: {
        'sm': '.825rem'
      },
      letterSpacing: {
        'tighest': '-.09em'
      },
      colors: {
        primary: "var(--primary)",
        'primary-dark': "var(--primary-dark)",
        secondary: "var(--secondary)",
        'secondary-dark': "var(--secondary-dark)",
        word: 'var(--word)',
        'word-dark': 'var(--word-dark)'
      },
      screens: {
        '3xl': '1600px'
      },
      boxShadow: {
        full: "0 2px 5px 2px #0f2f4a",
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
      },
      keyframes: {
        show: {
          '0%, 50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        arrowDown: {
          '0%, 5%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(90%)' },
        }
      },
      animation: {
        show: 'show 3s ease-in 0s 1 normal',
        arrowDown: 'arrowDown 1.1s ease-in-out 4.4s infinite alternate',
      }
    },
  },
  variants: {
    extend: {
      overflow: ['hover'],
    },
  },
  plugins: [],

};
