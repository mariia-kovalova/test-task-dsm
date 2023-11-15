import svgSprite from "gulp-svg-sprite";

export const sprite = () => {
  const { gulp, path, plugins } = app;

  return gulp
    .src(path.src.sprite)
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "SVG",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(gulp.dest(path.build.images));
};
