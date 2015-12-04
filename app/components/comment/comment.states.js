;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.comment.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.comment.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider, $urlRouterProvider) 
	{ 
		
		console.log("Comment configFunction"); 

	    $stateProvider
        .state('app.services_3x.comment', {
            url: "/comment",
            abstract: true,
	        views : {
	        	'comment' : {
			        templateUrl: './app/components/comment/comment.view.html',
			        controller: 'CommentController',
			        controllerAs : 'comment'
	        	}
	    	}
        })
        .state('app.services_3x.comment.retrieve', {
            url: "/retrieve",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'retrieve' : {
			        templateUrl: './app/components/comment/templates/retrieve.html'
	        	}
	    	}
        })
        .state('app.services_3x.comment.create', {
            url: "/create",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'create' : {
			        templateUrl: './app/components/comment/templates/create.html'
	        	}
	    	}
        })
        .state('app.services_3x.comment.update', {
            url: "/update",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'update' : {
			        templateUrl: './app/components/comment/templates/update.html'
	        	}
	    	}
        })
        .state('app.services_3x.comment.delete', {
            url: "/delete",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'delete' : {
			        templateUrl: './app/components/comment/templates/delete.html'
	        	}
	    	}
        })
        .state('app.services_3x.comment.index', {
            url: "/index",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'index' : {
			        templateUrl: './app/components/comment/templates/index.html'
	        	}
	    	}
        })
        .state('app.services_3x.comment.countAll', {
            url: "/countAll",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'countAll' : {
			        templateUrl: './app/components/comment/templates/countAll.html'
	        	}
	    	}
        })
        .state('app.services_3x.comment.countNew', {
            url: "/countNew",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'countNew' : {
			        templateUrl: './app/components/comment/templates/countNew.html'
	        	}
	    	}
        });
		
	};

})();



