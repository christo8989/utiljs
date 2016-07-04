'use strict';

var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tslint = require('gulp-tslint'),
    minify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    run = require('run-sequence'),
    config = require('./gulpfile.config');

/**
 * Lint all custom TypeScript files.
 */
var lint = 'ts-lint';
gulp.task(lint, function () {
    return gulp.src(config.allTypeScript)
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript.
 */
var compile = 'ts-compile';
gulp.task(compile, function () {
    return gulp.src(config.allTypeScript)
        .pipe(sourcemaps.init())
        .pipe(tsc())
        .js.pipe(sourcemaps.write(config.sourcemaps))
           .pipe(gulp.dest(config.output));
});

/**
 * Compile TypeScript for definitions.
 */
var compileDefinitions = 'ts-compile-definitions';
gulp.task(compileDefinitions, function () {
    return gulp.src(config.allTypeScript)
        .pipe(tsc({ declaration: true }))
        .dts.pipe(gulp.dest(config.definitions));
});

var compress = 'js-minify';
gulp.task(compress, function () {
    return gulp.src(config.allJavaScript)
        .pipe(rename({ extname: '.min.js' }))
        .pipe(sourcemaps.init())
        .pipe(minify())
        .pipe(sourcemaps.write(config.sourcemaps))
        .pipe(gulp.dest(config.output));
});

gulp.task('default', function (callback) {
    run(lint, [compile, compileDefinitions], compress, callback);
});