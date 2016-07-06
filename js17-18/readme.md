# Урок 17-18

﻿Плагины:

1. [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически добавляет вендорные префиксы к CSS свойствам
2. [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css) — нужен для сжатия CSS кода
3. [browser-sync](https://www.npmjs.com/package/browser-sync) — с помощью этого плагина мы можем легко развернуть локальный dev сервер с блэкджеком и livereload, а так же с его помощью мы сможем сделать тунель на наш localhost, что бы легко демонстрировать верстку заказчику
4. [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) — для сжатия картинок
5. [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) — дополнения к предыдущему плагину, для работы с PNG
6. [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) — будет сжимать наш JS
7. [gulp-sass](https://www.npmjs.com/package/gulp-sass) — для компиляции нашего SCSS кода
8. [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) — возьмем для генерации css sourscemaps, которые будут помогать нам при отладке кода
9. [gulp-rigger](https://www.npmjs.com/package/gulp-rigger) — это просто киллер фича. Плагин позволяет импортировать один файл в другой простой конструкцией `//= footer.html`и эта строка при компиляции будет заменена на содержимое файла footer.html
10. [gulp-watch](https://www.npmjs.com/package/gulp-watch) — Будет нужен для наблюдения за изменениями файлов. 
11. [rimraf](https://www.npmjs.com/package/rimraf) — что-бы можно было удалить папку node_modules

`Спасибо Frontend Devil за отличную подборку! :-)`

Домашнее задание:

1. Установить [node.js](https://nodejs.org/en/)
2. Установить [grunt.js](http://gruntjs.com/)
3. Настроить сборку проекта простого. Должны выполняться задачи по конкатенации и минификации ваших `js` и `css` файлов
4. Обычно системную папку `node_modules` принято добавлять в [.gitignore](https://git-scm.com/book/ru/v1/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B2-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B9#Игнорирование-файлов), поскольку там хранится очень много файлов, и держать их в репозитории плохая практика
5. Бонусное задание: настроить аналогичную сборку, но на [gulp.js](http://gulpjs.com/). Он немного сложнее для первого понимания, но более современный и быстрый. Настоятельно рекомендую вернуться к `gulp.js` после того как разберетесь с `grunt.js`
6. Для работы с командной строкой в Windows, вам может быть полезным использовать git bash


Полезные материалы:

1. [Стандартные команды ОС UNIX](https://ru.wikipedia.org/wiki/UNIX#.D0.A1.D1.82.D0.B0.D0.BD.D0.B4.D0.B0.D1.80.D1.82.D0.BD.D1.8B.D0.B5_.D0.BA.D0.BE.D0.BC.D0.B0.D0.BD.D0.B4.D1.8B_.D0.9E.D0.A1_UNIX)
2. [КОМАНДНАЯ СТРОКА WINDOWS](http://www.allmbs.ru/cmd-01.html)
3. [Несколько полезностей по работе с NPM](https://habrahabr.ru/post/206678/)
4. [Grunt для тех, кто считает штуки вроде него странными и сложными](http://frontender.info/grunt-is-not-weird-and-hard/)
5. [Grunt, инструмент для сборки javascript проектов](https://habrahabr.ru/post/148274/)
6. [Самые нужные плагины для Grunt](https://habrahabr.ru/post/251157/)
7. [Сборка проектов с помощью Gulp.js. Семинар в Яндексе](https://habrahabr.ru/company/yandex/blog/239993/)
8. [Приятная сборка frontend проекта](https://habrahabr.ru/post/250569/)
9. [Скринкаст по Gulp](http://learn.javascript.ru/screencast/gulp)
10. [Скринкаст Node.JS. Основные возможности и средства создания веб-сервисов, включая внутренние особенности самого сервера Node.JS](https://learn.javascript.ru/screencast/nodejs) - для тех кто хочет глубже разобраться в `Node.JS`
