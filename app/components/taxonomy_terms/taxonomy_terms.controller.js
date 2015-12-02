;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.taxonomy_terms.controller', ['ngDrupal7Services-3_x.resources.taxonomy_terms.resource', 'ngDrupal7Services-3_x.resources.taxonomy_terms.channel'])
    .controller('TaxonomyTermsController', TaxonomyTermsController);

	TaxonomyTermsController.$inject = ['$scope', 'TaxonomyTermsResource', 'TaxonomyTermsChannel'];

	/** @ngInject */ 
	function TaxonomyTermsController($scope, TaxonomyTermsResource, TaxonomyTermsChannel) { 
		console.log('TaxonomyTermsController'); 
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
		TaxonomyTermsChannel.subRetrieveConfirmed($scope, subRetrieveConfirmedCallback);
		//test the retrieve on failed event
	    TaxonomyTermsChannel.subRetrieveFailed($scope, subRetrieveFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //create request
		
		//store requests
		vm.createRequests = [];
		vm.createData = {
		};
		//test request and event callbacks
		vm.doCreate = doCreate;
		//test the create on confirm event
		TaxonomyTermsChannel.subCreateConfirmed($scope, subCreateConfirmedCallback);
		//test the create on failed event
	    TaxonomyTermsChannel.subCreateFailed($scope, subCreateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //update request
		
		//store requests
		vm.updateRequests = [];
		vm.updateData = {};
		//test request and event callbacks
		vm.doUpdate = doUpdate;
		//test the update on confirm event
		TaxonomyTermsChannel.subUpdateConfirmed($scope, subUpdateConfirmedCallback);
		//test the update on failed event
	    TaxonomyTermsChannel.subUpdateFailed($scope, subUpdateFailedCallback);

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
		TaxonomyTermsChannel.subDeleteConfirmed($scope, subDeleteConfirmedCallback);
		//test the delete on failed event
	    TaxonomyTermsChannel.subDeleteFailed($scope, subDeleteFailedCallback);

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
		TaxonomyTermsChannel.subIndexConfirmed($scope, subIndexConfirmedCallback);
		//test the index on failed event
	    TaxonomyTermsChannel.subIndexFailed($scope, subIndexFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //selectNodes request
		
		//store requests
		vm.selectNodesRequests = [];
		vm.selectNodesData = {
				uid : ''
		};
		//test request and event callbacks
		vm.doSelectNodes = doSelectNodes;
		//test the selectNodes on confirm event
		TaxonomyTermsChannel.subSelectNodesConfirmed($scope, subSelectNodesConfirmedCallback);
		//test the selectNodes on failed event
	    TaxonomyTermsChannel.subSelectNodesFailed($scope, subSelectNodesFailedCallback);

	    //__________________________________________________________________________________________________

	    
		///////////////////////
		
		//retrieve request
	    
	    //do request
		function doRetrieve(retrieveForm) {
			
			if(retrieveForm.$valid) {
				requestStart = Date.now();
		   		TaxonomyTermsResource.retrieve(vm.retrieveData)
				    .then(
			    		//retrieve success
			    		function(data) { console.log('taxonomy_terms retrieve success'); },
			    		//retrieve error
			    		function(data) { console.log('taxonomy_terms retrieve error'); }
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
				TaxonomyTermsResource.create(vm.createData)
					.then(
						//create success
						function(data) { console.log('taxonomy_terms create success'); },
						//create error
						function(data) { console.log('taxonomy_terms create error'); }
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
		   		TaxonomyTermsResource.update(vm.updateData)
				    .then(
			    		//update success
			    		function(data) { console.log('taxonomy_terms update success'); },
			    		//update error
			    		function(data) { console.log('taxonomy_terms update error'); }
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
		   		TaxonomyTermsResource.delete(vm.deleteData)
				    .then(
			    		//delete success
			    		function(data) { console.log('taxonomy_terms delete success'); },
			    		//delete error
			    		function(data) { console.log('taxonomy_terms delete error'); }
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
		   		TaxonomyTermsResource.index(vm.indexData)
				    .then(
			    		//index success
			    		function(data) { console.log('taxonomy_terms index success'); },
			    		//index error
			    		function(data) { console.log('taxonomy_terms index error'); }
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
		   		TaxonomyTermsResource.selectNodes(vm.selectNodesData)
				    .then(
			    		//register success
			    		function(data) { console.log('taxonomy_terms selectNodes success'); },
			    		//register error
			    		function(data) { console.log('taxonomy_terms selectNodes error'); }
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
			vm.registerRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
	}

})();