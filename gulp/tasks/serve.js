/**
 * serve.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp browser-sync --save--dev
 * ``
 *
 */
'use strict';
var config = require('../config');

var gulp = require('gulp'),
    helper = require('../helper'),
    browserSync = require('browser-sync').create();

var config = require('../config');

var defaultConfig = {
    srcRoots: [config.root,config.client],
    distRoots: config.buildFolder,
    browserSyncOptions: {
        //proxy: 'localhost:' + port,
        port: 8010,
        server: {
            baseDir: config.client
        },
        /*files: isDev ? [
            path.join(config.client , '**','*.*'),
            '!' + config.allSass,
            path.join(config.temp , '**','*.css'),
        ] : [],
        ghostMode: { // these are the defaults t,f,t,t
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,*/
        reloadDelay: 1000
    }
}



//////////////////

var serveConfig = defaultConfig;

/**
 *  Overrides
 *
 *  config.serve {[see defaultConfig here]}
 *
 **/
if ('serveConfig' in config) {
    serveConfig = helper.arrayConcatExtend(defaultConfig, config.serveConfig);
}

//__________________________________________________________________________________________________

///////////////

gulp.task('serve:dev', function (done) {
    helper.log('Starting BrowserSync for '+serveConfig.srcRoots+' folder on port ' + serveConfig.browserSyncOptions.port);

    var options = serveConfig.browserSyncOptions;
    options.server.baseDir = serveConfig.srcRoots;

    browserSync.init(options);
    return done();
})