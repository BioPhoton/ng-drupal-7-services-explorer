(function() {
    'use strict';

	angular
	    .module('ngDrupalServicesTests.app.controller', ['ngDrupal7Services-3_x.commons.authentication.service', 'ngDrupal7Services-3_x.commons.acl.constant'])
	    .controller('AppController', AppController);
	
	AppController.$inject = ['$scope', 'AuthenticationService', 'accessControlConstant'];
	
	/** @ngInject */
	function AppController($scope, AuthenticationService, accessControlConstant) { 
		/* jshint validthis: true */
		var vm = this;
		
		vm.navCollapsed = true;
		
		vm.accessLevels = accessControlConstant.accessLevels;
		AuthenticationService.refreshConnection();
	
	};



})();
