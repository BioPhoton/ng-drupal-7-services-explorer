;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.states', ['ui.router','ct.ui.router.extras',
                                             
                                             'ngDrupalServicesTests.app.controller',
                                             'ngDrupalServicesTests.home.controller',
                                             'ngDrupalServicesTests.services_3x.controller',
                                              
                                             'ngDrupalServicesTests.system.states',
                                             'ngDrupalServicesTests.user.states',
                                             'ngDrupalServicesTests.node.states',
                                             'ngDrupalServicesTests.file.states'
                                             ])
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
	        deepStateRedirect: true,
	        sticky: true,
	        views : {
	        	'mainNavContent' : {
	        		templateUrl: './app/components/home/home.view.html',
	    	        controller: 'HomeController',
	                controllerAs : 'home'
	        	}
	        }
	        
	    })
        .state('app.services_3x', {
            url: "/services_3x",
            abstract: true,
            views: {
			      'mainNavContent': {
			    	  templateUrl		: "app/components/services_3x/services_3x.view.html",
			    	  controller		: 'Services_3xController',
			          controllerAs 		: 'services_3x',
			      }
			    }
        })
        
       
        /*
        .state('app.services_3x.system', {
            url: "/system",
            abstract: true,
	        views : {
	        	'system' : {
			        templateUrl: './app/components/system/system.view.html',
			        controller: 'SystemController',
			        controllerAs : 'system'
	        	}
	    	}
        })
        
        .state('app.services_3x.system.connect', {
            url: "/connect",
            views : {
	        	'connect' : {
			        templateUrl: './app/components/system/templates/connect.html'
	        	}
	    	}
        })

	    .state('app.auth', {
	        url: '/auth',
	        deepStateRedirect: true,
	        sticky: true,
	        views : {
	        	'mainNavContent' : {
			        templateUrl: './app/components/auth/auth.view.html',
			        controller: 'AuthController',
			        controllerAs: 'auth'
	        	}
	        }
	    })

	    .state('app.node', {
	        url: '/node',
	        deepStateRedirect: true,
	        sticky: true,
	        views : {
	        	'mainNavContent' : {
			        templateUrl: './app/components/node/node.view.html',
			        controller: 'NodeController as node'
	        	}
	        }
	    })*/;
		
	};

})();



