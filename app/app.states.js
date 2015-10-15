;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.states', ['ui.router','ct.ui.router.extras',
                                             
                                             'ngDrupalServicesTests.app.controller',
                                             'ngDrupalServicesTests.home.controller',
                                             'ngDrupalServicesTests.services_3x.controller',
                                             'ngDrupalServicesTests.services_views.controller',
                                              
                                             //services_3x
                                             'ngDrupalServicesTests.system.states',
                                             'ngDrupalServicesTests.user.states',
                                             'ngDrupalServicesTests.node.states',
                                             'ngDrupalServicesTests.file.states',
                                             
                                             //services_views
                                             'ngDrupalServicesTests.views.states'
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
        
        .state('app.services_views', {
            url: "/services_views",
            abstract: true,
            views: {
			      'mainNavContent': {
			    	  templateUrl		: "app/components/services_views/services_views.view.html",
			    	  controller		: 'Services_ViewsController',
			          controllerAs 		: 'services_views',
			      }
			    }
        });
        
       
       
		
	};

})();



