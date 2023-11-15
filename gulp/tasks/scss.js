import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import groupMediaQuires from "gulp-group-css-media-queries";
import webpcss from "gulp-webpcss";
import autoPrefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";

const sass = gulpSass(dartSass);

export const scss = () => {
  const { gulp, path, plugins } = app;

  return gulp
    .src(path.src.scss, { sourcemaps: true })
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(plugins.replace(/@img\//g, "../img/"))
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(groupMediaQuires())
    .pipe(
      webpcss({
        webpClass: ".webp",
        noWebpClass: ".no-webp",
      })
    )
    .pipe(
      autoPrefixer({
        grid: true,
        cascade: true,
        overrideBrowserlist: ["last 3 versions"],
      })
    )
    .pipe(gulp.dest(path.build.css))
    .pipe(cleanCss())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest(path.build.css))
    .pipe(plugins.browserSync.stream());
};
