;(function() {
    'use strict';

	/*Needed to loosely implement templatecahce*/
	angular.module('da.commons.caching.templates', []);

	angular
	.module('ngDrupalServicesTests', ['d7-services', 'ngDrupalServicesTests.config', 'ngDrupalServicesTests.states',
	                                  'ui.bootstrap', 'ngMessages', 'commons.directives.formControlFeedback']);

})();