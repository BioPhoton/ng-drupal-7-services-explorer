;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.geocoder_api.controller', ['ui.router'])
    .controller('Geocoder_ApiController', Geocoder_ApiController);

	//Geocoder_ApiController.$inject = [];

	/** @ngInject */ 
	function Geocoder_ApiController() { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		 
		vm.descriptionColapsed = true;
	};
	
	

})();
