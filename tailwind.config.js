const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}'],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    // THEME
    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '1.875rem',
        },
      },
      // FONTS
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      fontSize: {
        // base: ['16px', '1.2'],
        // md: ['18px', '1.2'],
        // lg: ['20px', '1.2'],
        // xl: ['24px', '1.2'],
        // xxl: ['32px', '1.2'],
        // xxxl: ['40px', '1.2'],
      },
      // COLORS
      colors: {
        body: '#ffffff',
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};

export default config;
