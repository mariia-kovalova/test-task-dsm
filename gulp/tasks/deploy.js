import ghPages from 'gulp-gh-pages';

export const deploy = () => {
  const { gulp } = app;

  return gulp.src('./dist/**/*').pipe(ghPages());
};
