;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.commons.controller', [])
    .controller('CommonsController', CommonsController);

	//CommonsController.$inject = [];

	/** @ngInject */ 
	function CommonsController() { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		
		vm.descriptionColapsed = true;
	};
	
	

})();
