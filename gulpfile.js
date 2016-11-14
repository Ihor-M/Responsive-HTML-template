var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');



gulp.task('styles', function () {
    return sass('assets/scss/*.scss', {
        style: 'compressed',
        loadPath: ['build/css']
    })
        .pipe(gulp.dest('public/css/'));
});

gulp.task('watch', function () {
    gulp.watch('assets/scss/*.scss', ['styles'])
});

gulp.task('default', ['styles', 'watch']);