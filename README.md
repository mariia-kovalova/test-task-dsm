# TEST TASK DMS

[DEMO](https://mariia-kovalova.github.io/test-task-dsm/)

## 1) Запуск проекту

Встановлення залежностей проекту:

```
pnpm install / yarn / npm i
```

Щоб запустити проект в режимі розробки:

```
pnpm run dev / yarn run dev / npm run dev
```

Щоб створити білд для продакшену:

```
pnpm build / yarn build / npm run build
```

## 2) Інформація про збірку

- В збірці використовується шаблонизатор
  [Nunjucks](https://mozilla.github.io/nunjucks/templating.html)

- В збірці використовується CSS framework
  [Tailwind](https://tailwindcss.com/docs/installation) і SASS (SCSS)

- В збірці є автоматична оптимізація усіх зображень.

- В збірці є автоматичне створення WEBP зображень: треба додати вихідне jpg або
  png зображення і збірка автоматично створить webp, з назвою картинки як і в
  вихідного зображення.

- В збірці є автоматичне створення SPRITE.SVG
