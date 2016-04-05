;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.home.controller', [])
    .controller('HomeController', HomeController);

	HomeController.$inject = ['DrupalApiConstant'];

	/** @ngInject */ 
	function HomeController(DrupalApiConstant )
	{ 
		// jshint validthis: true 
		var vm = this;
	    vm.drupal_instance;
		vm.api_endpoint;

		vm.setCustomSettings = setCustomSettings;
		///////////////////////

		init();
		//_____________________________________________________________________________________________________________________________________________

		function init() {
			vm.drupal_instance = DrupalApiConstant.drupal_instance;
			vm.api_endpoint = DrupalApiConstant.api_endpoint;
		}

		function setCustomSettings() {
			DrupalApiConstant.drupal_instance = vm.drupal_instance;
			DrupalApiConstant.api_endpoint = vm.api_endpoint;

			console.log(DrupalApiConstant);
		}
	};

})();
