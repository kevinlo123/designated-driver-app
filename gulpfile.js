const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass',() => {
   return gulp.src('src/stylesheets/scss/main.scss')
      .pipe(sass())
      .pipe(gulp.dest('src/stylesheets/css'))
      .pipe(browserSync.stream()); 
});

gulp.task('serve', ['sass'], () => {
   browserSync.init({
        server: './',
        directory: true 
   });
   gulp.watch('src/stylesheets/scss/*.scss',['sass']);
   gulp.watch('src/stylesheets/scss/*.scss').on('change', browserSync.reload);
   gulp.watch('src/javascript/*.js').on('change', browserSync.reload);           
   gulp.watch('public/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);