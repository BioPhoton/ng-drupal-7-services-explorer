;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.user.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.user.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider, $urlRouterProvider) 
	{ 

	    $stateProvider
        .state('app.services_3x.user', {
            url: "/user",
            abstract: true,
	        views : {
	        	'user' : {
			        templateUrl: './app/components/user/user.view.html',
			        controller: 'UserController',
			        controllerAs : 'user'
	        	}
	    	}
        })
        .state('app.services_3x.user.retrieve', {
            url: "/retrieve",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'retrieve' : {
			        templateUrl: './app/components/user/templates/retrieve.html'
	        	}
	    	}
        })
        .state('app.services_3x.user.create', {
            url: "/create",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'create' : {
			        templateUrl: './app/components/user/templates/create.html'
	        	}
	    	}
        })
        .state('app.services_3x.user.update', {
            url: "/update",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'update' : {
			        templateUrl: './app/components/user/templates/update.html'
	        	}
	    	}
        })
        .state('app.services_3x.user.delete', {
            url: "/delete",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'delete' : {
			        templateUrl: './app/components/user/templates/delete.html'
	        	}
	    	}
        })
        .state('app.services_3x.user.index', {
            url: "/index",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'index' : {
			        templateUrl: './app/components/user/templates/index.html'
	        	}
	    	}
        })
        .state('app.services_3x.user.register', {
            url: "/register",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'register' : {
			        templateUrl: './app/components/user/templates/register.html'
	        	}
	    	}
        })
        .state('app.services_3x.user.resend_welcome_email', {
            url: "/resend_welcome_email",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'resendWelcomeEmail' : {
			        templateUrl: './app/components/user/templates/resendWelcomeEmail.html'
	        	}
	    	}
        })
        .state('app.services_3x.user.cancel', {
            url: "/cancel",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'cancel' : {
			        templateUrl: './app/components/user/templates/cancel.html'
	        	}
	    	}
        })
        .state('app.services_3x.user.password_reset', {
            url: "/password_reset",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'passwordReset' : {
			        templateUrl: './app/components/user/templates/passwordReset.html'
	        	}
	    	}
        })
        .state('app.services_3x.user.request_new_password', {
            url: "/request_new_password",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'requestNewPassword' : {
			        templateUrl: './app/components/user/templates/requestNewPassword.html'
	        	}
	    	}
        })
        .state('app.services_3x.user.login', {
            url: "/login",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'login' : {
			        templateUrl: './app/components/user/templates/login.html'
	        	}
	    	}
        })
        .state('app.services_3x.user.logout', {
            url: "/logout",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'logout' : {
			        templateUrl: './app/components/user/templates/logout.html'
	        	}
	    	}
        })
        .state('app.services_3x.user.token', {
            url: "/token",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'token' : {
			        templateUrl: './app/components/user/templates/token.html'
	        	}
	    	}
        });
		
	};

})();



