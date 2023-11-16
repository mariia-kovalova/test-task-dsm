import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.+(html|nunjucks|njk)`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.(svg)`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    sprite: `${srcFolder}/sprite/*.svg`,
    data: `${srcFolder}/json/**/*`,
  },
  watch: {
    html: `${srcFolder}/**/*.+(html|nunjucks|njk)`,
    scss: `${srcFolder}/scss/**/*.scss`,
    tailwindcss: './tailwind.config.js',
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    data: `${srcFolder}/json/**/*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
