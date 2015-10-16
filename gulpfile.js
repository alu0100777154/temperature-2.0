var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
    open = require('gulp-open');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');

gulp.task('minify', function () {
  gulp.src('temperature.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'));

  gulp.src('./*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'));
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});

gulp.task("test", function(){
  gulp.src('')
    .pipe(open({ uri: 'https://alu0100777154.github.io/temperature-2.0/vendor/'}));
});