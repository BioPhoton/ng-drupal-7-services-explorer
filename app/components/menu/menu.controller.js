;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.menu.controller', ['d7-services.resources.menu.resource', 'd7-services.resources.menu.channel'])
    .controller('MenuController', MenuController);

	MenuController.$inject = ['$scope', 'MenuResource', 'MenuChannel'];

	/** @ngInject */ 
	function MenuController($scope, MenuResource, MenuChannel) { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		
		
		//retrieve request
		
		//store requests
		vm.retrieveRequests = [];
		//test request
		vm.doConncet = doConncet;
		//test the retrieve on confirm event
		MenuChannel.subRetrieveConfirmed($scope, subRetrieveConfirmedCallback);
		//test the retrieve on failed event
	    MenuChannel.subRetrieveFailed($scope, subRetrieveFailedCallback);
	    
	    //__________________________________________________________________________________________________

		///////////////////////
		
		//retrieve request
	    
	    //do request
		function doConncet(retrieveForm) {
			
			if(retrieveForm.$valid) {
				requestStart = Date.now();
		   		MenuResource.retrieve()
				    .then(
				    		//retrieve success
				    		function(data) { console.log('menu retrieve success', data); },
				    		//retrieve error
				    		function(data) { console.log('menu retrieve error'); }
				    );
				}
		}
		//confirm callback
		function subRetrieveConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subRetrieveConfirmed'); 
			vm.retrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subRetrieveFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subRetrieveFailed'); 
			vm.retrieveRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________

	};
	
	

})();
