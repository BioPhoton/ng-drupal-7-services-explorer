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
		SystemChannel.subConnectConfirmed($scope, subConnectConfirmedCallback);
		//test the connect on failed event
	    SystemChannel.subConnectFailed($scope, subConnectFailedCallback);
	    
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
		SystemChannel.subGetVariableConfirmed($scope, subGetVariableConfirmedCallback);
		//test the connect on failed event
		SystemChannel.subGetVariableFailed($scope, subGetVariableFailedCallback);

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
		SystemChannel.subSetVariableConfirmed($scope, subSetVariableConfirmedCallback);
		//test the connect on failed event
		SystemChannel.subSetVariableFailed($scope, subSetVariableFailedCallback);

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
		SystemChannel.subDelVariableConfirmed($scope, subDelVariableConfirmedCallback);
		//test the connect on failed event
		SystemChannel.subDelVariableFailed($scope, subDelVariableFailedCallback);
		
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
		function subConnectConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subConnectConfirmed'); 
			vm.connectRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		//failed callback
		function subConnectFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subConnectFailed'); 
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
		function subGetVariableConfirmedCallback(data) { 
		   requestEnd = Date.now();
		   console.log('subGetVariableConfirmed'); 
		   vm.getVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		};
		//failed callback
		function subGetVariableFailedCallback(data) { 
		   requestEnd = Date.now();
		   console.log('subGetVariableFailed');
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
		function subSetVariableConfirmedCallback(data) { 
		   requestEnd = Date.now();
		   console.log('subSetVariableConfirmed'); 
		   vm.setVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		};
		//failed callback
		function subSetVariableFailedCallback(data) { 
		   requestEnd = Date.now();
		   console.log('subSetVariableFailed');
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
		function subDelVariableConfirmedCallback(data) { 
		   requestEnd = Date.now();
		   console.log('subDelVariableConfirmed'); 
		   vm.delVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		};
		//failed callback
		function subDelVariableFailedCallback(data) { 
		   requestEnd = Date.now();
		   console.log('subDelVariableFailed');
		   vm.delVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		};
		
		//_____________________________________________________________________________________________________________________________________________

	};
	
	

})();
