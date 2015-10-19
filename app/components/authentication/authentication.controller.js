(function() {
    'use strict';


angular
    .module('ngDrupalServicesTests.authentication.controller', ['ngDrupal7Services-3_x.commons.authentication.service', 'ngDrupal7Services-3_x.commons.authentication.channel', 'commons.filters.ifEmpty'])
    .controller('AuthenticationController', AuthenticationController);

	AuthenticationController.$inject = ['$scope', 'AuthenticationService', 'AuthenticationChannel', '$filter'];

	/** @ngInject */ 
	function AuthenticationController($scope ,AuthenticationService, AuthenticationChannel, $filter) 
	{ 
		
		
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
	  
	    // getLastConnectionTime
		
		// store requests
		vm.lastConnectionTime = '';

		// test request
		vm.doGetLastConnectTime = doGetLastConnectTime;

	    //__________________________________________________________________________________________________
		
		// getConnectionState
		
		// store requests
		vm.connectionStateChanges = [];
		vm.currentConnectionState = '';

		// test request
		vm.doGetConnectionState = doGetConnectionState;
		// test connectionState updated event
		AuthenticationChannel.subAuthenticationConnectionStateUpdated($scope, subAuthenticationConnectionStateUpdatedCallback);

	    //__________________________________________________________________________________________________
		
		// getAuthenticationHeaders
		
		// store requests
		vm.currentAuthenticationHeaders = '';

		// test request
		vm.doGetAuthenticationHeaders = doGetAuthenticationHeaders;

	    //__________________________________________________________________________________________________
		
		// getCurrentUser
		
		// store requests
		vm.currentUserChanges = [];
		vm.currentUser = AuthenticationService.getCurrentUser();

		// test request
		vm.doGetCurrentUser = doGetCurrentUser;
		
		// test connectionState updated event
		AuthenticationChannel.subAuthenticationCurrentUserUpdated($scope, subAuthenticationCurrentUserUpdatedCallback);

	    //__________________________________________________________________________________________________
		
		///////////////////////
	    
		// login request
	    
	    // do request
		function doLogin(loginForm) {
			if(loginForm.$valid) {
				requestStart = Date.now();
		   		AuthenticationService.login(vm.loginData)
				    .then(
				    		//login success
				    		function(data) { 
				    			vm.loginData = {};
				    			console.log('auth login success', data);
				    			loginForm.$setPristine();
				    			loginForm.$setUntouched();
				    		},
				    		//login error
				    		function(data) { 
				    			console.log('auth login error'); 
				    		}
				    );
			}
			
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
	   		AuthenticationService
	   			.refreshConnection()
	   				.then(	function(data) { console.log('auth RefreshConnection success'); },
	   						function(data) { console.log('auth RefreshConnection error'); }
	   				);
		};
		
		// confirm callback
		function subAuthenticationRefreshConnectionConfirmedCallback(data) { 
			requestEnd = Date.now();
			console.log('subAuthenticationRefreshConnectionConfirmedCallback'); 
			vm.refreshConnectionRequests.push({requestStart:requestStart, requestEnd:requestEnd, requestDuration:requestEnd-requestStart, data:data});
		}
		// failed callback
		function subAuthenticationRefreshConnectionFailedCallback(data) { 
			requestEnd = Date.now();
			console.log('subAuthenticationRefreshConnectionFailedCallback'); 
			vm.refreshConnectionRequests.push({requestStart:requestStart, requestEnd:requestEnd,  requestDuration:requestEnd-requestStart, data:data});
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		// get last ConnectionTime 
	    
	    //do request
		function doGetLastConnectTime() {
			vm.lastConnectionTime = AuthenticationService.getLastConnectTime();
		};
		
		
		
		//_____________________________________________________________________________________________________________________________________________
		
		// get connectionState 
		
	    //do request
		function doGetConnectionState() {
			console.log(AuthenticationService.getConnectionState()); 
			vm.currentConnectionState = AuthenticationService.getConnectionState();
		};
		
		// confirm callback
		function subAuthenticationConnectionStateUpdatedCallback(data) { 
			console.log('subAuthenticationConnectionStateUpdatedCallback'); 
			vm.connectionStateChanges.push({timeOfChange: Date.now(), from: vm.currentConnectionState, to: data});    
			vm.currentConnectionState = data;
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
		// get authenticationHeaders 
	    
	    //do request
		function doGetAuthenticationHeaders() {
			vm.currentAuthenticationHeaders = AuthenticationService.getAuthenticationHeaders();    
		};
		
		//_____________________________________________________________________________________________________________________________________________
		
		// currentUser request
	    
	    //do request
		function doGetCurrentUser() {
			currentUser = AuthenticationService.getCurrentUser();
		};
		
		// confirm callback
		function subAuthenticationCurrentUserUpdatedCallback(data) { 
			console.log('subAuthenticationCurrentUserUpdatedCallback'); 
			vm.currentUserChanges.push({timeOfChange: Date.now(), from: vm.currentUser, to: data});
			vm.currentUser = data;
		}
		
		//_____________________________________________________________________________________________________________________________________________
		
	};
	
	

})();
