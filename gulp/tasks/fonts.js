/**
 * fonts.js
 *
 * This file copies all needed fonts from resources into src folder
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp --save--dev
 * ``
 *
 */
'use strict';

var gulp = require('gulp'),
    helper = require('../helper');

var config = require('../config.js'),
    assetsFolder = (config.assetsFolder)?config.client+config.assetsFolder:config.client+'assets/',
    assetsFontsFolder = (config.assetsFontsFolder)?config.assetsFontsFolder:'fonts/';

var defaultConfig = {
    fontCopies : [],
    fontDest : assetsFolder+assetsFontsFolder
};

//////////////////

var  fontsConfig = defaultConfig;

if('fontsConfig' in config) {
    fontsConfig = helper.arrayConcatExtend(defaultConfig, config.fontsConfig);
}

//__________________________________________________________________________________________________________


gulp.task('fonts:clean', function(done) {
    return helper.clean(fontsConfig.fontDest+'/**/*.*', done);
});

gulp.task('fonts:copy', ['fonts:clean'], function(done) {
    helper.log('Copying fonts');
console.log(fontsConfig);
    if(fontsConfig.fontCopies.length>0) {
        helper.bulkCopy(fontsConfig.fontCopies);
        return done();
    }
    return done();
});
