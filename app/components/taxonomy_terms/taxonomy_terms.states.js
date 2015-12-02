;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.taxonomy_terms.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.taxonomy_terms.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider, $urlRouterProvider) 
	{ 
		
		console.log("TaxonomyTerms configFunction"); 

	    $stateProvider
        .state('app.services_3x.taxonomy_terms', {
            url: "/taxonomy_terms",
            abstract: true,
	        views : {
	        	'taxonomy_terms' : {
			        templateUrl: './app/components/taxonomy_terms/taxonomy_terms.view.html',
			        controller: 'TaxonomyTermsController',
			        controllerAs : 'taxonomy_terms'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_terms.retrieve', {
            url: "/retrieve",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'retrieve' : {
			        templateUrl: './app/components/taxonomy_terms/templates/retrieve.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_terms.create', {
            url: "/create",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'create' : {
			        templateUrl: './app/components/taxonomy_terms/templates/create.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_terms.update', {
            url: "/update",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'update' : {
			        templateUrl: './app/components/taxonomy_terms/templates/update.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_terms.delete', {
            url: "/delete",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'delete' : {
			        templateUrl: './app/components/taxonomy_terms/templates/delete.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_terms.index', {
            url: "/index",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'index' : {
			        templateUrl: './app/components/taxonomy_terms/templates/index.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_terms.selectNodes', {
            url: "/selectNodes",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'selectNodes' : {
			        templateUrl: './app/components/taxonomy_terms/templates/selectNodes.html'
	        	}
	    	}
        });
		
	};

})();



