/**
 * templatecache.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp gulp-load-plugins yargs gulp-uglify gulp-angular-templatecache gulp-htmlmin gulp-inject --save--dev
 * ``
 *
 */
'use strict';

var gulp = require('gulp'),
    args = require('yargs').argv,
    helper = require('../helper'),
    $ = require('gulp-load-plugins')();

var config = require('../config'),
    assetsFolder = (config.clientAssets)?config.clientAssets:config.client+'assets/',
    assetsHtmlFolder = (config.assetsFontsFolder)?config.assetsFontsFolder:'html/',
    templatecacheRoot =   (config.app)?config.app:"app/";

var defaultConfig = {
    indexFile: config.client + "index.html",
    indexDest: config.client,
    htmlSrc : [config.clientApp + '**/*.html'],
    htmlDest : assetsFolder + assetsHtmlFolder,
    file : 'templates.js',
    htmlminOptions : {
        empty: true,                      // KEEP empty attributes
        //cdata: true,                      // KEEP CDATA from scripts
        comments: false,                   // KEEP comments
        //ssi: true,                        // KEEP Server Side Includes
        //conditionals: true,               // KEEP conditional internet explorer comments
        spare: true,                      // KEEP redundant attributes
        quotes: true,                     // KEEP arbitrary quotes
        //loose: true,                      // KEEP one whitespace
        //dom: {                            // options of !(htmlparser2)[https://github.com/fb55/htmlparser2]
        //    xmlMode: false,                     // Disables the special behavior for script/style tags (false by default)
        //    lowerCaseAttributeNames: true,      // call .toLowerCase for each attribute name (true if xmlMode is `false`)
        //    lowerCaseTags: true                 // call .toLowerCase for each tag name (true if xmlMode is `false`)
        //}
    },

    templatecacheOptions : {
        root : templatecacheRoot,
        module : "ngDrupalServicesTests.assets.html.templates",
        standalone : false,
        //base : './app/',
        //moduleSystem : "Wrap the templatecache in a module system. Currently supported systems: RequireJS, Browserify, ES6 and IIFE (Immediately-Invoked Function Expression).",
        //transformUrl : "Transform the generated URL before it's put into $templatecache.",
        //templateHeader : "Override template header.",
        //templateBody :  "Override template body.",
        //templateFooter : "Override template footer."
    },
    uglifyOptions : {}
};

//////////////////

var  templatecacheConfig = defaultConfig;

/**
 *  Overrides
 *
 *  config.templatecache {[see defaultConfig here]}
 *
 **/
if('templatecache' in config) {
    templatecacheConfig = helper.arrayConcatExtend(defaultConfig, config.templatecache);
}

//__________________________________________________________________________________________________

gulp.task('templatecache:clean', function(done) {
    return helper.clean(config.clientAssets + 'html/**/*.*', done);
});

gulp.task('templatecache:compile',['templatecache:clean'], function (done) {
    helper.log('Collecting html files from '+templatecacheConfig.htmlSrc+' minify, uglify and put in '+templatecacheConfig.htmlDest+' file');
    return gulp
        .src(templatecacheConfig.htmlSrc)
        //.pipe($.if(args.verbose, $.bytediff.start()))
        .pipe($.htmlmin(templatecacheConfig.htmlminOptions))
        //.pipe($.if(args.verbose, $.bytediff.stop(helper.bytediffFormatter)))
        .pipe($.angularTemplatecache(templatecacheConfig.file, templatecacheConfig.templatecacheOptions))
        .pipe($.uglify(templatecacheConfig.uglifyOptions))
        .pipe(gulp.dest(templatecacheConfig.htmlDest), done);
});

gulp.task('templatecache:inject', function(done) {

    var target = gulp.src(templatecacheConfig.indexFile);
    var sources = gulp.src(templatecacheConfig.htmlDest+'*.js');
    helper.log('Wiring the project dependencies from '+templatecacheConfig.htmlDest+'*.html'+' into '+templatecacheConfig.indexFile);
    return target
        .pipe($.inject(sources, {name:"inject:templatecache", ignorePath: 'src', addRootSlash: false}))
        .pipe(gulp.dest(templatecacheConfig.indexDest), done);

});