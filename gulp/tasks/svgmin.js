/*--------------------------------------------------*\
  Compress SVG files
\*--------------------------------------------------*/

// Modules
var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var svg2png = require('gulp-svg2png');
var changed = require('gulp-changed');

// Task
gulp.task('svgmin', function() {
  var DEST = global.config.dist + '/assets/images';

  return gulp.src(global.config.src + '/images/**/*.svg')
    .pipe(changed(DEST))
    .pipe(svgmin([
      {removeViewBox: false},            // Keep viewBox attr
      {cleanupIDs: false},               // Keep ID's
      {removeHiddenElems: false},        // Keep opacity="0" elems
      {_collections: false},             // Keep preserveAspectRatio
      {removeUnknownsAndDefaults: false} // Keep ID on <svg> tag
    ]))
    .pipe(gulp.dest(DEST))
});
