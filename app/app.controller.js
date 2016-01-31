(function() {
    'use strict';

	angular
	    .module('ngDrupalServicesTests.app.controller', ['commons.directives.navbarLogin'])
	    .controller('AppController', AppController);
	
	AppController.$inject = ['$state', 'AuthenticationService', 'AuthenticationServiceConstant'];
	
	/** @ngInject */
	function AppController($state, AuthenticationService, AuthenticationServiceConstant) { 
		/* jshint validthis: true */
		var vm = this;
		
		vm.navCollapsed = true;
		vm.$state = $state;
		
		vm.accessLevels = AuthenticationServiceConstant.accessLevels;
		
		AuthenticationService.refreshConnection();
	};



})();
