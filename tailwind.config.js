module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 1)' },
        },
      },
      animation: {
        'slide-down': 'slideDown 1s ease-out forwards',
        'glow': 'glow 1s infinite alternate',
      },
      boxShadow: {
        'glow': '0 0 10px rgba(255, 255, 255, 0.8)',
        'mercury': '0 0 20px 5px rgba(169, 169, 169, 0.3), 0 0 20px 10px rgba(211, 211, 211, 0.3)',  // Grey tones for Mercury
        'venus': '0 0 20px 5px rgba(255, 140, 0, 0.3), 0 0 20px 10px rgba(255, 69, 0, 0.3)',  // Orange tones for Venus
        'earth': '0 0 20px 5px rgba(0, 128, 255, 0.3), 0 0 20px 10px rgba(34, 139, 34, 0.3)',  // Blue and green tones for Earth
        'mars': '0 0 20px 5px rgba(210, 105, 30, 0.3), 0 0 20px 10px rgba(178, 34, 34, 0.3)',  // Red and brown tones for Mars
        'jupiter': '0 0 20px 5px rgba(218, 165, 32, 0.3), 0 0 20px 10px rgba(139, 69, 19, 0.3)',  // Gold and brown tones for Jupiter
        'saturn': '0 0 20px 5px rgba(255, 215, 0, 0.3), 0 0 20px 10px rgba(184, 134, 11, 0.3)',  // Yellow and gold tones for Saturn
        'uranus': '0 0 20px 5px rgba(173, 216, 230, 0.3), 0 0 20px 10px rgba(0, 206, 209, 0.3)',  // Light blue and cyan tones for Uranus
        'neptune': '0 0 20px 5px rgba(25, 25, 112, 0.3), 0 0 20px 10px rgba(72, 61, 139, 0.3)',  // Dark blue tones for Neptune
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
};
