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
    $ = require('gulp-load-plugins')(),
    angularFilesort = require('gulp-angular-filesort');
//runSequence = require('run-sequence');

var config = require('../config'),
    indexFile = config.client + 'index.html';

var defaultConfig = {
    indexFile :indexFile,
    injectDest : config.client,
    //js
    injectJsSrc: [
        config.client + 'app/app.js',
        config.client + 'app/**/*.js',
        config.client + 'app/*.js'

    ],
    injectOptions:{ignorePath:'src', addRootSlash:false}
};

////////////////

/**
 *  Overrides
 *  
 * config.inject {[see defaultConfig here]}
 *
 **/
var scriptsConfig = defaultConfig;

if('scriptsConfig' in config) {
    scriptsConfig = helper.arrayConcatExtend(defaultConfig, config.scriptsConfig);
}

//console.log(scriptsConfig);

//__________________________________________________________________________________________________


gulp.task('scripts:inject', function(done) {


    var target = gulp.src(defaultConfig.indexFile);
    var sources = gulp.src(scriptsConfig.injectJsSrc).pipe($.angularFilesort());
    helper.log('Wiring the project dependencies from '+scriptsConfig.injectJsSrc+' into '+defaultConfig.indexFile);

    return target
        .pipe($.inject(sources, scriptsConfig.injectOptions))
        .pipe(gulp.dest(scriptsConfig.injectDest), done);

});
