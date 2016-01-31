;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.config', ['d7-services.commons.configurations','d7-services.commons.http.configurations'])
    .config(configFunction);

	configFunction.$inject = ['DrupalApiConstant'];

	/** @ngInject */ 
	function configFunction(DrupalApiConstant) 
	{ 
		//drupal services configurations
		DrupalApiConstant.drupal_instance = 'http://www.drupalionic.org/drupal_test/';
		DrupalApiConstant.api_endpoint += 'v1/';

	};

})();



