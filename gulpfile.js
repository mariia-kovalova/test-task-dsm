import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { reset } from "./gulp/tasks/reset.js";
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { server } from "./gulp/tasks/server.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { fonts } from "./gulp/tasks/fonts.js";

const { watch, series, parallel, task } = gulp;

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

function watcher() {
  watch(path.watch.files, copy);
  watch(path.watch.html, html);
  watch(path.watch.scss, scss);
  watch(path.watch.js, js);
  watch(path.watch.images, images);
}

const mainTasks = parallel(fonts, copy, html, scss, js, images);

const dev = series(reset, mainTasks, parallel(watcher, server));

task("default", dev);
