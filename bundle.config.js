module.exports = {
	bundle : {
		main : {
			scripts : [
			"assets/html/templates.js",
			"app/commons/directives/formControlFeedback.js",
			"app/commons/directives/navbarLogin.js",
			"app/commons/filters/filters.ifEmpty.js",
			"app/app.controller.js",
			"app/components/home/home.controller.js",

			"app/components/commons/commons.controller.js",
			"app/components/services_3x/services_3x.controller.js",
			"app/components/services_views/services_views.controller.js",

			"app/components/authentication/authentication.controller.js",
			"app/components/authentication/authentication.states.js",

			"app/components/comment/comment.controller.js",
			"app/components/comment/comment.states.js",

			"app/components/system/system.controller.js",
			"app/components/system/system.states.js",

			"app/components/user/user.controller.js",
			"app/components/user/user.states.js",

			"app/components/node/node.controller.js",
			"app/components/node/node.states.js",

			"app/components/file/file.controller.js",
			"app/components/file/file.states.js",

			"app/components/taxonomy_term/taxonomy_term.controller.js",
			"app/components/taxonomy_term/taxonomy_term.states.js",

			"app/components/taxonomy_vocabulary/taxonomy_vocabulary.controller.js",
			"app/components/taxonomy_vocabulary/taxonomy_vocabulary.states.js",

			"app/components/views/views.controller.js",
			"app/components/views/views.states.js",

			"app/app.config.js",
			"app/app.states.js",
			"app/app.js"
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
