import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { server } from './gulp/tasks/server.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';
import { sprite } from './gulp/tasks/sprite.js';
import { deploy } from './gulp/tasks/deploy.js';

const { watch, series, parallel, task } = gulp;

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

function watcher() {
  watch(path.watch.html, series(html, scss));
  watch(path.watch.data, series(html, scss));
  watch(path.watch.scss, scss);
  watch(path.watch.tailwindcss, scss);
  watch(path.watch.js, js);
  watch(path.watch.images, images);
}

const mainTasks = parallel(fonts, html, scss, js, images, sprite);

export const dev = series(reset, mainTasks, parallel(watcher, server));
export const build = series(reset, mainTasks);

task('default', dev);

task('deploy', deploy);
