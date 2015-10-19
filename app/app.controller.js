(function() {
    'use strict';

	angular
	    .module('ngDrupalServicesTests.app.controller', ['ngDrupal7Services-3_x.commons.authentication.service', 'ngDrupal7Services-3_x.commons.accessControl.constant',  'commons.directives.navbarLogin'])
	    .controller('AppController', AppController);
	
	AppController.$inject = ['$state', 'AuthenticationService', 'accessControlConstant'];
	
	/** @ngInject */
	function AppController($state, AuthenticationService, accessControlConstant) { 
		/* jshint validthis: true */
		var vm = this;
		
		vm.navCollapsed = true;
		vm.$state = $state;
		
		vm.accessLevels = accessControlConstant.accessLevels;
		
		AuthenticationService.refreshConnection();
	};



})();
