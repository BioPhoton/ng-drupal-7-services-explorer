/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 */
'use strict';

module.exports = (function() {

    var path = require('path');

    //dir paths
    var root = './',
        resources = 'resources/',
        buildFolder = root+'dist/',
        bower = {
            json: require('../bower.json'),
            directory: path.join(root,'bower_components/'),
            ignorePath: '../'
        },
        src = './src/',
        //optional wrapper folder here (src+'client/')
        client = src,
        app = 'app/',
        assetsFolder = 'assets/',
        clientAssets = client + assetsFolder,
        baseDirs = ['./', src],
        clientApp = client + app,
        assetsImagesFolder = 'images/',
        assetsFontsFolder = 'fonts/',
        indexFileName = 'index.html';

//file copy sets
    var fontCopies = [
        {
            src:bower.directory + 'fontawesome/fonts/**.*',
            dest:clientAssets + assetsFontsFolder + 'fontawesome',
            name : 'fontawesome'
        },
        {
            src:bower.directory + 'bootstrap-sass-official/assets/fonts/bootstrap/**.*',
            dest:clientAssets + assetsFontsFolder + 'bootstrap',
            name : 'bootstrap'
        },
    ];

    var imageCopies = [
        {
            src:[
                resources+assetsImagesFolder+'default-avatar.jpg',
                resources+assetsImagesFolder+'refreshTokenWorkflow.png'
            ],
            dest:clientAssets +assetsImagesFolder,
            name : 'defaultImages'
        }
    ];

    var buildCopies = [
        {
            src:[
                clientAssets+assetsImagesFolder+'**/*.*',
            ],
            dest:buildFolder + assetsFolder + assetsImagesFolder,
            name : 'assetImages'
        },
        {
            src:[
                clientAssets+assetsFontsFolder+'**/*.*',
            ],
            dest:buildFolder + assetsFolder + assetsFontsFolder,
            name : 'assetFonts'
        }
    ];





    var config = {
        root : root,
        indexFileName: indexFileName,
        buildFolder: buildFolder,
        client: client,
        app : app,
        clientApp : clientApp,
        assetsFolder : assetsFolder,
        clientAssets : clientAssets,
        fontsConfig : {
            fontCopies : fontCopies
        },
        imagesConfig : {
            imageCopies : imageCopies
        },
        buildConfig : {
            buildCopies : buildCopies
        },
        bower: bower
    };

    return config;

    ////////////////

})();
