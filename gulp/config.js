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
            //ignorePath: '../'
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





    var config = {
        app : app,
        clientApp : clientApp,
        inject : {
            //injectJsSrc : [path.join(clientApp,'**','*.js')],
            injectJsOrder: [
                '**/app/app.js',
                '**/app/*.js',
                '**/app/**/*.js'
            ]
        },
        fontsConfig : {
            fontCopies : fontCopies,
        },
        imagesConfig : {
            imageCopies : imageCopies
        },

        root : root,
        baseDirs:baseDirs,
        client: client,
        buildFolder: buildFolder,
        assetsFolder : assetsFolder,
        clientAssets : clientAssets,
        index: client + indexFileName,

        /**
         * browser sync
         */
        browserReloadDelay: 1000,

        /**
         * Bower and NPM files
         */
        bower: bower

    };

    return config;

    ////////////////

})();
