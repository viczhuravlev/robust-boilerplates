'use strict';

const del = require('del');
const gulp = require('gulp');
const concat = require('gulp-concat');

/**
 * HTML
 * */
const pug = require('gulp-pug');

/**
 * Style
 * */
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

/**
 * JavaScript
 * */
const uglify = require('gulp-uglify');

/**
 * Sprite IMG
 * */
const spritesmith = require('gulp.spritesmith');

/**
 * Notification
 */
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

/**
 * Server JetBrains
 * */
const connect = require('gulp-connect');

/**
 * Constants
 */
const DIR = 'build/';
const PORT = 8888;


/**
 * Tasks for templates
 * */
gulp.task('templates', function (done) {
  gulp
    .src('src/views/*.pug')
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Views',
            message: err.message,
          };
        }),
      })
    )
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest(DIR))
    .pipe(connect.reload());

  done();
});

/**
 * Tasks for style
 * */
gulp.task('style', function (done) {
  gulp
    .src('src/scss/*.{css,scss}')
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Styles',
            message: err.message,
          };
        }),
      })
    )
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(DIR))
    .pipe(connect.reload());

  done();
});

/**
 * Tasks for JavaScript
 * */
gulp.task('script', function (done) {
  gulp
    .src('src/js/*.js')
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'JavaScript',
            message: err.message,
          };
        }),
      })
    )
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(DIR + 'js'))
    .pipe(connect.reload());

  done();
});

gulp.task('libScript', function (done) {
  gulp
    .src('src/js/vendor/*.*')
    .pipe(gulp.dest(DIR + 'js/vendor/'))
    .pipe(connect.reload());

  done();
});

/**
 * Tasks for fonts
 * */
gulp.task('fonts', function (done) {
  gulp
    .src('src/fonts/**/*.*')
    .pipe(gulp.dest(DIR + 'fonts'))
    .pipe(connect.reload());

  done();
});

/**
 * Tasks for images
 * */
gulp.task('images', function (done) {
  gulp
    .src(['src/images/**/*.*', '!frontend/images/sprite/*.*'])
    .pipe(gulp.dest(DIR + 'images'))
    .pipe(connect.reload());

  done();
});

/**
 * Tasks for sprite IMG
 * */
gulp.task('sprite', function (done) {
  var spriteData = gulp.src('src/images/sprite/*.*').pipe(
    spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      cssFormat: 'scss',
      imgPath: './images/sprite/sprite.png',
      algorithm: 'binary-tree',
      cssVarMap: function (sprite) {
        sprite.name = 'icon-' + sprite.name;
      },
    })
  );

  spriteData.img.pipe(gulp.dest(DIR + 'images/sprite/'));
  spriteData.css.pipe(gulp.dest('src/scss/utils/'));

  done();
});

/**
 * Tasks for video
 * */
gulp.task('video', function (done) {
  gulp
    .src('src/video/**/*.*')
    .pipe(gulp.dest(DIR + 'video'))
    .pipe(connect.reload());

  done();
});

/**
 * Watching
 * */
gulp.task('watch', function (done) {
  gulp.watch('src/views/**/*.*', gulp.series('templates'));
  gulp.watch('src/scss/**/*.*', gulp.series('style'));
  // gulp.watch('src/js/**/*.*', gulp.series('script'));
  gulp.watch('src/js/*.js', gulp.series('script'));
  gulp.watch('src/js/vendor/*.*', gulp.series('libScript'));
  gulp.watch('src/fonts/*.*', gulp.series('fonts'));
  gulp.watch('src/images/sprite/*.*', gulp.series('sprite'));
  gulp.watch(['src/images/**/*.*', '!frontend/images/sprite/*.*'], gulp.series('images'));
  gulp.watch('src/video/**/*.*', gulp.series('video'));

  done();
});

/**
 * Delete folder public
 * */
gulp.task('clean', function (done) {
  del(DIR);

  done();
});

/**
 * Simple server http://localhost:8888/
 * */
gulp.task('connect', function (done) {
  connect.server({
    root: DIR,
    PORT: PORT,
    livereload: true,
  });

  done();
});

gulp.task(
  'build',
  gulp.series(
    'templates',
    'sprite',
    'style',
    'libScript',
    'script',
    'fonts',
    'images',
    'video'
  )
);

gulp.task('default', gulp.series('build'));

gulp.task('watching', gulp.series('build', 'watch', 'connect'));
