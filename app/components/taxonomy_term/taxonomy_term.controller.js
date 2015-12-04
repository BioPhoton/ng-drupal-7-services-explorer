;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.taxonomy_term.controller', ['ngDrupal7Services-3_x.resources.taxonomy_term.resource', 'ngDrupal7Services-3_x.resources.taxonomy_term.channel'])
    .controller('TaxonomyTermController', TaxonomyTermController);

	TaxonomyTermController.$inject = ['$scope', 'TaxonomyTermResource', 'TaxonomyTermChannel'];

	/** @ngInject */ 
	function TaxonomyTermController($scope, TaxonomyTermResource, TaxonomyTermChannel) { 
		console.log('TaxonomyTermController'); 
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		
		//retrieve request
		
		//store requests
		vm.retrieveRequests = [];
		vm.retrieveData = {
				uid : ''
		};
		//test request and event callbacks
		vm.doRetrieve = doRetrieve;
		//test the retrieve on confirm event
		TaxonomyTermChannel.subRetrieveConfirmed($scope, subRetrieveConfirmedCallback);
		//test the retrieve on failed event
	    TaxonomyTermChannel.subRetrieveFailed($scope, subRetrieveFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //create request
		
		//store requests
		vm.createRequests = [];
		vm.createData = {
		};
		//test request and event callbacks
		vm.doCreate = doCreate;
		//test the create on confirm event
		TaxonomyTermChannel.subCreateConfirmed($scope, subCreateConfirmedCallback);
		//test the create on failed event
	    TaxonomyTermChannel.subCreateFailed($scope, subCreateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //update request
		
		//store requests
		vm.updateRequests = [];
		vm.updateData = {};
		//test request and event callbacks
		vm.doUpdate = doUpdate;
		//test the update on confirm event
		TaxonomyTermChannel.subUpdateConfirmed($scope, subUpdateConfirmedCallback);
		//test the update on failed event
	    TaxonomyTermChannel.subUpdateFailed($scope, subUpdateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //delete request
		
		//store requests
		vm.deleteRequests = [];
		vm.deleteErrors = {}
		vm.deleteData = {
				uid : '',
		};
		//test request and event callbacks
		vm.doDelete = doDelete;
		//test the delete on confirm event
		TaxonomyTermChannel.subDeleteConfirmed($scope, subDeleteConfirmedCallback);
		//test the delete on failed event
	    TaxonomyTermChannel.subDeleteFailed($scope, subDeleteFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //index request
		
		//store requests
		vm.indexRequests = [];
		vm.indexData = {};
	    vm.indexData.page = 0;
	    vm.indexData.fields = {};
	    vm.indexData.parameters = {};
	    vm.indexData.pagesize = 5;
		
	    vm.indexFieldsColapsed = true;
	    vm.indexParametersColapsed = true;
		//test request and event callbacks
		vm.doIndex = doIndex;
		//test the index on confirm event
		TaxonomyTermChannel.subIndexConfirmed($scope, subIndexConfirmedCallback);
		//test the index on failed event
	    TaxonomyTermChannel.subIndexFailed($scope, subIndexFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //selectNodes request
		
		//store requests
		vm.selectNodesRequests = [];
		vm.selectNodesData = {};
		//test request and event callbacks
		vm.doSelectNodes = doSelectNodes;
		//test the selectNodes on confirm event
		TaxonomyTermChannel.subSelectNodesConfirmed($scope, subSelectNodesConfirmedCallback);
		//test the selectNodes on failed event
	    TaxonomyTermChannel.subSelectNodesFailed($scope, subSelectNodesFailedCallback);

	    //__________________________________________________________________________________________________

	    
		///////////////////////
		
		//retrieve request
	    
	    //do request
		function doRetrieve(retrieveForm) {
			
			if(retrieveForm.$valid) {
				requestStart = Date.now();
		   		TaxonomyTermResource.retrieve(vm.retrieveData)
				    .then(
			    		//retrieve success
			    		function(data) { console.log('taxonomy_term retrieve success'); },
			    		//retrieve error
			    		function(data) { console.log('taxonomy_term retrieve error'); }
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
	
		//create request
	    
	    //do create
		function doCreate(createForm) {
	
			if(createForm.$valid) {	
				requestStart = Date.now();
				TaxonomyTermResource.create(vm.createData)
					.then(
						//create success
						function(data) { console.log('taxonomy_term create success'); },
						//create error
						function(data) { console.log('taxonomy_term create error'); }
					);
			}
		};
		
		//confirm callback
		function subCreateConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subCreateConfirmed'); 
			vm.createRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subCreateFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subCreateFailed'); 
			vm.createRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//update request
	    
	    //do update
		function doUpdate(updateForm) {			
			if(updateForm.$valid) {
				
				requestStart = Date.now();
		   		TaxonomyTermResource.update(vm.updateData)
				    .then(
			    		//update success
			    		function(data) { console.log('taxonomy_term update success'); },
			    		//update error
			    		function(data) { console.log('taxonomy_term update error'); }
				    );
			}
			
		};
		
		//confirm callback
		function subUpdateConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUpdateConfirmed'); 
			vm.updateRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subUpdateFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subUpdateFailed'); 
			vm.updateRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//delete request
	    
	    //do delete
		function doDelete(deleteForm) {
			if(deleteForm.$valid) {
				requestStart = Date.now();
		   		TaxonomyTermResource.delete(vm.deleteData)
				    .then(
			    		//delete success
			    		function(data) { console.log('taxonomy_term delete success'); },
			    		//delete error
			    		function(data) { console.log('taxonomy_term delete error'); }
				    );
			}
		};
		
		//confirm callback
		function subDeleteConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subDeleteConfirmed'); 
			vm.deleteRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subDeleteFailedCallback(data) { 
			requestEnd = Date.now();
			vm.deleteErrors = data;
			console.log('subDeleteFailed'); 
			vm.deleteRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//index request
	    
	    //do index
		function doIndex(indexForm) {
			if(indexForm.$valid) {
				requestStart = Date.now();
		   		TaxonomyTermResource.index(vm.indexData)
				    .then(
			    		//index success
			    		function(data) { console.log('taxonomy_term index success'); },
			    		//index error
			    		function(data) { console.log('taxonomy_term index error'); }
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
			vm.indexRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//selectNodes request
	    
	    //do request
		function doSelectNodes(selectNodesForm) {
			
			if(selectNodesForm.$valid) {
				requestStart = Date.now();
		   		TaxonomyTermResource.selectNodes(vm.selectNodesData)
				    .then(
			    		//register success
			    		function(data) { console.log('taxonomy_term selectNodes success'); },
			    		//register error
			    		function(data) { console.log('taxonomy_term selectNodes error'); }
				    );
			}
		};
		
		//confirm callback
		function subSelectNodesConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subSelectNodesConfirmed'); 
			vm.selectNodesRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subSelectNodesFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subSelectNodesFailed'); 
			vm.selectNodesRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
	}

})();