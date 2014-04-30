/*--------------------------------------------------*\
  Watch
\*--------------------------------------------------*/

// Modules
var gulp = require('gulp');
var args = require('yargs').argv

// Task
gulp.task('watch', function() {

  var lrFiles = [
    global.config.dist + '/**/*.{html,php,css,js,png,jpg,jpeg,gif,svg}'
  ];

  gulp.watch(global.config.src + '/styles/**', ['styles']);
  gulp.watch(global.config.src + '/scripts/**', ['scripts']);
  gulp.watch(global.config.src + '/images/**/*.{png,jpg,jpeg,gif}', ['images']);
  gulp.watch(global.config.src + '/images/**/*.{svg}', ['svg']);
  gulp.watch(global.config.src + '/static/**', ['static']);

  /**
   * Include LiveReload
   * `$ gulp watch -l
   */
  if (args.l) {
    var lr = require('gulp-livereload');
    var server = lr();

    gulp.watch(lrFiles).on('change', function(file) {
      server.changed(file.path);
    });
  }

  /**
   * Spin up Connect server
   * `$ gulp watch -c`. Use `$ gulp watch -lc` for LiveReload + Connect
   */
  if (args.c) {
    var connect = require('connect');
    var http = require('http');

    var app = connect()
      .use(connect.logger('dev'))
      .use(connect.static(global.config.dist));

    http.createServer(app).listen('8080');
  }

  /**
   * Use BrowserSync
   * `$ gulp watch -s`
   */
  if (args.s) {
    var browserSync = require('browser-sync');

    browserSync.init(lrFiles, {

      // Create server
      server: {
        baseDir: global.config.dist
      }

      // Use existing
      // proxy: 'local.dev'
    });
  }

});
