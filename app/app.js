(function() {
    'use strict';

	angular.module('ngDrupalServicesTests', [ 'ui.router', 'ui.bootstrap', 'ngAnimate', 'ngMessages', 'commons.directives.whenReady', 'commons.directives.contains',
	                                          'ngDrupal7Services-3_x.commons.configurations',
	                                          'ngDrupal7Services-3_x.commons.http.configurations',
	                                          
	                                          'ngDrupalServicesTests.navigation.controller',
	                                          'components.navigation.animations.navAnimations',
	                                          
	                                          'ngDrupalServicesTests.home.controller',
	                                          
	                                          'ngDrupalServicesTests.auth.controller',
	                                          
	                                          'ngDrupalServicesTests.system.controller',
	                                          'ngDrupalServicesTests.user.controller',
	                                          
	                                          'ngDrupal7Services-3_x.commons.authentication.service'
	                                          
	                                          ])
	                                          
	                                          .run(function(AuthenticationService) {
	                                        	  AuthenticationService.refreshConnection();
	                                        	  
	                                          })
		
		.config( function($stateProvider, $urlRouterProvider, DrupalApiConstant) {
			//drupal services configurations
			DrupalApiConstant.drupal_instance = 'http://www.drupalionic.org/drupal_test/';
			DrupalApiConstant.api_endpoint += 'v1/';
			
			//routing configurations
			$urlRouterProvider.otherwise('/home');
		    
		    $stateProvider
		
		    .state('home', {
		        url: '/home',
		        templateUrl: './app/components/home/home.view.html',
		        controller: 'HomeController as home',
		    })
		    
		    .state('commons', {
		        url: '/commons',
		        templateUrl: './app/components/auth/auth.view.html',
		        controller: 'AuthController as auth',
		    })
		    .state('commons.auth', {
		        url: '/auth',
		        templateUrl: './app/components/auth/auth.view.html',
		        controller: 'AuthController as auth',
		    })
		    
		    .state('system', {
		        url: '/system',
		        templateUrl: './app/components/system/system.view.html',
		        controller: 'SystemController as system',
		    })
		    
		    .state('user', {
		        url: '/user',
		        templateUrl: './app/components/user/user.view.html',
		        controller: 'UserController as user',
		    })
		    
		    ;
	
		});
	
})();



