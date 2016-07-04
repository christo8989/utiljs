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
var tscompile = 'ts-compile';
gulp.task(tscompile, function () {
    return gulp.src(config.allTypeScript)
        .pipe(sourcemaps.init())
        .pipe(tsc({ sortOutput: true }))
        .js.pipe(rename({ extname: '.min.js' }))
            .pipe(minify())
            .pipe(sourcemaps.write(config.sourcemaps))
            .pipe(gulp.dest(config.tsoutput));
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




//NOTE: Use the TypeScript build if you can.
/**
 * Compile TypeScript to JavaScript.
 */
var prejscompile = 'js-compile';
gulp.task(prejscompile, function () {
   return gulp.src(config.allTypeScript)
        .pipe(tsc({ sortOutput: true }))
        .js.pipe(gulp.dest(config.jsoutput));        
});

/**
 * Minify JavaScript and add sourcemaps.
 */
var jscompile = 'js-minify';
gulp.task(jscompile, [prejscompile], function () {
    let src = [
        config.allJavaScript,
        config.ignoreAllMinifiedJavaScript
    ];

    return gulp.src(src)
        .pipe(rename({ extname: '.min.js' }))
        .pipe(sourcemaps.init())
        .pipe(minify())
        .pipe(sourcemaps.write(config.sourcemaps))
        .pipe(gulp.dest(config.jsoutput));
});
//NOTE: Use the TypeScript build if you can.




//TODO: Build the test folder and inject the correct filepaths for the scripts.
/**
 * Build, Watch, Default
 */
var build = 'build';
gulp.task(build, function (callback) {
    run(lint, [tscompile, compileDefinitions, jscompile], callback);
});

var watch = 'watch';
gulp.task(watch, function () {
    gulp.watch(config.allTypeScript, [build]);
});

gulp.task('default', [build, watch]);