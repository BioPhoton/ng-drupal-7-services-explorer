;(function() {
    'use strict';

angular
    .module('ngDrupalServicesTests.comment.controller', ['d7-services.resources.comment.resource', 'd7-services.resources.comment.channel', 'd7-services.commons.helperService'])
    .controller('CommentController', CommentController);

	CommentController.$inject = ['$scope', 'CommentResource', 'CommentChannel','DrupalHelperService'];

	/** @ngInject */ 
	function CommentController($scope, CommentResource, CommentChannel, DrupalHelperService) { 
		console.log('CommentController'); 
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
		CommentChannel.subRetrieveConfirmed($scope, subRetrieveConfirmedCallback);
		//test the retrieve on failed event
	    CommentChannel.subRetrieveFailed($scope, subRetrieveFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //create request
		
		//store requests
		vm.createRequests = [];
		vm.createData = {};
		//test request and event callbacks
		vm.doCreate = doCreate;
		//test the create on confirm event
		CommentChannel.subCreateConfirmed($scope, subCreateConfirmedCallback);
		//test the create on failed event
	    CommentChannel.subCreateFailed($scope, subCreateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //update request
		
		//store requests
		vm.updateRequests = [];
		vm.updateData = {};
		//test request and event callbacks
		vm.doUpdate = doUpdate;
		//test the update on confirm event
		CommentChannel.subUpdateConfirmed($scope, subUpdateConfirmedCallback);
		//test the update on failed event
	    CommentChannel.subUpdateFailed($scope, subUpdateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //delete request
		
		//store requests
		vm.deleteRequests = [];
		vm.deleteErrors = {}
		vm.deleteData = {};
		//test request and event callbacks
		vm.doDelete = doDelete;
		//test the delete on confirm event
		CommentChannel.subDeleteConfirmed($scope, subDeleteConfirmedCallback);
		//test the delete on failed event
	    CommentChannel.subDeleteFailed($scope, subDeleteFailedCallback);

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
		CommentChannel.subIndexConfirmed($scope, subIndexConfirmedCallback);
		//test the index on failed event
	    CommentChannel.subIndexFailed($scope, subIndexFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //countAll request
		
		//store requests
		vm.countAllRequests = [];
		vm.countAllData = {};
		//test request and event callbacks
		vm.doCountAll = doCountAll;
		//test the countAll on confirm event
		CommentChannel.subCountAllConfirmed($scope, subCountAllConfirmedCallback);
		//test the countAll on failed event
	    CommentChannel.subCountAllFailed($scope, subCountAllFailedCallback);

	    //__________________________________________________________________________________________________

	    //countNew request
		
		//store requests
		vm.countNewRequests = [];
		vm.countNewData = {};
		//test request and event callbacks
		vm.doCountNew = doCountNew;
		//test the countNew on confirm event
		CommentChannel.subCountNewConfirmed($scope, subCountNewConfirmedCallback);
		//test the countNew on failed event
	    CommentChannel.subCountNewFailed($scope, subCountNewFailedCallback);

	    //__________________________________________________________________________________________________
	    
		///////////////////////
		
		//retrieve request
	    
	    //do request
		function doRetrieve(retrieveForm) {
			
			if(retrieveForm.$valid) {
				requestStart = Date.now();
		   		CommentResource.retrieve(vm.retrieveData)
				    .then(
			    		//retrieve success
			    		function(data) { console.log('comment retrieve success'); },
			    		//retrieve error
			    		function(data) { console.log('comment retrieve error'); }
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
				
				//format fields
				var formatedCreateData = angular.extend({}, vm.createData);
				formatedCreateData.comment_body = DrupalHelperService.structureField({'value' : formatedCreateData.comment_body_value});
				delete formatedCreateData.comment_body_value;
				
				requestStart = Date.now();
				CommentResource.create(formatedCreateData)
					.then(
						//create success
						function(data) { console.log('comment create success'); },
						//create error
						function(data) { console.log('comment create error'); }
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
				
				//format fields
				var formatedUpdateData = angular.extend({}, vm.updateData);
				formatedUpdateData.comment_body = DrupalHelperService.structureField({'value' : formatedUpdateData.comment_body_value});
				delete formatedUpdateData.comment_body_value;
			
			
				requestStart = Date.now();
		   		CommentResource.update(formatedUpdateData)
				    .then(
			    		//update success
			    		function(data) { console.log('comment update success'); },
			    		//update error
			    		function(data) { console.log('comment update error'); }
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
		   		CommentResource.delete(vm.deleteData)
				    .then(
			    		//delete success
			    		function(data) { console.log('comment delete success'); },
			    		//delete error
			    		function(data) { console.log('comment delete error'); }
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
		   		CommentResource.index(vm.indexData)
				    .then(
			    		//index success
			    		function(data) { console.log('comment index success'); },
			    		//index error
			    		function(data) { console.log('comment index error'); }
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
		
		//countAll request
	    
	    //do request
		function doCountAll(countAllForm) {
			console.log(countAllForm, vm.countAllData);
			if(countAllForm.$valid) {
				requestStart = Date.now();
		   		CommentResource.countAll(vm.countAllData)
				    .then(
			    		//register success
			    		function(data) { console.log('comment countAll success'); },
			    		//register error
			    		function(data) { console.log('comment countAll error'); }
				    );
			}
		};
		
		//confirm callback
		function subCountAllConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subCountAllConfirmed'); 
			vm.countAllRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subCountAllFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subCountAllFailed'); 
			vm.countAllRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
//_____________________________________________________________________________________________________________________________________________
		
		//countAll request
	    
	    //do request
		function doCountNew(countNewForm) {
			if(countNewForm.$valid) {
				requestStart = Date.now();
		   		CommentResource.countNew(vm.countNewData)
				    .then(
			    		//register success
			    		function(data) { console.log('comment countNew success'); },
			    		//register error
			    		function(data) { console.log('comment countNew error'); }
				    );
			}
		};
		
		//confirm callback
		function subCountNewConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subCountNewConfirmed'); 
			vm.countNewRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subCountNewFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subCountNewFailed'); 
			vm.countNewRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
	}

})();