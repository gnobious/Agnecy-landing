const gulp = require('gulp');

const plumber = require('gulp-plumber');
const htmlmin = require('gulp-htmlmin');

module.exports = function html() {
    return gulp.src("src/*.html")
        .pipe(plumber())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("build"));
};