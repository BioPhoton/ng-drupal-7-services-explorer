;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.node.controller', ['d7-services.resources.node.resource', 'd7-services.resources.node.channel', 'd7-services.commons.helperService'])
    .controller('NodeController', NodeController);

	NodeController.$inject = ['$scope', 'NodeResource', 'NodeChannel', 'DrupalHelperService'];

	/** @ngInject */ 
	function NodeController($scope, NodeResource, NodeChannel, DrupalHelperService) { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		vm.descriptionColapsed = true;
		
		//retrieve request
		
		//store requests
		vm.retrieveRequests = [];
		vm.retrieveData = {};
		//test request and event callbacks
		vm.doRetrieve = doRetrieve;
		//test the retrieve on confirm event
		NodeChannel.subRetrieveConfirmed($scope, subRetrieveConfirmedCallback);
		//test the retrieve on failed event
	    NodeChannel.subRetrieveFailed($scope, subRetrieveFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //create request
		
		//store requests
		vm.createRequests = [];
		vm.createData = {};
		//test request and event callbacks
		vm.doCreate = doCreate;
		//test the create on confirm event
		NodeChannel.subCreateConfirmed($scope, subCreateConfirmedCallback);
		//test the create on failed event
	    NodeChannel.subCreateFailed($scope, subCreateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //update request
		
		//store requests
		vm.updateRequests = [];
		vm.updateData = {};
		//test request and event callbacks
		vm.doUpdate = doUpdate;
		//test the update on confirm event
		NodeChannel.subUpdateConfirmed($scope, subUpdateConfirmedCallback);
		//test the update on failed event
	    NodeChannel.subUpdateFailed($scope, subUpdateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //delete request
		
		//store requests
		vm.deleteRequests = [];
		vm.deleteErrors = {}
		vm.deleteData = {};
		//test request and event callbacks
		vm.doDelete = doDelete;
		//test the delete on confirm event
		NodeChannel.subDeleteConfirmed($scope, subDeleteConfirmedCallback);
		//test the delete on failed event
	    NodeChannel.subDeleteFailed($scope, subDeleteFailedCallback);

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
		NodeChannel.subIndexConfirmed($scope, subIndexConfirmedCallback);
		//test the index on failed event
	    NodeChannel.subIndexFailed($scope, subIndexFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //files request
		
		//store requests
		vm.filesRequests = [];
		vm.filesErrors = {}
		vm.filesData = {};
		//test request and event callbacks
		vm.doFiles = doFiles;
		//test the delete on confirm event
		NodeChannel.subFilesConfirmed($scope, subFilesConfirmedCallback);
		//test the delete on failed event
	    NodeChannel.subFilesFailed($scope, subFilesFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //comments request
		
		//store requests
		vm.commentsRequests = [];
		vm.commentsErrors = {}
		vm.commentsData = {
				nid : '',
		};
		//test request and event callbacks
		vm.doComments = doComments;
		//test the delete on confirm event
		NodeChannel.subCommentsConfirmed($scope, subCommentsConfirmedCallback);
		//test the delete on failed event
	    NodeChannel.subCommentsFailed($scope, subCommentsFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //attachFile request
		
		//store requests
		vm.attachFileRequests = [];
		vm.attachFileErrors = {}
		vm.attachFileData = {};
		//test request and event callbacks
		vm.doAttachFile = doAttachFile;
		//test the delete on confirm event
		NodeChannel.subAttachFileConfirmed($scope, subAttachFileConfirmedCallback);
		//test the delete on failed event
	    NodeChannel.subAttachFileFailed($scope, subAttachFileFailedCallback);

	    //__________________________________________________________________________________________________
	    
		///////////////////////
		
		//retrieve request
	    
	    //do request
		function doRetrieve(retrieveForm) {
			
			if(retrieveForm.$valid) {
				requestStart = Date.now();
		   		NodeResource.retrieve(vm.retrieveData)
				    .then(
			    		//retrieve success
			    		function(data) { console.log('node retrieve success'); },
			    		//retrieve error
			    		function(data) { console.log('node retrieve error'); }
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
				formatedCreateData.body = DrupalHelperService.structureField({'value' : formatedCreateData.body_value, 'summary' : formatedCreateData.body_summary});
				delete formatedCreateData.body_value;
				delete formatedCreateData.body_summary;
				
				formatedCreateData.field_custom_field = DrupalHelperService.structureField({'value' : formatedCreateData.field_custom_field});
				
				requestStart = Date.now();
				NodeResource.create(formatedCreateData)
					.then(
						//create success
						function(data) { console.log('node create success'); },
						//create error
						function(data) { console.log('node create error'); }
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
				formatedUpdateData.body = DrupalHelperService.structureField({'value' : formatedUpdateData.body_value, 'summary' : formatedUpdateData.body_summary});
				delete formatedUpdateData.body_value;
				delete formatedUpdateData.body_summary;
				
				formatedUpdateData.field_custom_field = DrupalHelperService.structureField({'value' : formatedUpdateData.field_custom_field});
				
				requestStart = Date.now();
		   		NodeResource.update(formatedUpdateData)
				    .then(
			    		//update success
			    		function(data) { console.log('node update success'); },
			    		//update error
			    		function(data) { console.log('node update error'); }
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
		   		NodeResource.delete(vm.deleteData)
				    .then(
			    		//delete success
			    		function(data) { console.log('node delete success'); },
			    		//delete error
			    		function(data) { console.log('node delete error'); }
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
		   		NodeResource.index(vm.indexData)
				    .then(
			    		//index success
			    		function(data) { console.log('node index success'); },
			    		//index error
			    		function(data) { console.log('node index error'); }
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
		
		//files request
	    
	    //do files
		function doFiles(filesForm) {
			if(filesForm.$valid) {
				console.log('SADF'); 
				requestStart = Date.now();
		   		NodeResource.files(vm.filesData)
				    .then(
			    		//files success
			    		function(data) { console.log('node files success'); },
			    		//files error
			    		function(data) { console.log('node files error'); }
				    );
			}
		};
		
		//confirm callback
		function subFilesConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subFilesConfirmed'); 
			vm.filesRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subFilesFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subFilesFailed'); 
			vm.filesRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//comments request

		//do comments
		function doComments(commentsForm) {
			if(commentsForm.$valid) {
				requestStart = Date.now();
		   		NodeResource.comments(vm.commentsData)
				    .then(
			    		//comments success
			    		function(data) { console.log('node comments success'); },
			    		//comments error
			    		function(data) { console.log('node comments error'); }
				    );
			}
		};

		//confirm callback
		function subCommentsConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subCommentsConfirmed'); 
			vm.commentsRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subCommentsFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subCommentsFailed'); 
			vm.commentsRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}

		//_____________________________________________________________________________________________________________________________________________
		
		//attachFile request

		//do attachFile
		function doAttachFile(attachFileForm) {
			if(attachFileForm.$valid) {
				requestStart = Date.now();
		 		NodeResource.attachFile(vm.attachFileData)
				    .then(
			    		//attachFile success
			    		function(data) { console.log('node attachFile success'); },
			    		//attachFile error
			    		function(data) { console.log('node attachFile error'); }
				    );
			}
		};

		//confirm callback
		function subAttachFileConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subAttachFileConfirmed'); 
			vm.attachFileRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subAttachFileFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subAttachFileFailed'); 
			vm.attachFileRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}

		//_____________________________________________________________________________________________________________________________________________
		
		
	};
	
	

})();
