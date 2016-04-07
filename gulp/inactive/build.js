'use strict';

var gulp = require('gulp');
var args = require('yargs').argv;
var helper = require('../helper');
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')();

var config = require('../config'),
    assetsFolder = (config.assetsFolder)?config.client+config.assetsFolder:config.client+'assets/',
    indexFile = (config.index)?config.index: config.client + 'index.html',
    optimizedFiles = {
        app: 'app.js',
        lib: 'lib.js'
    };

var defaultConfig = {
    buildFolder : config.buildFolder,
    srcFolder : config.src,
    staticBuildCopies : [

    ],
    useref : {searchPath: config.baseDirs},
    injectScr :indexFile,
    optimized: optimizedFiles,
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
    },
};

////////////////


/**
 *  Overrides
 *
 * config.build {[see defaultConfig here]}
 *
 **/
var buildConfig = defaultConfig;

if('build' in config) {
    buildConfig = helper.arrayConcatExtend(defaultConfig, config.build);
}

//__________________________________________________________________________________________________


////////////////////////

/**
 * Remove all fonts from the build folder
 * @param  {Function} done - callback when complete
 */
gulp.task('clean-build', function(done) {
    return helper.clean(buildConfig.buildFolder + '**/*.*', done);
});


/**
 * Build everything
 * This is separate so we can run tests on
 * optimize before handling image or fonts
 */
gulp.task('build', ['clean-build'], function(done) {
    helper.log('Building everything');
    return runSequence('setup-assets','inject','compile-optimized','copy-static-build','inject-manifest','optimize-index',  done);
});

//organize font files for project
gulp.task('clean-build', function(done) {
    return helper.clean(buildConfig.buildFolder+'/**/*.*', done);
});

/**
 * Optimize all files, move to a build folder,
 * and inject them into the new index.html
 * @return {Stream}
 */
gulp.task('compile-optimized',['inject-html'], function () {
// Filters are named for the gulp-useref path
    var cssFilter = $.filter('**/*.css',{restore: true}),
        jsAppFilter = $.filter('**/' + optimizedFiles.app,{restore: true}),
        jslibFilter = $.filter('**/' + optimizedFiles.lib,{restore: true}),
        notIndexFilter = $.filter(['**/*', '!'+indexFile],{restore: true});

    return gulp
        .src(indexFile)
        .pipe($.plumber())
        // Apply the concat and file replacement with useref
        .pipe($.useref(buildConfig.useref))
        // Get the css
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
        .pipe(jslibFilter)
        // another option is to override wiredep to use min files
        .pipe($.uglify())
        .pipe(jslibFilter.restore)
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

gulp.task('copy-static-build', function(done) {
    helper.log('Copying static build files');

    if(buildConfig.staticBuildCopies.length>0) {
        return helper.bulkCopy(buildConfig.staticBuildCopies);
    }
    return done;
});
