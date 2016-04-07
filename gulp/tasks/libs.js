/**
 * libs.js
 *
 * This file libss every needed file into index.html
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp gulp-load-plugins wiredep gulp-inject gulp-angular-filesort --save--dev
 * ``
 *
 */

'use strict';

var gulp = require('gulp'),

    helper = require('../helper'),
    wiredep = require('wiredep').stream,
    $ = require('gulp-load-plugins')();

var config = require('../config'),
    indexFile = config.srcFolder + 'index.html';

var defaultConfig = {
    wiredepOptions : {
        bowerJson:  require('../../bower.json'),
        directory:  './bower_components/',
        //ignorePath: '',
        exclude: [
            'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
            'bower_components/jquery/dist/jquery.js'
        ]
    }
};

////////////////


/**
 *  Overrides
 *
 *  config.bower = {
 *      json: require('../bower.json'),
 *      directory: './lib/',
 *      ignorePath: '../../'
 *  }
 *
 * config.libs {[see defaultConfig here]}
 *
 **/
var libsConfig = defaultConfig;

if('libs' in config) {
    libsConfig = helper.arrayConcatExtend(defaultConfig, config.libs);
}
//override bower settings
if('bower' in config) {
    if('json' in config.bower) {libsConfig.wiredepOptions.bowerJson = config.bower.json}
    if('directory' in config.bower) {libsConfig.wiredepOptions.directory = config.bower.directory}
    if('ignorePath' in config.bower) {libsConfig.wiredepOptions.ignorePath = config.bower.ignorePath}
}

//__________________________________________________________________________________________________


gulp.task('libs:inject', function(done) {
    helper.log('Wiring libs dependencies into the bower/npm section in '+indexFile);
    return gulp
        .src(libsConfig.libsScr)
        .pipe(wiredep(libsConfig.wiredepOptions))
        .pipe(gulp.dest(libsConfig.libsDest), done);
});
