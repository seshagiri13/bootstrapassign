var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync'); 

gulp.task('sass', function () {  
  gulp.src(['./scss/*.scss','./node_modules/bootstrap/scss/bootstrap.scss'])
      .pipe(sass({includePaths: ['scss']}))
      .pipe(gulp.dest('./css'));
});

gulp.task('js', function () {  
  gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js','./node_modules/jquery/dist/jquery.min.js',
  './node_modules/popper.js/dist/popper.js'])
      .pipe(gulp.dest('./js'));
});


gulp.task('browser-sync', function() {  
  browserSync.init(["./css/*.css", "./js/*.js"], {
      server: {
          baseDir: "./"
      }
  });
});

gulp.task('default', ['sass','js','browser-sync'], function () {  
  gulp.watch("./scss/*.scss", ['sass']);
});