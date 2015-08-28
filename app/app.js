(function() {
    'use strict';

	angular.module('ngDrupalServicesTests', [ 'ui.router', 'ui.bootstrap', 'commons.directives.whenActive', 
	                                          'drupal.configurations',
	                                          'ngDrupalServicesTests.navigation.controller', 
	                                          'ngDrupalServicesTests.home.controller',
	                                          'ngDrupalServicesTests.system.controller'
	                                          
	                                          ])
		
		.config( function($stateProvider, $urlRouterProvider, drupalApiConfig) {
			//drupal services configurations
			drupalApiConfig.drupal_instance = 'http://www.drupalionic.org/drupal_test/';
			drupalApiConfig.api_endpoint += 'v1/';
			
			//routing configurations
			$urlRouterProvider.otherwise('/home');
		    
		    $stateProvider
		
		    .state('home', {
		        url: '/home',
		        templateUrl: './app/components/home/home.view.html',
		        controller: 'HomeController as home',
		    })
		    
		    .state('system', {
		        url: '/system',
		        templateUrl: './app/components/system/system.view.html',
		        controller: 'SystemController as system',
		    })
		    
		    ;
	
		});
	
})();



