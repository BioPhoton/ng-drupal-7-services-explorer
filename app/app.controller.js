(function() {
    'use strict';

	angular
	    .module('ngDrupalServicesTests.app.controller', [])
	    .controller('AppController', AppController);
	
	AppController.$inject = ['$scope'];
	
	/** @ngInject */
	function AppController($scope) { 
		/* jshint validthis: true */
		var vm = this;
		
		vm.navCollapsed = true;
	};



})();
