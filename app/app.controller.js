(function() {
    'use strict';

	angular
	    .module('ngDrupalServicesTests.app.controller', ['ngDrupal7Services-3_x.commons.authentication.service'])
	    .controller('AppController', AppController);
	
	AppController.$inject = ['$scope', 'AuthenticationService'];
	
	/** @ngInject */
	function AppController($scope, AuthenticationService) { 
		/* jshint validthis: true */
		var vm = this;
		
		vm.navCollapsed = true;
		
		AuthenticationService.refreshConnection();
	
	};



})();
