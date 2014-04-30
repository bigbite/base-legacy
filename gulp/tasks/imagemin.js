/*--------------------------------------------------*\
  Compress images
\*--------------------------------------------------*/

// Modules
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

// Task
gulp.task('imagemin', function() {
  var DEST = global.config.dist + '/assets/images';

  return gulp.src(global.config.src + '/images/**/*.{jpg,jpeg,png,gif}')
    .pipe(changed(DEST))
    .pipe(imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }))
    .pipe(gulp.dest(DEST))
});
