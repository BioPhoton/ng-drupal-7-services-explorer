(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.system.controller', ['ngDrupal7Services-3_x.resources.system.resource', 'ngDrupal7Services-3_x.resources.system.channel'])
    .controller('SystemController', SystemController);


/** @ngInject */
function SystemController($scope, SystemChannel, SystemResource) { 
	
	var requestEnd = 0;
	var requestStart = 0;
	
	/* jshint validthis: true */
	var vm = this;

	/*connect request*/
	
	//store requests
	vm.connectRequests = [];
	//test request
	vm.doConncet = doConncet;
	//test the connect on confirm event
	SystemChannel.onSystemConnectConfirmed($scope, onSystemConnectConfirmedCallback);
	//test the connect on failed event
    SystemChannel.onSystemConnectFailed($scope, onSystemConnectFailedCallback);
    
    //__________________________________________________________________________________________________
    
    /*get_variable request*/
	
    //store requests
	vm.getVariableRequests = [];
	//test request
	vm.doGetVariable = doGetVariable;
	vm.getVariableData = {
			   name : '',
			   default : ''
	};
	//test the connect on confirm event
	SystemChannel.onSystemGetVariableConfirmed($scope, onSystemGetVariableConfirmedCallback);
	//test the connect on failed event
	SystemChannel.onSystemGetVariableFailed($scope, onSystemGetVariableFailedCallback);

    //__________________________________________________________________________________________________
    
	/*set_variable request*/
	
	//store requests
	vm.setVariableRequests = [];
	//test request
	vm.doSetVariable = doSetVariable;
	vm.setVariableData = {
			   name 	: '',
			   value 	: ''
	};
	//test the connect on confirm event
	SystemChannel.onSystemSetVariableConfirmed($scope, onSystemSetVariableConfirmedCallback);
	//test the connect on failed event
	SystemChannel.onSystemSetVariableFailed($scope, onSystemSetVariableFailedCallback);

    //__________________________________________________________________________________________________
	
	/*del_variable request*/
	
	//store requests
	vm.delVariableRequests = [];
	//test request
	vm.doDelVariable = doDelVariable;
	vm.delVariableData = {
			   name 	: ''
	};
	//test the connect on confirm event
	SystemChannel.onSystemDelVariableConfirmed($scope, onSystemDelVariableConfirmedCallback);
	//test the connect on failed event
	SystemChannel.onSystemDelVariableFailed($scope, onSystemDelVariableFailedCallback);

    //__________________________________________________________________________________________________
    
	///////////////////////
	
    /*connect request*/
    
    //do request
	function doConncet() {
		requestStart = Date.now();
   		SystemResource.connect()
		    .then(
		    		//connect success
		    		function(data) { console.log('system conncet success'); },
		    		//connect error
		    		function(data) { console.log('system conncet error'); }
		    );
	}
	//confirm callback
	function onSystemConnectConfirmedCallback(data) { 
		requestEnd = Date.now();
		console.log('onSystemConnectConfirmed'); 
		vm.connectRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
	}
	//failed callback
	function onSystemConnectFailedCallback(data) { 
		requestEnd = Date.now();
		console.log('onSystemConnectFailed'); 
		vm.connectRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
	}
	
	//_____________________________________________________________________________________________________________________________________________
	
	/*get_variable request*/
	
	//do request
	function doGetVariable() {
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
	function onSystemGetVariableConfirmedCallback(data) { 
	   requestEnd = Date.now();
	   console.log('onSystemGetVariableConfirmed'); 
	   vm.getVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
	};
	//failed callback
	function onSystemGetVariableFailedCallback(data) { 
	   requestEnd = Date.now();
	   console.log('onSystemGetVariableFailed');
	   vm.getVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
   };
	
   //_____________________________________________________________________________________________________________________________________________
   
   /*set_variable request*/
	
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
	function onSystemSetVariableConfirmedCallback(data) { 
	   requestEnd = Date.now();
	   console.log('onSystemSetVariableConfirmed'); 
	   vm.setVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
	};
	//failed callback
	function onSystemSetVariableFailedCallback(data) { 
	   requestEnd = Date.now();
	   console.log('onSystemSetVariableFailed');
	   vm.setVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
	};
	   
	//_____________________________________________________________________________________________________________________________________________
	  
	/*del_variable request*/
	
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
	function onSystemDelVariableConfirmedCallback(data) { 
	   requestEnd = Date.now();
	   console.log('onSystemDelVariableConfirmed'); 
	   vm.delVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
	};
	//failed callback
	function onSystemDelVariableFailedCallback(data) { 
	   requestEnd = Date.now();
	   console.log('onSystemDelVariableFailed');
	   vm.delVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
	};
	   
	//_____________________________________________________________________________________________________________________________________________

};

SystemController.$inject = ['$scope', 'SystemChannel', 'SystemResource'];

})();
