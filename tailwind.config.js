const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,njk,js,json}'],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1024px',
      xxl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1023.98px' },
      notXl: { max: '1023.98px' },
    },
    // THEME
    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '12px',
          sm: '12px',
          md: '20px',
          xl: '20px',
          xxl: '76px',
        },
      },
      // FONTS
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      // COLORS
      colors: {
        body: '#f3f6f9',
        black: {
          DEFAULT: '#000000',
          main: ' #212121',
        },
        white: '#ffffff',
        gray: '#637093',
        blue: {
          DEFAULT: '#255ced',
          light: '#5685ff',
        },
        orange: '#fd6230',
        yellow: '#fedb0d',
      },
    },
  },
  plugins: [],
};

export default config;
