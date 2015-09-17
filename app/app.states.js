;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.states', ['ui.router',
                                             'ngDrupalServicesTests.app.controller',
                                             'ngDrupalServicesTests.home.controller',
                                             'ngDrupalServicesTests.auth.controller',
                                             'ngDrupalServicesTests.system.controller', 
                                             'ngDrupalServicesTests.user.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider, $urlRouterProvider) 
	{ 
		
		//routing configurations
		$urlRouterProvider.otherwise('/app/home');
	    
	    $stateProvider
	
	    //holds the navigation and toggled state of menu
	    .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "app/app.view.html",
            controller: 'AppController',
            controllerAs : 'app'
        })
	    
	    .state('app.home', {
	        url: '/home',
	        views : {
	        	'mainNavContent' : {
	        		templateUrl: './app/components/home/home.view.html',
	    	        controller: 'HomeController',
	                controllerAs : 'home'
	        	}
	        }
	        
	    })
	    
	    .state('app.auth', {
	        url: '/auth',
	        views : {
	        	'mainNavContent' : {
			        templateUrl: './app/components/auth/auth.view.html',
			        controller: 'AuthController',
			        controllerAs: 'auth'
	        	}
	        }
	    })
	    
	    .state('app.system', {
	    	url: '/system',
	    	views : {
	        	'mainNavContent' : {
			        templateUrl: './app/components/system/system.view.html',
			        controller: 'SystemController as system',
	        	}
	    	}
	    })
	    
	    .state('app.user', {
	        url: '/user',
	        views : {
	        	'mainNavContent' : {
			        templateUrl: './app/components/user/user.view.html',
			        controller: 'UserController as user'
	        	}
	        }
	    });
		
	};

})();



