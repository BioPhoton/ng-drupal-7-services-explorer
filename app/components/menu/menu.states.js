;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.menu.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.menu.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider, $urlRouterProvider) 
	{ 

	    $stateProvider
        .state('app.services_3x.menu', {
            url: "/menu",
            abstract: true,
	        views : {
	        	'menu' : {
			        templateUrl: './app/components/menu/menu.view.html',
			        controller: 'MenuController',
			        controllerAs : 'menu'
	        	}
	    	}
        })
        .state('app.services_3x.menu.retrieve', {
            url: "/retrieve",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'retrieve' : {
			        templateUrl: './app/components/menu/templates/retrieve.html'
	        	}
	    	}
        });
		
	};

})();



