/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f2',
          100: '#fdeee4',
          200: '#fad9c3',
          300: '#f6be99',
          400: '#f0996c',
          500: '#e87a4a',
          600: '#d85e3b',
          700: '#b44a2f',
          800: '#903e2b',
          900: '#753527',
        },
        gold: {
          50: '#fefdf8',
          100: '#fdf9ed',
          200: '#faf0d0',
          300: '#f5e1a7',
          400: '#edcd76',
          500: '#e4b84f',
          600: '#d4a13c',
          700: '#b08531',
          800: '#8f6b2c',
          900: '#785827',
        },
        earth: {
          50: '#f9f7f4',
          100: '#f2ede6',
          200: '#e3d7ca',
          300: '#d1bca6',
          400: '#bd9d80',
          500: '#a68362',
          600: '#936f55',
          700: '#7a5a47',
          800: '#654a3c',
          900: '#533d32',
        }
      },
      fontFamily: {
        'display': ['Georgia', 'Times New Roman', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'kente-pattern': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\"><rect width=\"60\" height=\"60\" fill=\"%23e87a4a\" opacity=\"0.1\"/><path d=\"M0 0h20v20H0zm20 20h20v20H20zm20 20h20v20H40zM0 40h20v20H0z\" fill=\"%23d4a13c\" opacity=\"0.15\"/></svg>')",
      }
    },
  },
  plugins: [],
};