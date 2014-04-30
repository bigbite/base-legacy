/*--------------------------------------------------*\
  Copy static files
\*--------------------------------------------------*/

// Modules
var gulp = require('gulp');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var minifyCss = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var header = require('gulp-header');
var changed = require('gulp-changed');

// Task
gulp.task('static', function() {

  // Filters
  var jsFilter = filter('**/*.js');
  var cssFilter = filter('**/*.css');

  // Dest
  var DEST = global.config.dist + '/assets/';

  return gulp.src(global.config.src + '/static/**')
    .pipe(changed(DEST))

    // .js filter
    .pipe(jsFilter)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(uglify())
    .pipe(header(global.config.banner))
    .pipe(jsFilter.restore())

    // .css filter
    .pipe(cssFilter)
    .pipe(prefix('last 2 version', '> 1%'))
    .pipe(minifyCss())
    .pipe(header(global.config.banner))
    .pipe(cssFilter.restore())

    .pipe(gulp.dest(DEST));
});
