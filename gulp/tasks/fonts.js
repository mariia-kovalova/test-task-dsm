export const fonts = () => {
  const { gulp, path, plugins } = app;

  return gulp
    .src(path.src.fonts)
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "FONTS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(gulp.dest(path.build.fonts));
};
