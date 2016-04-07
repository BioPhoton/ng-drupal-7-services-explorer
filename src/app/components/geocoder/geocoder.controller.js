;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.geocoder.controller', ['d7-services.resources.geocoder'])
    .controller('GeocoderController', GeocoderController);

	GeocoderController.$inject = ['$scope', 'GeocoderResource', 'GeocoderChannel','GeocoderHelperConstant',];

	/** @ngInject */ 
	function GeocoderController($scope, GeocoderResource, GeocoderChannel,GeocoderHelperConstant) {
		
		var requestEnd = 0;
		var requestStart = 0;
		
		
		
		// jshint validthis: true 
		var vm = this;
		vm.descriptionColapsed = true;
		
		//retrieve request
		
		//store requests
		//operator constants
		vm.handlers = GeocoderHelperConstant.handlers;
		vm.output_formats = GeocoderHelperConstant.output_formats;

		vm.retrieveRequests = [];
		vm.retrieveData = {
				data : '',
		};
		//test request and event callbacks
		vm.doRetrieve = doRetrieve;
		//test the retrieve on confirm event
		GeocoderChannel.subRetrieveConfirmed($scope, subRetrieveConfirmedCallback);
		//test the retrieve on failed event
	    GeocoderChannel.subRetrieveFailed($scope, subRetrieveFailedCallback);

	    //__________________________________________________________________________________________________

	    //index request
		
		//store requests
		vm.indexRequests = [];

	    vm.indexFieldsColapsed = true;
	    vm.indexParametersColapsed = true;
		//test request and event callbacks
		vm.doIndex = doIndex;
		//test the index on confirm event
		GeocoderChannel.subIndexConfirmed($scope, subIndexConfirmedCallback);
		//test the index on failed event
	    GeocoderChannel.subIndexFailed($scope, subIndexFailedCallback);

	    //__________________________________________________________________________________________________

		///////////////////////
		
		//retrieve request
	    
	    //do request
		function doRetrieve(retrieveForm) {
			
			if(retrieveForm.$valid) {
				requestStart = Date.now();
				var data = angular.copy(vm.retrieveData);
		   		GeocoderResource.retrieve(data)
				    .then(
			    		//retrieve success
			    		function(data) { console.log('geocoder retrieve success'); },
			    		//retrieve error
			    		function(data) { console.log('geocoder retrieve error'); }
				    );
			}
		};
		
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

		//index request
	    
	    //do index
		function doIndex(indexForm) {
			if(indexForm.$valid) {
				requestStart = Date.now();
		   		GeocoderResource.index()
				    .then(
			    		//index success
			    		function(data) { console.log('geocoder index success'); },
			    		//index error
			    		function(data) { console.log('geocoder index error'); }
				    );
			}
		};
		
		//confirm callback
		function subIndexConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subIndexConfirmed'); 
			vm.indexRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subIndexFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subIndexFailed'); 
			vm.indexRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________

	};
	
	

})();
