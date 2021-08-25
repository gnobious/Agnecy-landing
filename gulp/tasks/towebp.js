const gulp = require('gulp');
const webp = require('gulp-webp');

module.exports = function toWebp() {
    return gulp.src('build/img/**/*.{png,jpg,jpeg}')
        .pipe(webp({ quality:80 }))
        .pipe(gulp.dest('build/img'));
};