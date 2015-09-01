(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.home.controller', [
                                                     'ngDrupal7Services-3_x.commons.http.intercepter.requestAccept'
                                                    ,'ngDrupal7Services-3_x.commons.authentication.channelConstant'
                                                    ,'ngDrupal7Services-3_x.commons.authentication.channel'
                                                    ,'ngDrupal7Services-3_x.commons.authentication.serviceConstant'
                                                    ,'ngDrupal7Services-3_x.commons.authentication.service'
                                                    ])
    .controller('HomeController', HomeController);

	HomeController.$inject = ['$scope', 
	                          'RequestIntercepterAccept'
	                          ,'AuthenticationChannelConstant'
	                          ,'AuthenticationChannel'
	                          ,'AuthenticationServiceConstant'
	                          ,'AuthenticationService'
	                          ];

	/** @ngInject */ 
	function HomeController($scope,  RequestIntercepterAccept
									,AuthenticationChannelConstant
									,AuthenticationChannel
									,AuthenticationServiceConstant
									,AuthenticationService
			) 
	{ 
		
		
		console.log('RequestIntercepterAccept: ', RequestIntercepterAccept); 
		console.log('AuthenticationChannelConstant: ', AuthenticationChannelConstant); 
		console.log('AuthenticationChannel: ', AuthenticationChannel); 
		console.log('AuthenticationServiceConstant: ', AuthenticationServiceConstant);
		console.log('AuthenticationService: ', AuthenticationService);
		
		var requestEnd = 0;
		var requestStart = 0;
		 
		// jshint validthis: true 
		var vm = this;

		// login request
		
		// store requests
		vm.loginRequests = [];
		vm.loginData = {
				uid : ''
		};
		// test request
		vm.doLogin = doLogin;
		// test the login on confirm event
		AuthenticationChannel.subAuthenticationLoginConfirmed($scope, subAuthenticationLoginConfirmedCallback);
		// test the login on failed event
		AuthenticationChannel.subAuthenticationLoginFailed($scope, subAuthenticationLoginFailedCallback);

	    //__________________________________________________________________________________________________
		
		// logout request
		
		// store requests
		vm.logoutRequests = [];

		// test request
		vm.doLogout = doLogout;
		// test the token on confirm event
		AuthenticationChannel.subAuthenticationLogoutConfirmed($scope, subAuthenticationLogoutConfirmedCallback);
		// test the token on failed event
	    AuthenticationChannel.subAuthenticationLogoutFailed($scope, subAuthenticationLogoutFailedCallback);

	    //__________________________________________________________________________________________________
	  
		///////////////////////
	    
		// login request
	    
	    // do request
		function doLogin() {
			requestStart = Date.now();
	   		AuthenticationService.login(vm.loginData)
			    .then(
			    		//login success
			    		function(data) { console.log('user login success'); },
			    		//login error
			    		function(data) { console.log('user login error'); }
			    );
		};
		
		// confirm callback
		function subAuthenticationLoginConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subAuthenticationLoginConfirmed'); 
			vm.loginRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		// failed callback
		function subAuthenticationLoginFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subAuthenticationLoginFailed', data); 
			vm.loginRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		// logout request
	    
	    //do request
		function doLogout() {
			requestStart = Date.now();
	   		AuthenticationService.logout(vm.logoutData)
			    .then(
		    		//logout success
		    		function(data) { console.log('user logout success'); },
		    		//logout error
		    		function(data) { console.log('user logout error'); }
			    );
		};
		
		// confirm callback
		function subAuthenticationLogoutConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subAuthenticationLogoutConfirmed'); 
			vm.logoutRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		// failed callback
		function subAuthenticationLogoutFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subAuthenticationLogoutFailed'); 
			vm.logoutRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		  /**/
	};
	
	

})();
