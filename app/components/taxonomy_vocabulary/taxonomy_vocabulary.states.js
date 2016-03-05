;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.taxonomy_vocabulary.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.taxonomy_vocabulary.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider, $urlRouterProvider) 
	{ 
		
		console.log("TaxonomyVocabulary configFunction"); 

	    $stateProvider
        .state('app.services_3x.taxonomy_vocabulary', {
            url: "/taxonomy_vocabulary",
            abstract: true,
	        views : {
	        	'taxonomy_vocabulary' : {
			        templateUrl: './app/components/taxonomy_vocabulary/taxonomy_vocabulary.view.html',
			        controller: 'TaxonomyVocabularyController',
			        controllerAs : 'taxonomy_vocabulary'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_vocabulary.retrieve', {
            url: "/retrieve",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'retrieve' : {
			        templateUrl: './app/components/taxonomy_vocabulary/templates/retrieve.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_vocabulary.create', {
            url: "/create",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'create' : {
			        templateUrl: './app/components/taxonomy_vocabulary/templates/create.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_vocabulary.update', {
            url: "/update",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'update' : {
			        templateUrl: './app/components/taxonomy_vocabulary/templates/update.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_vocabulary.delete', {
            url: "/delete",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'delete' : {
			        templateUrl: './app/components/taxonomy_vocabulary/templates/delete.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_vocabulary.index', {
            url: "/index",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'index' : {
			        templateUrl: './app/components/taxonomy_vocabulary/templates/index.html'
	        	}
	    	}
        })
        .state('app.services_3x.taxonomy_vocabulary.getTree', {
            url: "/getTree",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'getTree' : {
			        templateUrl: './app/components/taxonomy_vocabulary/templates/getTree.html'
	        	}
	    	}
        })
		.state('app.services_3x.taxonomy_vocabulary.retrieveByMachineName', {
			url: "/retrieveByMachineName",
			deepStateRedirect: true,
			sticky: true,
			views : {
				'retrieveByMachineName' : {
					templateUrl: 'app/components/taxonomy_vocabulary/templates/retrieveByMachineName.html'
				}
			}
		})
		;


		
	};

})();



