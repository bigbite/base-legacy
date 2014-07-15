/*--------------------------------------------------*\
  Clean dirs
\*--------------------------------------------------*/

// Modules
var gulp = require('gulp');
var del = require('del');

// Task
gulp.task('clean', function(cb) {
  del(global.config.dist + '/assets', cb);
});
