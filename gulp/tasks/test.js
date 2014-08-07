/**
 * Unit testing with Karma + PhamtomJS
 */
var gulp = require('gulp');
var karma = require('gulp-karma');

gulp.task('test', function() {
  return gulp.src([
      global.config.src  + '/scripts/app.js',
      global.config.src  + '/scripts/util/**/*.js',
      global.config.src  + '/scripts/module/**/*.js',
      global.config.test + '/spec/**/*.js'
    ])
    .pipe(karma({
      configFile: global.config.test + '/karma.conf.js'
    }))
    .on('error', function (err) {
      throw err;
    });
});
