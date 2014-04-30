/*--------------------------------------------------*\
  Compile scripts
\*--------------------------------------------------*/

// Modules
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var header = require('gulp-header');
var stylish = require('jshint-stylish');
var handleErrors = require('../util/handleErrors');

// Task
gulp.task('scripts', function() {
  return gulp.src([
      global.config.src + '/scripts/helpers.js',
      global.config.src + '/scripts/main.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))

    // Uncomment below to fail on error
    // .pipe(jshint.reporter('fail')).on('error', handleErrors)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(header(global.config.banner))
    .pipe(gulp.dest(global.config.dist + '/assets/scripts'));
});
