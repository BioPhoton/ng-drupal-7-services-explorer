;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.config', [])
    .config(configFunction);

	configFunction.$inject = ['DrupalApiConstant'];

	/** @ngInject */ 
	function configFunction(DrupalApiConstant) 
	{ 
		//drupal services configurations
		DrupalApiConstant.drupal_instance = 'http://dev-drulap-headless.pantheon.io/';
		DrupalApiConstant.api_endpoint += 'v1/';

	};

})();



