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
		vm.retrieveData.args = "args";
		vm.retrieveData.offset = 1;
		vm.retrieveData.limit = 1;
		vm.retrieveData.format_output = false;
		
		vm.retrieveData.exposed_sorts = {};
		vm.retrieveData.exposed_sorts.sort_order = 'ASC';
		vm.retrieveData.exposed_sorts.sort_by = "created";
		
		vm.retrieveData.exposed_filters = {};
		vm.retrieveData.exposed_filters.nid = 20;
		
		vm.retrieveData.exposed_filters.comment_count_op;
		vm.retrieveData.exposed_filters.comment_count = {};
		vm.retrieveData.exposed_filters.comment_count.value = 1;
		vm.retrieveData.exposed_filters.comment_count.min = 1;
		vm.retrieveData.exposed_filters.comment_count.max = 1;
		vm.retrieveData.exposed_filters.comment_count.regular_expression = 'a regex here';
		
		
		
		vm.exposed_filtersCollapsed = true;
		vm.exposed_sortsCollapsed = true;
		
		
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
				
				
				if( vm.retrieveData.exposed_filters.comment_count_op === 'regular_expression' || 
					vm.retrieveData.exposed_filters.comment_count_op === 'between' ||
					vm.retrieveData.exposed_filters.comment_count_op === 'not+between' ) {
					
					delete vm.retrieveData.exposed_filters.comment_count.value;
					
					if(vm.retrieveData.exposed_filters.comment_count_op === "regular_expression") {
						delete vm.retrieveData.exposed_filters.comment_count.min;
						delete vm.retrieveData.exposed_filters.comment_count.max;
					}
					
					if(vm.retrieveData.exposed_filters.comment_count_op === "between" || vm.retrieveData.exposed_filters.comment_count_op === "not+between") {
						delete vm.retrieveData.exposed_filters.comment_count.regular_expression;
					}
					
				} else {
					console.log(); 
					delete vm.retrieveData.exposed_filters.comment_count.min;
					delete vm.retrieveData.exposed_filters.comment_count.max;
					delete vm.retrieveData.exposed_filters.comment_count.regular_expression;
				};

				requestStart = Date.now();
				ViewsResource.retrieve(vm.retrieveData)
				    .then(
				    		//retrieve success
				    		function(data) { console.log('views retrieve success', data); },
				    		//retrieve error
				    		function(error) { console.log('views retrieve error', error); }
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
