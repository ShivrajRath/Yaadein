var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_sourcemaps = require('gulp-sourcemaps');

gulp.task('js-fef', function () {
    return gulp.src(['js/jquery.js',
            'js/handlebars-v1.3.0.js',
            'js/util.js',
            'js/error-handler.js',
            'js/dialog-view.js',
            'js/button-view.js',
            'js/events.js',
            'js/buttons.js',
            'js/touches.js',
            'js/leftnav-view.js',
            'js/one-d-view.js',
            'js/shoveler-view.js',
            'js/player-view-youtube.js',
            'js/playlist-player-view.js',
            'js/search-input-view.js',
            'js/controls-view.js',
            'js/cache.js',
            'js/model-youtube-api.js',
            'js/app.js',
            'js/sponsor.js',
            'js/init.js'
        ])
        .pipe(gp_sourcemaps.init())
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('uglify.js'))
        .pipe(gp_uglify())
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js-fef'], function () {});