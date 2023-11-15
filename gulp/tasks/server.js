export const server = () => {
  const { path, plugins } = app;

  plugins.browserSync.init({
    server: {
      baseDir: `${path.build.html}`,
    },
    notify: false,
    port: 3000,
  });
};
