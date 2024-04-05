const gulp = require('gulp');
const Server = require('karma').Server;
const jasmine = require('gulp-jasmine');
const install = require("gulp-install");
const logger = require('gulp-logger');

gulp.task('npm-install', function() {
    gulp.src(__dirname + '\\package.json')
        .pipe(logger({
            before: 'Starting npm install...',
            after: 'npm install completed!',
            colors: true,
            showChange: true
        }))
        .pipe(install());
});

gulp.task('karma', function (done) {
    return new Server({
        configFile: __dirname + '\\karma.config.js',
        singleRun: true
    }, done).start();
});

gulp.task('default', ['npm-install', 'karma']);
gulp.task('notests', ['npm-install']);