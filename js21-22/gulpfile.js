'use strict';
// Импортируем все наши плагины и сам gulp
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    babel = require("gulp-babel"),
    reload = browserSync.reload;
// Создаем объект в который пропишем все нужные нам пути, чтобы при необходимости легко в одном месте их редактировать
var path = {
    build: { // Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { // Пути откуда брать исходники
        html: 'src/*.html', // Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main.js',// В стилях и скриптах нам понадобятся только main файлы
        style: 'src/css/main.scss',
        img: 'src/img/**/*.*', // Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { // Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};
//  Создадим переменную с настройками нашего dev сервера
var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Puvvl"
};
// Таск для сборки html
gulp.task('html:build', function () {
    gulp.src(path.src.html) // Выберем файлы по нужному пути
        .pipe(rigger()) // Прогоним через rigger
        .pipe(gulp.dest(path.build.html)) // Выплюнем их в папку build
        .pipe(reload({stream: true})); // Перезагрузим наш сервер для обновлений
});
// Rigger это наш плагин, позволяющий использовать такую конструкцию для импорта файлов: //= template/footer.html
// Команда для сборки - gulp html:build

// Собираем JS, команда: gulp js:build
gulp.task('js:build', function () {
    gulp.src(path.src.js) // Найдем наш main файл
        .pipe(rigger()) // Прогоним через rigger
        .pipe(sourcemaps.init()) // Инициализируем sourcemap
        .pipe(babel({presets: ['babel-preset-es2015']})) // Перекодируем в ES5
        .pipe(uglify()) // Перекодируем в ES5
        .pipe(sourcemaps.write()) // Пропишем карты
        .pipe(gulp.dest(path.build.js)) // Выплюнем готовый файл в build
        .pipe(reload({stream: true})); // Перезагрузим сервер
});
// Собираем SCSS, команда: gulp style:build
gulp.task('style:build', function () {
    gulp.src(path.src.style) // Выберем наш main.scss
        .pipe(sourcemaps.init()) // Инициализируем sourcemap
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write()) // Пропишем карты
        .pipe(gulp.dest(path.build.css)) // Выплюнем готовый файл в build
        .pipe(reload({stream: true})); // Перезагрузим сервер
});
// Таск по картинкам, команда gulp image:build
gulp.task('image:build', function () {
    gulp.src(path.src.img) // Выберем наши картинки
        .pipe(imagemin({ // Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) // Выплюнем их в build
        .pipe(reload({stream: true})); // Перезагрузим сервер
});
// Таск по шрифтам, команда gulp fonts:build
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts) // Выберем наши шрифты
        .pipe(gulp.dest(path.build.fonts)) // Выплюнем их в build
});
// ВЫПОЛНИТЬ ВСЕ! Запустить: gulp build
gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'image:build',
    'fonts:build'
]);
// При изменении(либо добавлении) какого то файла автоматически запускать нужную задачу: gulp watch - не советую использовать команду в командной строке ;-)
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});
// Создание локального веб-сервера: gulp webserver
gulp.task('webserver', function () {
    browserSync(config);
}); // Запустим livereload сервер с настройками, которые определены в объекте config.
// ОЧИСТКА НЕ НУЖНЫХ ФАЙЛОВ В ПАПКЕ build, команда: gulp clean (очистит всю папку)!
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});
// Дефолтный таск, который будет запускать всю сборку, команда: gulp
gulp.task('default', ['build', 'webserver', 'watch']);
