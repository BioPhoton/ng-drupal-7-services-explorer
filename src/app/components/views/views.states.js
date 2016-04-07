;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.views.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.views.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider) 
	{ 

	    $stateProvider
        .state('app.services_views.views', {
            url: "/views",
            abstract: true,
	        views : {
	        	'views' : {
			        templateUrl: 'app/components/views/views.view.html',
			        controller: 'ViewsController',
			        controllerAs : 'views'
	        	}
	    	}
        })
        
        .state('app.services_views.views.retrieve', {
            url: "/retrieve",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'retrieve' : {
			        templateUrl: 'app/components/views/templates/retrieve.html'
	        	}
	    	}
        });
      
		
	};

})();



