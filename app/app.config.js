;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.config', ['d7-services.commons.configurations'])
    .config(configFunction);

	configFunction.$inject = ['DrupalApiConstant'];

	function configFunction(DrupalApiConstant)
	{ 
		//drupal services configurations
		DrupalApiConstant.drupal_instance = 'http://dev-drulap-headless.pantheon.io/';
		DrupalApiConstant.api_endpoint += 'v1/';

	};

})();



