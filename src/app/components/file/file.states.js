;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.file.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.file.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider, $urlRouterProvider) 
	{ 

	    $stateProvider
        .state('app.services_3x.file', {
            url: "/file",
            abstract: true,
	        views : {
	        	'file' : {
			        templateUrl: 'app/components/file/file.view.html',
			        controller: 'FileController',
			        controllerAs : 'file'
	        	}
	    	}
        })
        .state('app.services_3x.file.retrieve', {
            url: "/retrieve",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'retrieve' : {
			        templateUrl: 'app/components/file/templates/retrieve.html'
	        	}
	    	}
        })
        .state('app.services_3x.file.create', {
            url: "/create",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'create' : {
			        templateUrl: 'app/components/file/templates/create.html'
	        	}
	    	}
        })
        .state('app.services_3x.file.delete', {
            url: "/delete",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'delete' : {
			        templateUrl: 'app/components/file/templates/delete.html'
	        	}
	    	}
        })
        .state('app.services_3x.file.index', {
            url: "/index",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'index' : {
			        templateUrl: 'app/components/file/templates/index.html'
	        	}
	    	}
        })
        .state('app.services_3x.file.createRaw', {
            url: "/create_raw",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'createRaw' : {
			        templateUrl: 'app/components/file/templates/createRaw.html'
	        	}
	    	}
        });
		
	};

})();



