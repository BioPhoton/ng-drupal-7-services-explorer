(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.system.controller', ['SystemResourceModules'])
    .controller('SystemController', SystemController);


/** @ngInject */
function SystemController($scope, SystemResourceChannel, SystemResource) { 
	/* jshint validthis: true */
	var vm = this;
	
	vm.isCollapsed = false;
	
	var requestEnd = 0;
	var requestStart = 0;
	   
	/*connect request*/
	//store requests
	vm.connectRequests = [];
	//test request
	vm.doConncet = doConncet;
	//test the connect on confirm event
	SystemResourceChannel.onSystemConnectConfirmed($scope, onSystemConnectConfirmedCallback);
	//test the connect on failed event
    SystemResourceChannel.onSystemConnectFailed($scope, onSystemConnectFailedCallback);
    
    /*get_variable request*/
	//store requests
	vm.getVariableRequests = [];
	//test request
	vm.doGetVariable = doGetVariable;
	vm.getVariableData = {
			   name : ''
	};
	//test the connect on confirm event
	SystemResourceChannel.onSystemGetVariableConfirmed($scope, onSystemGetVariableConfirmedCallback);
	//test the connect on failed event
	SystemResourceChannel.onSystemGetVariableFailed($scope, onSystemGetVariableFailedCallback);
	
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
	SystemResourceChannel.onSystemSetVariableConfirmed($scope, onSystemSetVariableConfirmedCallback);
	//test the connect on failed event
	SystemResourceChannel.onSystemSetVariableFailed($scope, onSystemSetVariableFailedCallback);
	
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
	
	/*get_variable request*/
	
	//do request
	function doGetVariable() {
		requestStart = Date.now();
			SystemResource.get_variable(vm.getVariableData.name)
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
	   
	  
	   /*
	   //set_variable
	   $scope.systemSetVariableRequests = [];
	   $scope.setVariableData = {
			   name 	: '',
			   value 	: '',
	   };
	   $scope.callSystemRecourceSetVariable = function() {
		   		requestStart = Date.now();
				SystemResource.set_variable($scope.setVariableData.name, $scope.setVariableData.value)
			    .then(
			    		//set_variable success
				    	function(data) { console.log('system set_variable success'); },
				    	//set_variable error
				    	function(data) { console.log('system set_variable error'); }
			    );
	   };
	   //
	   SystemResourceChannel.onSystemSetVariableConfirmed($scope, function(data) { 
		   requestEnd = Date.now();
		   $scope.systemSetVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
	   });
	 
	   SystemResourceChannel.onSystemSetVariableFailed($scope, function(data) { 
		   requestEnd = Date.now();
		   $scope.systemSetVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
	   });
	   
	   //del variable
	   $scope.systemDelVariableRequests = [];
	   $scope.delVariableData = {
			   name : ''
	   };
	   $scope.callSystemRecourceDelVariable = function() {
		   
		   	requestStart = Date.now();
			SystemResource.del_variable($scope.delVariableData.name)
		    .then(
		    		//set_variable success
			    	function(data) { console.log('system del_variable success'); },
			    	//set_variable error
			    	function(data) { console.log('system del_variable error'); }
		    );
	   };
	   //
	   SystemResourceChannel.onSystemDelVariableConfirmed($scope, function(data) { 
		   requestEnd = Date.now();
		   $scope.systemDelVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
	   });
	 
	   SystemResourceChannel.onSystemDelVariableFailed($scope, function(data) { 
		   requestEnd = Date.now();
		   $scope.systemDelVariableRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
	   });
	*/
	
	
	
	
	
	
	
	
	
	
	
	

};

SystemController.$inject = ['$scope', 'SystemResourceChannel', 'SystemResource'];

})();
