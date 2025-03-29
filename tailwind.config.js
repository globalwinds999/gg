
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'glow': 'glow 2s infinite alternate',
        'grow': 'grow 0.5s ease-out forwards',
        'shine': 'shine 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #fff' },
          '100%': { boxShadow: '0 0 20px #0ff' }
        },
        grow: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' }
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        }
      }
    }
  },
  plugins: [],
}
