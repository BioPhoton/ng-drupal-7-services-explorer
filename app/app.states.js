;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.states', ['ui.router','ct.ui.router.extras',
                                             
                                             'ngDrupalServicesTests.app.controller',
                                             
                                             'ngDrupalServicesTests.home.controller',




                                              
                                             //commons
											'ngDrupalServicesTests.commons.controller',
                                             'ngDrupalServicesTests.authentication.states',
                                             
                                             //services_3x
											'ngDrupalServicesTests.services_3x.controller',

												'ngDrupalServicesTests.comment.states',
                                             'ngDrupalServicesTests.system.states',
                                             'ngDrupalServicesTests.user.states',
                                             'ngDrupalServicesTests.node.states',
                                             'ngDrupalServicesTests.file.states',
                                             'ngDrupalServicesTests.taxonomy_term.states',
                                             'ngDrupalServicesTests.taxonomy_vocabulary.states',
                                             
                                             //services_views
											 'ngDrupalServicesTests.services_views.controller',
                                             'ngDrupalServicesTests.views.states',

											 //services_menu
											 'ngDrupalServicesTests.services_menu.controller',
											 'ngDrupalServicesTests.menu.states',

											//services_definition
											'ngDrupalServicesTests.services_definition.controller',
											'ngDrupalServicesTests.definition.states',

											//geocoder
											'ngDrupalServicesTests.geocoder.controller',
											'ngDrupalServicesTests.geocoder.states'
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
	        		templateUrl: 'app/components/home/home.view.html',
	    	        controller: 'HomeController',
	                controllerAs : 'home'
	        	}
	        }
	        
	    })
	    
	    .state('app.commons', {
            url: "/commons",
            abstract: true,
	        views : {
	        	'mainNavContent' : {
			        templateUrl: 'app/components/commons/commons.view.html',
			        controller: 'CommonsController',
			        controllerAs : 'authentication'
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
        })

		.state('app.services_menu', {
			url: "/services_menu",
			abstract: true,
			views: {
				'mainNavContent': {
					templateUrl		: "app/components/services_menu/services_menu.view.html",
					controller		: 'Services_MenuController',
					controllerAs 		: 'services_menu',
				}
			}
		})

			.state('app.services_definition', {
				url: "/services_definition",
				abstract: true,
				views: {
					'mainNavContent': {
						templateUrl		: "app/components/services_definition/services_definition.view.html",
						controller		: 'Services_DefinitionController',
						controllerAs 		: 'services_definition',
					}
				}
			})

			.state('app.geocoder_api', {
				url: "/geocoder_api",
				abstract: true,
				views: {
					'mainNavContent': {
						templateUrl		: "app/components/geocoder_api/geocoder_api.view.html",
						controller		: 'GeocoderController',
						controllerAs 		: 'geocoder',
					}
				}
			})


		;
       
	};
	


})();



