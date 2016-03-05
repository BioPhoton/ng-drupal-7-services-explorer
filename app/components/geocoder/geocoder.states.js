;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.geocoder.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.geocoder.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider, $urlRouterProvider) 
	{ 

	    $stateProvider
        .state('app.geocoder_api.geocoder', {
            url: "/geocoder",
            abstract: true,
	        views : {
	        	'geocoder' : {
			        templateUrl: 'app/components/geocoder/geocoder.view.html',
			        controller: 'GeocoderController',
			        controllerAs : 'geocoder'
	        	}
	    	}
        })
        .state('app.geocoder_api.geocoder.retrieve', {
            url: "/retrieve",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'retrieve' : {
			        templateUrl: 'app/components/geocoder/templates/retrieve.html'
	        	}
	    	}
        })
        .state('app.geocoder_api.geocoder.index', {
            url: "/index",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'index' : {
			        templateUrl: 'app/components/geocoder/templates/index.html'
	        	}
	    	}
        });
		
	};

})();



