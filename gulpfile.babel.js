'use strict';

import gulp         from 'gulp';
import browserify   from 'browserify';
import babelify     from 'babelify';
import source       from 'vinyl-source-stream';
import notifier     from 'node-notifier';
import sass         from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import concat       from 'gulp-concat';
import merge        from 'merge-stream';
import minify       from 'gulp-minify-css';
import uglify       from 'gulp-uglify';

const jsSourceFiles = [
  './src/js/app.js',
  './src/js/board.js',
  './src/js/game.js',
  './src/js/enemy.js',
  './src/js/player.js',
  './src/js/tank.js',
  './src/js/utility.js'
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