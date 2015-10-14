/*Gulp modules
 * */

var gulp 		= require('gulp'),
	
	gutil		= require("gulp-util"),
	concat 		= require('gulp-concat'),
	runSequence = require('run-sequence'),
	rename 		= require('gulp-rename'),
	
	sass 		= require('gulp-sass'),
	minifyCss 	= require('gulp-minify-css'),
	autoprefixer 	= require('gulp-autoprefixer'),
	
	bower 		= require('gulp-bower'),
	server 		= require('gulp-server-livereload')
	
	bundle = require('gulp-bundle-assets');

/*Vars*/

	//general
var bowerDir 		= './bower_components',
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
		sassPaths: ['app/**/*.scss'],
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

/*Gulp Tasks*/

/*This task creates a bundle of all js files*/
gulp.task('bundle', function() {
	  return gulp.src('./bundle.config.js')
	    .pipe(bundle())
	    .pipe(gulp.dest('./assets/js'));
	});


/*This task basically runs bower install. By including in the gulpfile we only have to run gulp bower and have them all setup and ready.*/
gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(bowerDir))
        .on('end', function(){  gutil.log(gutil.colors.green('loaded bower components')); });
}); 

/*Move font files form resources into assets/fonts directory so that our css @font-face's will resolve their files*/
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

/* Taske the app.scss file and creates .css and .min.css files and save theem in app/css. */
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

/*Watches all scss files and rebuild all if any of them changes.*/
gulp.task('watch-sass', function() {
	runSequence('sass', function() {
		 gulp.watch(config.sassPaths, ['sass'])
		 .on('end', function(){  gutil.log(gutil.colors.green('watch-sass started')); })
	});
});

/*Sets uo the project loads bower components, fone fonts files, compiles sass files*/
gulp.task('setup-project',  function() {
	runSequence('bower', 'move-fonts', 'sass', function() {
		 gutil.log(gutil.colors.green('setup-project done'));
	});
});

/*livereload*/
gulp.task('webserver', function() {
	  gulp.src('./')
	    .pipe(server(config.serverOptions));
});

/*The default task (called when you run `gulp` from cli)*/
gulp.task('default', ['sass', 'watch-sass', 'webserver']);