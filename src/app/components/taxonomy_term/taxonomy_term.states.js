;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.taxonomy_term.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.taxonomy_term.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider, $urlRouterProvider) 
	{ 
		
		console.log("TaxonomyTerm configFunction"); 

	    $stateProvider
        .state('app.services_3x.taxonomy_term', {
            url: "/taxonomy_term",
            abstract: true,
	        views : {
	        	'taxonomy_term' : {
			        templateUrl: 'app/components/taxonomy_term/taxonomy_term.view.html',
			        controller: 'TaxonomyTermController',
			        controllerAs : 'taxonomy_term'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_term.retrieve', {
            url: "/retrieve",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'retrieve' : {
			        templateUrl: 'app/components/taxonomy_term/templates/retrieve.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_term.create', {
            url: "/create",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'create' : {
			        templateUrl: 'app/components/taxonomy_term/templates/create.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_term.update', {
            url: "/update",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'update' : {
			        templateUrl: 'app/components/taxonomy_term/templates/update.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_term.delete', {
            url: "/delete",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'delete' : {
			        templateUrl: 'app/components/taxonomy_term/templates/delete.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_term.index', {
            url: "/index",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'index' : {
			        templateUrl: 'app/components/taxonomy_term/templates/index.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_term.selectNodes', {
            url: "/selectNodes",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'selectNodes' : {
			        templateUrl: 'app/components/taxonomy_term/templates/selectNodes.html'
	        	}
	    	}
        });
		
	};

})();



