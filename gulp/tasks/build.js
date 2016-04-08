/**
 * build.js
 *
 * This file libss every needed file into index.html
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp gulp-load-plugins gulp-filter gulp-useref gulp-uglify gulp-cssnano gulp-plumber gulp-rev gulp-rev-replace --save--dev
 * ``
 *
 */
'use strict';

var gulp = require('gulp'),
    args = require('yargs').argv,
    helper = require('../helper'),
    path = require('path'),
//var runSequence = require('run-sequence');
 $ = require('gulp-load-plugins')();

var config = require('../config');

var defaultConfig = {
    srcIndexFile : (config.index)?config.index: config.client + 'index.html',
    distIndexFile : (config.index)?config.index: config.buildFolder + 'index.html',
    buildFolder : config.buildFolder,
    srcFolder : config.client,
    buildCopies : [],
    useref : {searchPath: [config.root,config.client]},
    optimized: {
        app: 'app.js',
        lib: 'lib.js'
    },
    htmlminOptions : {
        empty: true,                      // KEEP empty attributes
        //cdata: true,                      // KEEP CDATA from scripts
        //comments: false,                   // KEEP comments
        //ssi: true,                        // KEEP Server Side Includes
        //conditionals: true,               // KEEP conditional internet explorer comments
        //spare: true,                      // KEEP redundant attributes
        //quotes: true,                     // KEEP arbitrary quotes
        //loose: true,                      // KEEP one whitespace
        //dom: {                            // options of !(htmlparser2)[https://github.com/fb55/htmlparser2]
        //    xmlMode: false,                     // Disables the special behavior for script/style tags (false by default)
        //    lowerCaseAttributeNames: true,      // call .toLowerCase for each attribute name (true if xmlMode is `false`)
        //    lowerCaseTags: true                 // call .toLowerCase for each tag name (true if xmlMode is `false`)
        //}
    }
};

////////////////


/**
 *  Overrides
 *
 * config.build {[see defaultConfig here]}
 *
 **/
var buildConfig = defaultConfig;

if('buildConfig' in config) {
    buildConfig = helper.arrayConcatExtend(defaultConfig, config.buildConfig);
}

//__________________________________________________________________________________________________


////////////////////////

/*
gulp.task('build', ['clean-build'], function(done) {
    helper.log('Building everything');
    return runSequence('setup-assets','inject','compile-optimized','copy-static-build','inject-manifest','optimize-index',  done);
});
*/

gulp.task('build:clean', function(done) {
    return helper.clean(path.join(buildConfig.buildFolder , '**','*.*'), done);
});


gulp.task('build:copy', function(done) {
    helper.log('Copying '+buildConfig.buildCopies+' files');

    if(buildConfig.buildCopies.length>0) {
        return helper.bulkCopy(buildConfig.buildCopies);
    } else {
        helper.log('Nothing to copy');
    }
    return done();
});

gulp.task('build:compile-optimized', function () {

    helper.log('Looking for '+'**/*.css'+' files in '+buildConfig.srcIndexFile);
// Filters are named for the gulp-useref path
    var cssFilter = $.filter('**/*.css',{restore: true}),
        jsAppFilter = $.filter('**/' + buildConfig.optimized.app,{restore: true}),
        jsLibFilter = $.filter(path.join('**/' , buildConfig.optimized.lib),{restore: true}),
        notIndexFilter = $.filter([path.join('**','*'), '!'+buildConfig.srcIndexFile],{restore: true});

    return gulp
        .src(buildConfig.srcIndexFile)
        .pipe($.plumber())
        // Apply the concat and file replacement with useref
        .pipe($.useref(buildConfig.useref))

        // Get the css and minify
        .pipe(cssFilter)
        .pipe($.cssnano())
        .pipe(cssFilter.restore)

        // Get the custom javascript
        .pipe(jsAppFilter)
        //.pipe($.ngAnnotate({add: true}))
        .pipe($.uglify())
        //.pipe(getHeader())
        .pipe(jsAppFilter.restore)
        // Get the vendor javascript

        .pipe(jsLibFilter)
        // another option is to override wiredep to use min files
        .pipe($.uglify())
        .pipe(jsLibFilter.restore)

        //add hashes to filenames
        // Take inventory of the file names for future rev numbers
        .pipe(notIndexFilter)
        .pipe($.rev())
        .pipe(notIndexFilter.restore)

        // Replace the file names in the html with rev numbers
        //.pipe($.revReplace())
        .pipe(gulp.dest(buildConfig.buildFolder));

});

gulp.task('optimize-index', function(done) {
    return gulp.src(buildConfig.buildFolder+'index-*.html')
    .pipe($.htmlmin(buildConfig.htmlminOptions))
        .pipe(gulp.dest(buildConfig.buildFolder),done);
});
