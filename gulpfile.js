'use strict';

const gulp          = require('gulp');
const browserify    = require('browserify');
const babelify      = require('babelify');
const source        = require('vinyl-source-stream');
const notifier      = require('node-notifier');
const sass          = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const concat        = require('gulp-concat');
const merge         = require('merge-stream');
const minify        = require('gulp-minify-css');
const uglify        = require('gulp-uglify');

const jsSourceFiles = [
  './src/js/app.js'
];

gulp.task('build', () => {
  return browserify({entries: jsSourceFiles, extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', ['build'], () => {
  gulp.watch('src/js/*.js', ['build']);
});

gulp.task('sass', () => {
  let scssStream = gulp.src(['src/sass/**/*.scss'])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat('scss-files.scss'));

  let mergedStream = merge(scssStream)
    .pipe(concat('site.css'))
    .pipe(minify())
    .pipe(gulp.dest('dist/css'));

    return mergedStream;
});

gulp.task('default', ['build', 'sass'], () => {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['build']);
});

process.on('uncaughtException', (err) => {
  console.log(err);
  
  notifier.notify({
    title: 'Gulp Died',
    message: err
  });
  process.exit();
});