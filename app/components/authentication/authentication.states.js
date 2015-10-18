;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.authentication.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.authentication.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider, $urlRouterProvider) 
	{ 

	    $stateProvider
        .state('app.commons.authentication', {
            url: "/user",
            abstract: true,
	        views : {
	        	'user' : {
			        templateUrl: './app/components/authentication/authentication.view.html',
			        controller: 'AuthenticationController',
			        controllerAs : 'authentication'
	        	}
	    	}
        })
        .state('app.commons.authentication.retrieve', {
            url: "/retrieve",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'retrieve' : {
			        templateUrl: './app/components/user/templates/retrieve.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.create', {
            url: "/create",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'create' : {
			        templateUrl: './app/components/user/templates/create.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.update', {
            url: "/update",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'update' : {
			        templateUrl: './app/components/user/templates/update.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.delete', {
            url: "/delete",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'delete' : {
			        templateUrl: './app/components/user/templates/delete.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.isAuthorized', {
            url: "/is-authorized",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'isAuthorized' : {
			        templateUrl: './app/components/user/templates/isAuthorized.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.login', {
            url: "/login",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'login' : {
			        templateUrl: './app/components/user/templates/login.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.logout', {
            url: "/logout",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'logout' : {
			        templateUrl: './app/components/user/templates/logout.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.getAuthenticationHeaders', {
            url: "/get-authentication-headers",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'getAuthenticationHeaders' : {
			        templateUrl: './app/components/user/templates/getAuthenticationHeaders.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.getConnectionState', {
            url: "/get-connection-state",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'getConnectionState' : {
			        templateUrl: './app/components/user/templates/getConnectionState.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.getCurrentUser', {
            url: "/get-current-user",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'getCurrentUser' : {
			        templateUrl: './app/components/user/templates/getCurrentUser.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.getLastConnectionTime', {
            url: "/get-last-connection-time",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'getLastConnectionTime' : {
			        templateUrl: './app/components/user/templates/getLastConnectionTime.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.refreshConnection', {
            url: "/refresh-connection",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'refreshConnection' : {
			        templateUrl: './app/components/user/templates/refreshConnection.html'
	        	}
	    	}
        })

		
	};

})();



