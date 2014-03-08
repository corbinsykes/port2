var gulp = require('gulp');
var gulputil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

gulp.task('index', function() {
  gulp.src('index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('scripts', function() {
  gulp.src('src/assets/js/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('styles', function() {
  gulp.src('src/assets/stylesheets/*')
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('images', function() {
  gulp.src('src/assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
});


gulp.task('default', ['index', 'scripts', 'styles', 'images'], function() {

  gulp.watch('index.html', function() {
    gulp.run('index');
  });

  gulp.watch('src/assets/stylesheets/*.scss', function() {
    gulp.run('styles');
  });

  gulp.watch('src/assets/js/*.js', function() {
    gulp.run('scripts');
  });

  gulp.watch('src/assets/images', function() {
    gulp.run('images');
  });
});