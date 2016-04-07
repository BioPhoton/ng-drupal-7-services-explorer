;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.definition.controller', ['d7-services.resources.definition.resource', 'd7-services.resources.definition.channel', 'd7-services.commons.helperService'])
    .controller('DefinitionController', DefinitionController);

	DefinitionController.$inject = ['$scope', 'DefinitionResource', 'DefinitionChannel', 'DrupalHelperService'];

	/** @ngInject */ 
	function DefinitionController($scope, DefinitionResource, DefinitionChannel, DrupalHelperService) { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		vm.descriptionColapsed = true;

	    //index request
		
		//store requests
		vm.indexRequests = [];

	    vm.indexFieldsColapsed = true;
	    vm.indexParametersColapsed = true;
		//test request and event callbacks
		vm.doIndex = doIndex;
		//test the index on confirm event
		DefinitionChannel.subIndexConfirmed($scope, subIndexConfirmedCallback);
		//test the index on failed event
	    DefinitionChannel.subIndexFailed($scope, subIndexFailedCallback);

	    //__________________________________________________________________________________________________

	    
		///////////////////////
		
		//index request
	    
	    //do index
		function doIndex(indexForm) {
			if(indexForm.$valid) {
				requestStart = Date.now();
		   		DefinitionResource.index()
				    .then(
			    		//index success
			    		function(data) { console.log('definition index success'); },
			    		//index error
			    		function(data) { console.log('definition index error'); }
				    );
			}
		};
		
		//confirm callback
		function subIndexConfirmedCallback(data) { 
			requestEnd = Date.now();
			vm.indexRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subIndexFailedCallback(data) { 
			requestEnd = Date.now();
			vm.indexRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________

	};
	
	

})();
