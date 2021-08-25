const gulp = require('gulp');

const serve = require('./gulp/tasks/serve');
const html = require('./gulp/tasks/html');
const styles = require('./gulp/tasks/styles');
const scripts = require('./gulp/tasks/scripts');
const images = require('./gulp/tasks/images');
const icons = require('./gulp/tasks/icons');
const clean = require('./gulp/tasks/clean');

function setMode(isProduction = false) {
    return cb => {
        process.env.NODE_ENV = isProduction ? 'production' : 'development';
        cb();
    };
}

const dev = gulp.parallel(html, styles, scripts, icons, images);

const build = gulp.series(clean, dev);

module.exports.start = gulp.series(setMode(), build, serve);
module.exports.build = gulp.series(setMode(true), build);