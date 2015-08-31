;(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.system.controller', ['ngDrupal7Services-3_x.resources.system.resource', 'ngDrupal7Services-3_x.resources.system.channel'])
    .controller('SystemController', SystemController);

	SystemController.$inject = ['$scope', 'SystemResource', 'SystemChannel'];

	/** @ngInject */ 
	function SystemController($scope, SystemResource, SystemChannel) { 
		
		var requestEnd = 0;
		var requestStart = 0;
		
		// jshint validthis: true 
		var vm = this;
		
		//connect request
		
		//store requests
		vm.connectRequests = [];
		//test request
		vm.doConncet = doConncet;
		//test the connect on confirm event
		SystemChannel.subSystemConnectConfirmed($scope, subSystemConnectConfirmedCallback);
		//test the connect on failed event
	    SystemChannel.subSystemConnectFailed($scope, subSystemConnectFailedCallback);
	    
	    //__________________________________________________________________________________________________
	    
	    //get_variable request
		
	    //store requests
		vm.getVariableRequests = [];
		//test request
		vm.doGetVariable = doGetVariable;
		vm.getVariableData = {
				   name : '',
				   default : ''
		};
		//test the connect on confirm event
		SystemChannel.subSystemGetVariableConfirmed($scope, subSystemGetVariableConfirmedCallback);
		//test the connect on failed event
		SystemChannel.subSystemGetVariableFailed($scope, subSystemGetVariableFailedCallback);

	    //__________________________________________________________________________________________________
	    
		//set_variable request
		
		//store requests
		vm.setVariableRequests = [];
		//test request
		vm.doSetVariable = doSetVariable;
		vm.setVariableData = {
				   name 	: '',
				   value 	: ''
		};
		//test the connect on confirm event
		SystemChannel.subSystemSetVariableConfirmed($scope, subSystemSetVariableConfirmedCallback);
		//test the connect on failed event
		SystemChannel.subSystemSetVariableFailed($scope, subSystemSetVariableFailedCallback);

	    //__________________________________________________________________________________________________
		
		//del_variable request
		
		//store requests
		vm.delVariableRequests = [];
		//test request
		vm.doDelVariable = doDelVariable;
		vm.delVariableData = {
				   name 	: ''
		};
		//test the connect on confirm event
		SystemChannel.subSystemDelVariableConfirmed($scope, subSystemDelVariableConfirmedCallback);
		//test the connect on failed event
		SystemChannel.subSystemDelVariableFailed($scope, subSystemDelVariableFailedCallback);
		
	    //__________________________________________________________________________________________________
	    
		///////////////////////
		
		//connect request
	    
	    //do request
		function doConncet() {
			requestStart = Date.now();
	   		SystemResource.connect()
			    .then(
			    		//connect success
			    		function(data) { console.log('system connect success'); },
			    		//connect error
			    		function(data) { console.log('system connect error'); }
			    );
		}
		//confirm callback
		function subSystemConnectConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subSystemConnectConfirmed'); 
			vm.connectRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subSystemConnectFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subSystemConnectFailed'); 
			vm.connectRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		//get_variable request
		
		//do request
		function doGetVariable() {
			console.log('doGetVariable'); 
			requestStart = Date.now();
				SystemResource.get_variable(vm.getVariableData)
					.then(
				    	//get_variable success
				    	function(data) { console.log('system get_variable success'); },
				    	//get_variable error
				    	function(data) { console.log('system get_variable error'); }
				    );
		};
		//confirm callback
		function subSystemGetVariableConfirmedCallback(data) { 
		   requestEnd = Date.now();
		   console.log('subSystemGetVariableConfirmed'); 
		   vm.getVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		};
		//failed callback
		function subSystemGetVariableFailedCallback(data) { 
		   requestEnd = Date.now();
		   console.log('subSystemGetVariableFailed');
		   vm.getVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
	   };
		
	   //_____________________________________________________________________________________________________________________________________________
	   
	   //set_variable request
		
		//do request
		function doSetVariable() {
			requestStart = Date.now();
				SystemResource.set_variable(vm.setVariableData)
					.then(
				    	//get_variable success
				    	function(data) { console.log('system set_variable success'); },
				    	//get_variable error
				    	function(data) { console.log('system set_variable error'); }
				    );
		};
		//confirm callback
		function subSystemSetVariableConfirmedCallback(data) { 
		   requestEnd = Date.now();
		   console.log('subSystemSetVariableConfirmed'); 
		   vm.setVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		};
		//failed callback
		function subSystemSetVariableFailedCallback(data) { 
		   requestEnd = Date.now();
		   console.log('subSystemSetVariableFailed');
		   vm.setVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		};
		   
		//_____________________________________________________________________________________________________________________________________________
		  
		//del_variable request
		
		//do request
		function doDelVariable() {
			requestStart = Date.now();
				SystemResource.del_variable(vm.delVariableData)
					.then(
				    	//get_variable success
				    	function(data) { console.log('system del_variable success'); },
				    	//get_variable error
				    	function(data) { console.log('system del_variable error'); }
				    );
		};
		//confirm callback
		function subSystemDelVariableConfirmedCallback(data) { 
		   requestEnd = Date.now();
		   console.log('subSystemDelVariableConfirmed'); 
		   vm.delVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		};
		//failed callback
		function subSystemDelVariableFailedCallback(data) { 
		   requestEnd = Date.now();
		   console.log('subSystemDelVariableFailed');
		   vm.delVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		};
		
		//_____________________________________________________________________________________________________________________________________________

	};
	
	

})();
