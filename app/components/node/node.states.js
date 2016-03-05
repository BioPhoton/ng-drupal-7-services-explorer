;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.node.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.node.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider, $urlRouterProvider) 
	{ 

	    $stateProvider
        .state('app.services_3x.node', {
            url: "/node",
            abstract: true,
	        views : {
	        	'node' : {
			        templateUrl: 'app/components/node/node.view.html',
			        controller: 'NodeController',
			        controllerAs : 'node'
	        	}
	    	}
        })
        .state('app.services_3x.node.retrieve', {
            url: "/retrieve",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'retrieve' : {
			        templateUrl: 'app/components/node/templates/retrieve.html'
	        	}
	    	}
        })
        .state('app.services_3x.node.create', {
            url: "/create",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'create' : {
			        templateUrl: 'app/components/node/templates/create.html'
	        	}
	    	}
        })
        .state('app.services_3x.node.update', {
            url: "/update",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'update' : {
			        templateUrl: 'app/components/node/templates/update.html'
	        	}
	    	}
        })
        .state('app.services_3x.node.delete', {
            url: "/delete",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'delete' : {
			        templateUrl: 'app/components/node/templates/delete.html'
	        	}
	    	}
        })
        .state('app.services_3x.node.index', {
            url: "/index",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'index' : {
			        templateUrl: 'app/components/node/templates/index.html'
	        	}
	    	}
        })
        .state('app.services_3x.node.files', {
            url: "/files",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'files' : {
			        templateUrl: 'app/components/node/templates/files.html'
	        	}
	    	}
        })
        .state('app.services_3x.node.comments', {
            url: "/comments",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'comments' : {
			        templateUrl: 'app/components/node/templates/comments.html'
	        	}
	    	}
        })
        .state('app.services_3x.node.attach_file', {
            url: "/attachFile",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'attachFile' : {
			        templateUrl: 'app/components/node/templates/attachFile.html'
	        	}
	    	}
        });
		
	};

})();



