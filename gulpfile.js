'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./#src/scss/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 8 versions']
        }))
        .pipe(gulp.dest('./app/css/'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('fileinclude', function () {
    return gulp.src(['./#src/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./app/'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('js', function () {
    return gulp.src(['./#src/js/script-adtv.js', './#src/js/spoiler.js', './#src/js/main.js', './#src/js/slick.min.js', './#src/js/jquery.magnific-popup.min.js'])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app/js/'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('./#src/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('./#src/**/*.html', gulp.parallel('fileinclude'));
    gulp.watch('./#src/js/*.js', gulp.parallel('js'));
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));