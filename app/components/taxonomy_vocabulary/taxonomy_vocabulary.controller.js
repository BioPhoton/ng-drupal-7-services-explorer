;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.taxonomy_vocabulary.controller', ['ngDrupal7Services-3_x.resources.taxonomy_vocabulary.resource', 'ngDrupal7Services-3_x.resources.taxonomy_vocabulary.channel'])
    .controller('TaxonomyVocabularyController', TaxonomyVocabularyController);

	TaxonomyVocabularyController.$inject = ['$scope', 'TaxonomyVocabularyResource', 'TaxonomyVocabularyChannel'];

	/** @ngInject */ 
	function TaxonomyVocabularyController($scope, TaxonomyVocabularyResource, TaxonomyVocabularyChannel) { 
		console.log('TaxonomyVocabularyController'); 
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		
		//retrieve request
		
		//store requests
		vm.retrieveRequests = [];
		vm.retrieveData = {};
		//test request and event callbacks
		vm.doRetrieve = doRetrieve;
		//test the retrieve on confirm event
		TaxonomyVocabularyChannel.subRetrieveConfirmed($scope, subRetrieveConfirmedCallback);
		//test the retrieve on failed event
	    TaxonomyVocabularyChannel.subRetrieveFailed($scope, subRetrieveFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //create request
		
		//store requests
		vm.createRequests = [];
		vm.createData = {};
		//test request and event callbacks
		vm.doCreate = doCreate;
		//test the create on confirm event
		TaxonomyVocabularyChannel.subCreateConfirmed($scope, subCreateConfirmedCallback);
		//test the create on failed event
	    TaxonomyVocabularyChannel.subCreateFailed($scope, subCreateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //update request
		
		//store requests
		vm.updateRequests = [];
		vm.updateData = {};
		//test request and event callbacks
		vm.doUpdate = doUpdate;
		//test the update on confirm event
		TaxonomyVocabularyChannel.subUpdateConfirmed($scope, subUpdateConfirmedCallback);
		//test the update on failed event
	    TaxonomyVocabularyChannel.subUpdateFailed($scope, subUpdateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //delete request
		
		//store requests
		vm.deleteRequests = [];
		vm.deleteErrors = {}
		vm.deleteData = {};
		//test request and event callbacks
		vm.doDelete = doDelete;
		//test the delete on confirm event
		TaxonomyVocabularyChannel.subDeleteConfirmed($scope, subDeleteConfirmedCallback);
		//test the delete on failed event
	    TaxonomyVocabularyChannel.subDeleteFailed($scope, subDeleteFailedCallback);

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
		TaxonomyVocabularyChannel.subIndexConfirmed($scope, subIndexConfirmedCallback);
		//test the index on failed event
	    TaxonomyVocabularyChannel.subIndexFailed($scope, subIndexFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //getTree request
		
		//store requests
		vm.getTreeRequests = [];
		vm.getTreeData = {};
		//test request and event callbacks
		vm.doGetTree = doGetTree;
		//test the getTree on confirm event
		TaxonomyVocabularyChannel.subGetTreeConfirmed($scope, subGetTreeConfirmedCallback);
		//test the getTree on failed event
	    TaxonomyVocabularyChannel.subGetTreeFailed($scope, subGetTreeFailedCallback);

	    //__________________________________________________________________________________________________

	    
		///////////////////////
		
		//retrieve request
	    
	    //do request
		function doRetrieve(retrieveForm) {
			console.log(vm.retrieveData); 
			if(retrieveForm.$valid) {
				requestStart = Date.now();
		   		TaxonomyVocabularyResource.retrieve(vm.retrieveData)
				    .then(
			    		//retrieve success
			    		function(data) { console.log('taxonomy_vocabulary retrieve success'); },
			    		//retrieve error
			    		function(data) { console.log('taxonomy_vocabulary retrieve error'); }
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
				TaxonomyVocabularyResource.create(vm.createData)
					.then(
						//create success
						function(data) { console.log('taxonomy_vocabulary create success'); },
						//create error
						function(data) { console.log('taxonomy_vocabulary create error'); }
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
		   		TaxonomyVocabularyResource.update(vm.updateData)
				    .then(
			    		//update success
			    		function(data) { console.log('taxonomy_vocabulary update success'); },
			    		//update error
			    		function(data) { console.log('taxonomy_vocabulary update error'); }
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
		   		TaxonomyVocabularyResource.delete(vm.deleteData)
				    .then(
			    		//delete success
			    		function(data) { console.log('taxonomy_vocabulary delete success'); },
			    		//delete error
			    		function(data) { console.log('taxonomy_vocabulary delete error'); }
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
		   		TaxonomyVocabularyResource.index(vm.indexData)
				    .then(
			    		//index success
			    		function(data) { console.log('taxonomy_vocabulary index success'); },
			    		//index error
			    		function(data) { console.log('taxonomy_vocabulary index error'); }
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
		
		//getTree request
	    
	    //do request
		function doGetTree(getTreeForm) {
			
			if(getTreeForm.$valid) {
				requestStart = Date.now();
		   		TaxonomyVocabularyResource.getTree(vm.getTreeData)
				    .then(
			    		//register success
			    		function(data) { console.log('taxonomy_vocabulary getTree success'); },
			    		//register error
			    		function(data) { console.log('taxonomy_vocabulary getTree error'); }
				    );
			}
		};
		
		//confirm callback
		function subGetTreeConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subGetTreeConfirmed'); 
			vm.getTreeRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subGetTreeFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subGetTreeFailed'); 
			vm.getTreeRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
	}

})();