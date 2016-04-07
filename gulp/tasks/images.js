/**
 * images.js
 *
 * This file copies all needed images from resources into src folder
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
    assetsImagesFolder = (config.assetsImagesFolder)?config.assetsImagesFolder:'images/';

var defaultConfig = {
    imageCopies : [],
    imageDest : assetsFolder+assetsImagesFolder
};

//////////////////

var  imagesConfig = defaultConfig;

if('imagesConfig' in config) {
    imagesConfig = helper.arrayConcatExtend(defaultConfig, config.imagesConfig);
}

//__________________________________________________________________________________________________________


gulp.task('images:clean', function(done) {
    return helper.clean(imagesConfig.imageDest+'/**/*.*', done);
});
gulp.task('images:copy', ['images:clean'], function(done) {
    helper.log('Copying images');
    if(imagesConfig.imageCopies.length>0) {
        return helper.bulkCopy(imagesConfig.imageCopies);
    }
    return done;
});
