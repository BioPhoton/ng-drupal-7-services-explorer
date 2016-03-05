;(function() {
    'use strict';

	/*Needed to loosely implement templatecahce*/
	angular.module('ngDrupalServicesTests.assets.html.templates', []);

	angular
	.module('ngDrupalServicesTests', ['d7-services', 'ngDrupalServicesTests.config', 'ngDrupalServicesTests.states',
	                                  'ui.bootstrap', 'ngMessages', 'commons.directives.formControlFeedback', 'ngDrupalServicesTests.assets.html.templates']);

})();