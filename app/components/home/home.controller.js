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
	    
	    // refresh connection request
		
		// store requests
		vm.refreshConnectionRequests = [];

		// test request
		vm.doRefreshConnection = doRefreshConnection;
		// test the token on confirm event
		AuthenticationChannel.subAuthenticationRefreshConnectionConfirmed($scope, subAuthenticationRefreshConnectionConfirmedCallback);
		// test the token on failed event
	    AuthenticationChannel.subAuthenticationRefreshConnectionFailed($scope, subAuthenticationRefreshConnectionFailedCallback);

	    //__________________________________________________________________________________________________
	  
		///////////////////////
	    
		// login request
	    
	    // do request
		function doLogin() {
			requestStart = Date.now();
	   		AuthenticationService.login(vm.loginData)
			    .then(
			    		//login success
			    		function(data) { console.log('auth login success'); },
			    		//login error
			    		function(data) { console.log('auth login error'); }
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
		    		function(data) { console.log('auth logout success'); },
		    		//logout error
		    		function(data) { console.log('auth logout error'); }
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


		// refresh request
	    
	    //do request
		function doRefreshConnection() {
			requestStart = Date.now();
	   		AuthenticationService.refreshConnection()
			    .then(
		    		//logout success
		    		function(data) { console.log('auth RefreshConnection success'); },
		    		//logout error
		    		function(data) { console.log('auth RefreshConnection error'); }
			    );
		};
		
		// confirm callback
		function subAuthenticationRefreshConnectionConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subAuthenticationRefreshConnectionConfirmedCallback'); 
			vm.logoutRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		// failed callback
		function subAuthenticationRefreshConnectionFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subAuthenticationRefreshConnectionFailedCallback'); 
			vm.logoutRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
	};
	
	

})();
