export const copy = () => {
  const { gulp, path } = app;

  return gulp.src(path.src.files).pipe(gulp.dest(path.build.files));
};
