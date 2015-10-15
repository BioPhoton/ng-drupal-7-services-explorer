;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.file.controller', ['ngDrupal7Services-3_x.resources.file.resource', 'ngDrupal7Services-3_x.resources.file.channel', 'ngDrupal7Services-3_x.commons.helperService'])
    .controller('FileController', FileController);

	FileController.$inject = ['$scope', 'FileResource', 'FileChannel', 'DrupalHelperService'];

	/** @ngInject */ 
	function FileController($scope, FileResource, FileChannel, DrupalHelperService) { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		
		
		// jshint validthis: true 
		var vm = this;
		vm.descriptionColapsed = true;
		
		//retrieve request
		
		//store requests
		vm.retrieveRequests = [];
		vm.retrieveData = {
				fid : '',
				file_contents : '',
				image_styles : ''
		};
		//test request and event callbacks
		vm.doRetrieve = doRetrieve;
		//test the retrieve on confirm event
		FileChannel.subRetrieveConfirmed($scope, subRetrieveConfirmedCallback);
		//test the retrieve on failed event
	    FileChannel.subRetrieveFailed($scope, subRetrieveFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //create request
		
		//store requests
		vm.createRequests = [];
		
		vm.createData = {};
		vm.createData.file = "R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7";
		vm.createData.filename = 'drupal.jpg';
		vm.createData.filesize = vm.createData.file.length;
		vm.createData.filepath = 'content/node/20/';
		vm.createData.image_file_name = 'drupal image';
		
		//test request and event callbacks
		vm.doCreate = doCreate;
		//test the create on confirm event
		FileChannel.subCreateConfirmed($scope, subCreateConfirmedCallback);
		//test the create on failed event
	    FileChannel.subCreateFailed($scope, subCreateFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //delete request
		
		//store requests
		vm.deleteRequests = [];
		vm.deleteErrors = {}
		vm.deleteData = {
				fid : ''
		};
		//test request and event callbacks
		vm.doDelete = doDelete;
		//test the delete on confirm event
		FileChannel.subDeleteConfirmed($scope, subDeleteConfirmedCallback);
		//test the delete on failed event
	    FileChannel.subDeleteFailed($scope, subDeleteFailedCallback);

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
		FileChannel.subIndexConfirmed($scope, subIndexConfirmedCallback);
		//test the index on failed event
	    FileChannel.subIndexFailed($scope, subIndexFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    //createRaw request
		
		//store requests
		vm.createRawRequests = [];
		vm.createRawErrors = {}
		
		//test request and event callbacks
		vm.doCreateRaw = doCreateRaw;
		//test the delete on confirm event
		FileChannel.subCreateRawConfirmed($scope, subCreateRawConfirmedCallback);
		//test the delete on failed event
	    FileChannel.subCreateRawFailed($scope, subCreateRawFailedCallback);

	    //__________________________________________________________________________________________________
	    
	    
		///////////////////////
		
		//retrieve request
	    
	    //do request
		function doRetrieve(retrieveForm) {
			
			if(retrieveForm.$valid) {
				requestStart = Date.now();
		   		FileResource.retrieve(vm.retrieveData)
				    .then(
			    		//retrieve success
			    		function(data) { console.log('file retrieve success'); },
			    		//retrieve error
			    		function(data) { console.log('file retrieve error'); }
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
				vm.createData.field_nickname = DrupalHelperService.structureField(vm.createData.field_nickname);
				
				requestStart = Date.now();
				FileResource.create(vm.createData)
					.then(
						//create success
						function(data) { console.log('file create success'); },
						//create error
						function(data) { console.log('file create error'); }
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
		
		//delete request
	    
	    //do delete
		function doDelete(deleteForm) {
			if(deleteForm.$valid) {
				requestStart = Date.now();
		   		FileResource.delete(vm.deleteData)
				    .then(
			    		//delete success
			    		function(data) { console.log('file delete success'); },
			    		//delete error
			    		function(data) { console.log('file delete error'); }
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
		   		FileResource.index(vm.indexData)
				    .then(
			    		//index success
			    		function(data) { console.log('file index success'); },
			    		//index error
			    		function(data) { console.log('file index error'); }
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
		
		//createRaw request
	    
	    //do createRaw
		function doCreateRaw(createRawForm) {
			if(createRawForm.$valid) {
				requestStart = Date.now();
		   		FileResource.createRaw(vm.createRawData)
				    .then(
			    		//createRaw success
			    		function(data) { console.log('file createRaw success'); },
			    		//createRaw error
			    		function(data) { console.log('file createRaw error'); }
				    );
			}
		};
		
		//confirm callback
		function subCreateRawConfirmedCallback(data) { 
			requestEnd = Date.now();
			vm.createRawRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subCreateRawFailedCallback(data) { 
			requestEnd = Date.now();
			vm.createRawRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		
	};
	
	

})();
