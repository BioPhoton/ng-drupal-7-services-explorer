;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.services_views.controller', ['ui.router'])
    .controller('Services_ViewsController', Services_ViewsController);

	//Services_ViewsController.$inject = [];

	/** @ngInject */ 
	function Services_ViewsController() { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		 
		vm.descriptionColapsed = true;
	};
	
	

})();
