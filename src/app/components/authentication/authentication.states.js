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
            url: "/authentication",
            abstract: true,
	        views : {
	        	'authentication' : {
			        templateUrl: 'app/components/authentication/authentication.view.html',
			        controller	: 'AuthenticationController',
			        controllerAs : 'authentication'
	        	}
	    	}
        })
        .state('app.commons.authentication.isAuthorized', {
            url: "/is-authorized",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'isAuthorized' : {
			        templateUrl: 'app/components/authentication/templates/isAuthorized.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.login', {
            url: "/login",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'login' : {
			        templateUrl: 'app/components/authentication/templates/login.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.logout', {
            url: "/logout",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'logout' : {
			        templateUrl: 'app/components/authentication/templates/logout.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.getAuthenticationHeaders', {
            url: "/get-authentication-headers",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'getAuthenticationHeaders' : {
			        templateUrl: 'app/components/authentication/templates/getAuthenticationHeaders.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.getConnectionState', {
            url: "/get-connection-state",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'getConnectionState' : {
			        templateUrl: 'app/components/authentication/templates/getConnectionState.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.getCurrentUser', {
            url: "/get-current-user",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'getCurrentUser' : {
			        templateUrl: 'app/components/authentication/templates/getCurrentUser.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.getLastConnectTime', {
            url: "/get-last-connect-time",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'getLastConnectTime' : {
			        templateUrl: 'app/components/authentication/templates/getLastConnectTime.html'
	        	}
	    	}
        })
        .state('app.commons.authentication.refreshConnection', {
            url: "/refresh-connection",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'refreshConnection' : {
			        templateUrl: 'app/components/authentication/templates/refreshConnection.html'
	        	}
	    	}
        })

		
	};

})();



