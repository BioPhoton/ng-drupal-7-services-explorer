;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.definition.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.definition.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider)
	{ 

	    $stateProvider
        .state('app.services_definition.definition', {
            url: "/definition",
            abstract: true,
	        views : {
	        	'definition' : {
			        templateUrl: 'app/components/definition/definition.view.html',
			        controller: 'DefinitionController',
			        controllerAs : 'definition'
	        	}
	    	}
        })

        .state('app.services_definition.definition.index', {
            url: "/index",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'index' : {
			        templateUrl: 'app/components/definition/templates/index.html'
	        	}
	    	}
        })
        ;
		
	};

})();



