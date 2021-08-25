const { watch, series, src } = require('gulp');

const images = require('./images');
const styles = require('./styles');
const html = require('./html');
const scripts = require('./scripts');

const server = require('browser-sync').create();


function readyReload(cb) {
  server.reload();
  cb();
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    });

    watch('src/img/*.{gif,png,jpg,svg,webp}', series(images, readyReload));
    watch('src/styles/**/*.+(scss|sass|css)', series(styles, cb => src('build').pipe(server.stream()).on('end', cb)));
    watch('src/scripts/**/*.js', series(scripts, readyReload));
    watch('src/*.html', series(html, readyReload));

    return cb();
};



