var gulp = require('gulp');
var browserSync = require('browser-sync');

var cap = "./06 - Directives";

gulp.task('serve', function() {
    browserSync({
        server: cap,
        ui: {
            port: 4001
        }
    });
});