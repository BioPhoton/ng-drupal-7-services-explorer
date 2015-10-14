;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.services_3x.controller', ['ui.router'])
    .controller('Services_3xController', Services_3xController);

	//Services_3xController.$inject = [];

	/** @ngInject */ 
	function Services_3xController() { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		
		vm.descriptionColapsed = true;
	};
	
	

})();
