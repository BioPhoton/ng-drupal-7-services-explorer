;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.services_menu.controller', ['ui.router'])
    .controller('Services_MenuController', Services_MenuController);

	//Services_MenuController.$inject = [];

	/** @ngInject */ 
	function Services_MenuController() { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		 
		vm.descriptionColapsed = true;
	};
	
	

})();
