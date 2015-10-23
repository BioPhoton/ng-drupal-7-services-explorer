;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.config', ['ngDrupal7Services-3_x.commons.configurations','ngDrupal7Services-3_x.commons.http.configurations'])
    .config(configFunction);

	configFunction.$inject = ['DrupalApiConstant', '$ionicLoadingConfig'];

	/** @ngInject */ 
	function configFunction(DrupalApiConstant, $ionicLoadingConfig) 
	{ 
		//drupal services configurations
		DrupalApiConstant.drupal_instance = 'http://www.drupalionic.org/drupal_test/';
		DrupalApiConstant.api_endpoint += 'v1/';
		
		//Configure loading intercepter
		//http://ionicframework.com/docs/api/service/$ionicLoading/
		$ionicLoadingConfig.template = '<p><ion-spinner></ion-spinner><br/>Loading...</p>';
		
		
	};

})();



