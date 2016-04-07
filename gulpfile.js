/* jshint node: true */
/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

/**
 * gulpfile.js
 *
 * This file loads all filse located in ./gulp/tasks
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp wrench gulp-load-plugins gulp-task-listing --save--dev
 * ``
 *
 */

'use strict';

var gulp = require('gulp');

var wrench = require('wrench');
var $ = require('gulp-load-plugins')();

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp/tasks').filter(function(file) {
	return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
	require('./gulp/tasks/' + file);
});

/**
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);


//__________________________________________________________________________________________

/*Gulp modules
var gulp 		= require('gulp'),
	
	gutil		= require("gulp-util"),
	concat 		= require('gulp-concat'),
	runSequence = require('run-sequence'),
	rename 		= require('gulp-rename'),
	
	sass 		= require('gulp-sass'),
	minifyCss 	= require('gulp-minify-css'),
	autoprefixer 	= require('gulp-autoprefixer'),

	templateCache = require('gulp-angular-templatecache'),
	bower 		= require('gulp-bower'),
	server 		= require('gulp-server-livereload'),
	del 		= require('del'),
	htmlmin = require('gulp-htmlmin'),
	
	bundle = require('gulp-bundle-assets');

	//general
var bowerDir 		= 'bower_components',
	resourcesDir 	= 'resources',
		imgPath 	= '/images',
		//libs
		libsPath 		= '/libs',
	assetsPath 		= './assets',
		//css
		cssPath 		= 	'/css',
		//fonts
		fontsPath 				= '/fonts',
			faSourceFontsPath 		= '/fontawesome/fonts/**.*',
			faTargetFontsPath 		= '/fontawesome',
			twb3SourceFontPath 		= '/bootstrap-sass-official/assets/fonts/bootstrap/**.*',
			twb3TargetFontsPath 	= '/bootstrap'

var config = {
		//we exclude animations because irt is imported in page specific animations
		sassPaths: ['app/**\/*.scss'],
		autoprefixerOptions : {
			browsers: [
                       '> 1%',
                       'last 2 versions',
                       'firefox >= 4',
                       'safari 7',
                       'safari 8',
                       'IE 8',
                       'IE 9',
                       'IE 10',
                       'IE 11'
                   ],
                   cascade: false
		},
		serverOptions : {
		      livereload: true,
		      open: true,
		      defaultFile: 'index.html',
		      fallback: 'index.html', 
		      port : 8100
		}
};

gulp.task('build', function(done){
	gutil.log(gutil.colors.green('building project'));
	return runSequence('move-fonts','move-images','sass','templatecache','bundle',  done);
});


gulp.task('bundle', function() {
	  return gulp.src('./bundle.config.js')
	    .pipe(bundle())
	    .pipe(gulp.dest('./assets/js'));
	});

gulp.task('templatecache',['clean-html'], function (done) {
	gutil.log(gutil.colors.green('collecting html files minify and put in templates file'));

	var options = {
		root : "app/",
		module : "ngDrupalServicesTests.assets.html.templates",
		standalone : false,
		//base : './app/',
		//moduleSystem : "Wrap the templateCache in a module system. Currently supported systems: RequireJS, Browserify, ES6 and IIFE (Immediately-Invoked Function Expression).",
		//transformUrl : "Transform the generated URL before it's put into $templateCache.",
		//templateHeader : "Override template header.",
		//templateBody :  "Override template body.",
		//templateFooter : "Override template footer."
	};

	return gulp.src('app/**\/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(templateCache('templates.js', options))
		.pipe(gulp.dest('./assets/html'), done);
});

gulp.task('clean-html', function(done) {
	gutil.log(gutil.colors.green('cleaning'+ assetsPath+'/html'));

	return del([assetsPath+'/html'], done)
});


gulp.task('move-fonts', function() {
	//fontawesome
	var faFrom = bowerDir + faSourceFontsPath;
		faTo = assetsPath+fontsPath+faTargetFontsPath;
	gulp.src(faFrom)
     	.pipe(gulp.dest(faTo))
     	.on('end', function(){  gutil.log(gutil.colors.green('moved fonawesome font-files from '+faFrom+' to '+faTo)); });
    //bootstrap
	var bsFrom = bowerDir + twb3SourceFontPath;
		bsTo = assetsPath+fontsPath+twb3TargetFontsPath;
	gulp.src(bsFrom)
        .pipe(gulp.dest(bsTo))
        .on('end', function(){  gutil.log(gutil.colors.green('moved bootstrap font-files from '+bsFrom+' to '+bsTo)); });
        
});


gulp.task('move-images', function() {
	//fontawesome
	var imgFrom = resourcesDir + imgPath + '/*';
		imgTo = assetsPath+imgPath;
	gulp.src(imgFrom)
     	.pipe(gulp.dest(imgTo))
     	.on('end', function(){  gutil.log(gutil.colors.green('moved image files from '+imgFrom+' to '+imgTo)); });
  
});


gulp.task('sass', function(done) {
	  var scssFrom = config.sassPaths,
		  scssTo = assetsPath+cssPath; 
	  
	  gulp.src(scssFrom)
	  	
	  	.pipe(concat('app.css'))
	    .pipe(sass({
	      errLogToConsole: true
	    }))
	    
	    .pipe(autoprefixer(config.autoprefixerOptions))
	    .on('end', function(){  gutil.log(gutil.colors.green('prefixes created')); })
	    
	    .pipe(gulp.dest(scssTo))
	    .on('end', function(){  gutil.log(gutil.colors.green('app.css created')); })
	    
	    .pipe(minifyCss({
	      keepSpecialComments: 0
	    }))
	    .on('end', function(){  gutil.log(gutil.colors.green('app.min.css created')); })
	    
	    .pipe(rename({ extname: '.min.css' }))
	    .pipe(gulp.dest(scssTo))
	    
	    .on('end', done);

});


gulp.task('watch-sass', function() {
	runSequence('sass', function() {
		 gulp.watch(config.sassPaths, ['sass'])
		 .on('end', function(){  gutil.log(gutil.colors.green('watch-sass started')); })
	});
});


gulp.task('webserver', function() {
	  gulp.src('./')
	    .pipe(server(config.serverOptions));
});

gulp.task('default', ['sass', 'watch-sass', 'webserver']);

*/