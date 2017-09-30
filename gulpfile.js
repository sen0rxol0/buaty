'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    cssnano = require('cssnano');
    
gulp.task('sass', function () {
    var plugins = [
        autoprefixer({browsers: ['last 2 version']}),
        cssnano()
    ];

    return gulp.src('./assets/sass/main.scss')
        .pipe(sourcemaps.write('.'))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./assets/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass','sass:watch']);