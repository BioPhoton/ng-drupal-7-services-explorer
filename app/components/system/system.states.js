;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.system.states', ['ui.router','ct.ui.router.extras','ngDrupalServicesTests.system.controller'])
    .config(configFunction);

	configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

	/** @ngInject */ 
	function configFunction($stateProvider, $urlRouterProvider) 
	{ 

	    $stateProvider
        .state('app.services_3x.system', {
            url: "/system",
            abstract: true,
	        views : {
	        	'system' : {
			        templateUrl: 'app/components/system/system.view.html',
			        controller: 'SystemController',
			        controllerAs : 'system'
	        	}
	    	}
        })
        .state('app.services_3x.system.connect', {
            url: "/connect",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'connect' : {
			        templateUrl: 'app/components/system/templates/connect.html'
	        	}
	    	}
        })
       .state('app.services_3x.system.get_variable', {
            url: "/get_variable",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'getVariable' : {
			        templateUrl: 'app/components/system/templates/getVariable.html'
	        	}
	    	}
        })
        .state('app.services_3x.system.set_variable', {
            url: "/set_variables",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'setVariable' : {
			        templateUrl: 'app/components/system/templates/setVariable.html'
	        	}
	    	}
        })
        .state('app.services_3x.system.del_variable', {
            url: "/del_variable",
            deepStateRedirect: true,
	        sticky: true,
            views : {
	        	'delVariable' : {
			        templateUrl: 'app/components/system/templates/delVariable.html'
	        	}
	    	}
        });
		
	};

})();



