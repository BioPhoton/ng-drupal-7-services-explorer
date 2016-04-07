/**
 * scripts.js
 *
 * This file injects every needed js file into index.html
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp gulp-load-plugins gulp-inject gulp-angular-filesort --save--dev
 * ``
 *
 */

'use strict';

var gulp = require('gulp'),

    helper = require('../helper'),
    $ = require('gulp-load-plugins')();
//runSequence = require('run-sequence');

var config = require('../config'),
    indexFile = config.srcFolder + 'index.html';

var defaultConfig = {
    indexFile :indexFile,
    injectDest : config.src,
    //js
    injectJsSrc: [
        config.srcFolder + 'app/**/*.js'
    ],
    injectJsOrder : []
};

////////////////

/**
 *  Overrides
 *  
 * config.inject {[see defaultConfig here]}
 *
 **/
var scriptsConfig = defaultConfig;

if('scripts' in config) {
    scriptsConfig = helper.arrayConcatExtend(defaultConfig, config.scripts);
}

//console.log(scriptsConfig);

//__________________________________________________________________________________________________


gulp.task('scripts:inject', function(done) {
    helper.log('Wiring the project dependencies into html');

    var target = gulp.src(scriptsConfig.injectScr);
    var sources = gulp.src(scriptsConfig.injectJsSrc)
        .pipe($.angularFilesort())

    return target
        .pipe($.inject(sources, {ignorePath: 'src', addRootSlash: false}))
        .pipe(gulp.dest(scriptsConfig.injectDest), done);

});
