var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var csscomb      = require('gulp-csscomb');
var cssnano      = require('gulp-cssnano');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};

var plumberOptions = {
  errorHandler: onError,
};

gulp.task('sass', function() {
  var postCSSOptions = require('./config.postcss.json');
  var autoprefixerOptions = postCSSOptions.autoprefixer;

  var sassOptions = {
    includePaths: [
      'node_modules/mq-sass/stylesheets',
    ]
  };

  return gulp.src('_sass/**/*.scss')
    .pipe(plumber(plumberOptions))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'));
});

gulp.task('dist:css', function() {
  return gulp.src('css/**/*.css')
    .pipe(csscomb('.csscomb.dist.json'))
    .pipe(cssnano())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  var browserSyncConfig = require('./bs-config.js');

  browserSync.init(browserSyncConfig);

  gulp.watch('_sass/**/*.scss', ['sass']);
});

gulp.task('build', ['sass']);

gulp.task('dist', ['build'], function() {
  gulp.start('dist:css');
});

gulp.task('default', ['build', 'watch']);
