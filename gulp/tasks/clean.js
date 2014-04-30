/*--------------------------------------------------*\
  Clean dirs
\*--------------------------------------------------*/

// Modules
var gulp = require('gulp');
var clean = require('gulp-clean');

// Task
gulp.task('clean', function() {
  return gulp.src([
      global.config.dist + '/assets',
    ], {read: false})
    .pipe(clean());
});
