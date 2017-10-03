'use strict';

const gulp = require('gulp');
    
const sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    cssnano = require('cssnano');


const babel = require('gulp-babel'),
    // babili = require('gulp-babili'),
    concat = require('gulp-concat');

gulp.task('js', () =>
    gulp.src('assets/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env', 'minify'],
            comments: false
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/js/dist'))
);
    
gulp.task('sass', () => {
    var plugins = [
        autoprefixer({browsers: ['last 2 version']}),
        cssnano()
    ];

    return gulp.src('assets/sass/main.scss')
        .pipe(sourcemaps.write('.'))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', () => {
    gulp.watch('./assets/sass/*.scss', ['sass']);
    gulp.watch('./assets/js/*.js', ['js']);
});

gulp.task('default', ['sass', 'js','watch']);


// .pipe(babili({
//     mangle: {
//         keepClassName: true
//     }
// }))