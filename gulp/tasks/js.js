import webpackStream from "webpack-stream";

export const js = () => {
  const { gulp, path, plugins, isDev, isBuild } = app;

  return gulp
    .src(path.src.js, { sourcemaps: isDev })
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      webpackStream({
        mode: isBuild ? "production" : "development",
        output: {
          filename: "app.min.js",
        },
      })
    )
    .pipe(gulp.dest(path.build.js))
    .pipe(plugins.browserSync.stream());
};
