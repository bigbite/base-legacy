/*--------------------------------------------------*\
  Compile styles
\*--------------------------------------------------*/

// Modules
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var header = require('gulp-header');
var prefix = require('gulp-autoprefixer');
var handleErrors = require('../util/handleErrors');

// Task
gulp.task('styles', function() {
  return gulp.src(global.config.src + '/styles/main.scss')
    .pipe(sass({
      sourcemap: false,
      style: 'compressed'
    }))
    .on('error', handleErrors)
    .pipe(prefix('last 2 version', '> 1%'))
    .pipe(header(global.config.banner))
    .pipe(gulp.dest(global.config.dist + '/assets/styles'));
});
