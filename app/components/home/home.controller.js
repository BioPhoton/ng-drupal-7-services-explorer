(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.home.controller', [
                                                     'ngDrupal7Services-3_x.commons.http.intercepter.requestAccept'
                                                    ,'ngDrupal7Services-3_x.commons.authentication.channelConstant'
                                                    ,'ngDrupal7Services-3_x.commons.authentication.channel'
                                                    ,'ngDrupal7Services-3_x.commons.authentication.serviceConstant'
                                                    //,'ngDrupal7Services-3_x.commons.authentication.service'
                                                    ])
    .controller('HomeController', HomeController);

	HomeController.$inject = ['$scope', 
	                          'RequestIntercepterAccept'
	                          ,'AuthenticationChannelConstant'
	                          ,'AuthenticationChannel',
	                          //,'AuthenticationServiceConstant'
	                          //,'AuthenticationService'
	                          ];

	/** @ngInject */ 
	function HomeController($scope,  RequestIntercepterAccept
									,AuthenticationChannelConstant
									,AuthenticationChannel
									//,AuthenticationServiceConstant
									//,AuthenticationService
			) { 
		console.log('RequestIntercepterAccept: ', RequestIntercepterAccept); 
		console.log('AuthenticationChannelConstant: ', AuthenticationChannelConstant); 
		console.log('AuthenticationChannel: ', AuthenticationChannel); 
		//console.log('AuthenticationServiceConstant: ', AuthenticationServiceConstant);
		//console.log('AuthenticationService: ', AuthenticationService);
		
		var requestEnd = 0;
		var requestStart = 0;
		 
		// jshint validthis: true 
		var vm = this;

		//connect request
		
		//store requests
		vm.connectRequests = [];
		//test request
		vm.doConncet = doConncet;
		
		///////////////////////
		
		//connect request
	    
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
		
	};
	
	

})();
