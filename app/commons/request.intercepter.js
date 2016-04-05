(function() {
	'use strict';


	angular.module('d7-services.commons.customizeIntercepter', ['d7-services.commons.configurations'])
		   .factory('CustomSettings', CustomSettings)
		   .factory('RequestIntercepter', RequestIntercepter);

	RequestIntercepter.$inject = [ 'CustomSettings'];

	function RequestIntercepter(CustomSettings) {

		//setup and return service
		var intercepter = {
			request 	: request,
		};

		return intercepter;

		////////////

		function request(config){

			console.log(config.url);
			//replace default with custom
			//  - instance
			// - api

			console.log(CustomSettings);

			return config;
		}

	}

	CustomSettings.$inject = [ 'DrupalApiConstant'];
	function CustomSettings(DrupalApiConstant) {

		//setup and return service
		var customSettings = DrupalApiConstant;

		return customSettings;

	};


})();