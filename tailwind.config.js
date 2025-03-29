export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'glow': {
          '0%': { boxShadow: '0 0 0 rgba(255,255,255,0)' },
          '100%': { boxShadow: '0 0 30px rgba(255,255,255,0.3)' }
        },
        'grow': {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' }
        },
        'shine': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '0% center' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'grow': 'grow 0.7s ease-out forwards',
        'shine': 'shine 2s linear infinite'
      }
    }
  },
  plugins: [],
}
