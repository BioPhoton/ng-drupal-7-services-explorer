module.exports = {
	bundle : {
		main : {
			scripts : [
				"app/**/*.js",
				"app/app.js",
				"assets/html/templates.js"
				],
			options : {
				rev : false
			}
		},
		vendor : {
			scripts : [
			"bower_components/angular/angular.min.js",
			"bower_components/angular-ui-router/release/angular-ui-router.min.js",
			"bower_components/ui-router-extras/release/ct-ui-router-extras.js",
			"bower_components/angular-cookies/angular-cookies.min.js",
			"bower_components/angular-messages/angular-messages.min.js",
			"bower_components/ngstorage/ngStorage.js",
			"bower_components/ng-drupal-7-services/dist/ng-drupal-7-services.js",
			"bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"
			],
			options : {
				rev : false
			}
		}
	}
};
