const gulp = require('gulp');

const plumber = require('gulp-plumber');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

module.exports = function script() {
    return gulp.src('src/scripts/main.js', { allowEmpty: true })
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(terser())        
        .pipe(sourcemaps.write())
        .pipe(rename({ 
            suffix: '.min' 
        }))
        .pipe(gulp.dest('build/scripts'));
};