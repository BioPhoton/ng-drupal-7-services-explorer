;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.views.controller', ['ngDrupal7Services-3_x.resources.views.resource', 'ngDrupal7Services-3_x.resources.views.channel'])
    .controller('ViewsController', ViewsController);

	ViewsController.$inject = ['$scope','ViewsResource', 'ViewsChannel'];

	/** @ngInject */ 
	function ViewsController($scope, ViewsResource, ViewsChannel) { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		
		
		//retrieve request
		
		//store requests
		vm.retrieveRequests = [];
		
		vm.retrieveData = {};
		vm.retrieveData.view_name = 'testview';
		vm.retrieveData.display_id = 'page';
		vm.retrieveData.args = "";
		vm.retrieveData.offset = "";
		vm.retrieveData.limit = "";
		//vm.retrieveData.format_output;
		//vm.retrieveData.exposed_filters;
		
		//test request
		vm.doRetrieve = doRetrieve;
		//test the retrieve on confirm event
		ViewsChannel.subRetrieveConfirmed($scope, subRetrieveConfirmedCallback);
		//test the retrieve on failed event
	    ViewsChannel.subRetrieveFailed($scope, subRetrieveFailedCallback);
	    
	    //__________________________________________________________________________________________________
  
		///////////////////////
		
		//retrieve request
	    
	    //do request
		function doRetrieve(retrieveForm) {
			
			if(retrieveForm.$valid) {
				requestStart = Date.now();
				console.log(ViewsResource); 
				ViewsResource.retrieve(vm.retrieveData)
				    .then(
				    		//retrieve success
				    		function(data) { console.log('views retrieve success', data); },
				    		//retrieve error
				    		function(data) { console.log('views retrieve error'); }
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
