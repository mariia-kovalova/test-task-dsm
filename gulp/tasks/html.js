import fs from 'fs';
import data from 'gulp-data';
import webHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import nunjucksRender from 'gulp-nunjucks-render';

const getData = () => {
  return JSON.parse(fs.readFileSync('./src/json/data.json'));
};

export const html = () => {
  const { gulp, path, plugins, isBuild } = app;

  return gulp
    .src(path.src.html)
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: 'HTML',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(data(getData))
    .pipe(
      nunjucksRender({
        path: ['src/html'],
        watch: true,
      }),
    )
    .pipe(plugins.replace(/@img\//g, 'img/'))
    .pipe(plugins.gulpIf(isBuild, webHtmlNosvg()))
    .pipe(
      plugins.gulpIf(
        isBuild,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        }),
      ),
    )
    .pipe(gulp.dest(path.build.html))
    .pipe(plugins.browserSync.stream());
};
