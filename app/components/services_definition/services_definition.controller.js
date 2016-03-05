;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.services_definition.controller', ['ui.router'])
    .controller('Services_DefinitionController', Services_DefinitionController);

	//Services_DefinitionController.$inject = [];

	/** @ngInject */ 
	function Services_DefinitionController() { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		 
		vm.descriptionColapsed = true;
	};
	
	

})();
