import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import webpcss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import postcssScss from 'postcss-scss';
import tailwindcss from 'tailwindcss';

const sass = gulpSass(dartSass);

export const scss = () => {
  const { gulp, path, plugins, isDev } = app;

  return gulp
    .src(path.src.scss, { sourcemaps: isDev })
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: 'SCSS',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(
      webpcss({
        webpClass: '.webp',
        noWebpClass: '.no-webp',
      }),
    )
    .pipe(
      postcss([tailwindcss], {
        parser: postcssScss,
      }),
    )
    .pipe(plugins.replace(/@img\//g, '../img/'))
    .pipe(
      autoPrefixer({
        grid: true,
        cascade: true,
        overrideBrowserlist: ['last 3 versions'],
      }),
    )
    .pipe(gulp.dest(path.build.css))
    .pipe(cleanCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(path.build.css))
    .pipe(plugins.browserSync.stream());
};
